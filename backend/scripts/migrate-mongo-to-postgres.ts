import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, Prisma } from '@prisma/client';

for (const path of ['.env', '.env.local', '../.env', '../.env.local']) {
  dotenv.config({ path, override: false, quiet: true });
}

type MongoUserAnswer = {
  videoIndex?: number;
  questionIndex?: number;
  answer?: unknown;
  isCorrect?: boolean;
};

type MongoProgress = {
  lessonId?: string;
  courseId?: string;
  videoIndex?: number;
  questionIndex?: number;
  userAnswers?: MongoUserAnswer[];
  lastUpdated?: Date;
};

type MongoUser = {
  _id: { toString(): string };
  googleId?: string;
  email?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  profilePictureUpdatedAt?: Date;
  progress?: MongoProgress[];
  createdAt?: Date;
};

type CliOptions = {
  dryRun: boolean;
  email?: string;
  googleId?: string;
  mongoId?: string;
  limit?: number;
  skipExistingUsers: boolean;
  skipExistingProgress: boolean;
};

const getArgValue = (name: string): string | undefined => {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);

  const index = process.argv.indexOf(`--${name}`);
  if (index !== -1) return process.argv[index + 1];

  return undefined;
};

const parseLimit = (): number | undefined => {
  const rawLimit = getArgValue('limit');
  if (!rawLimit) return undefined;

  const limit = Number(rawLimit);
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error('--limit must be a positive integer');
  }

  return limit;
};

const options: CliOptions = {
  dryRun: process.argv.includes('--dry-run'),
  email: getArgValue('email'),
  googleId: getArgValue('google-id'),
  mongoId: getArgValue('mongo-id'),
  limit: parseLimit(),
  skipExistingUsers: process.argv.includes('--skip-existing-users'),
  skipExistingProgress: process.argv.includes('--skip-existing-progress'),
};

const mongoUri =
  process.env.MONGODB_URI ??
  process.env.MONGO_URI ??
  process.env.MONGODB_URL ??
  process.env.MONGO_URL;

const databaseUrl =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_PRISMA_URL ??
  process.env.POSTGRES_URL_NON_POOLING ??
  process.env.POSTGRES_URL;

if (!mongoUri) {
  throw new Error('Missing MongoDB connection string. Set MONGODB_URI, MONGO_URI, MONGODB_URL, or MONGO_URL.');
}

if (!databaseUrl) {
  throw new Error('Missing Postgres connection string. Set DATABASE_URL, POSTGRES_PRISMA_URL, POSTGRES_URL_NON_POOLING, or POSTGRES_URL.');
}

const adapter = new PrismaNeon({ connectionString: databaseUrl });
const prisma = new PrismaClient({ adapter });

const toDate = (value: unknown): Date | undefined => {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date;
  }
  return undefined;
};

const toNullableString = (value: unknown): string | null => {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

const toInt = (value: unknown, fallback = 0): number => {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
};

const toJsonValue = (value: unknown): Prisma.InputJsonValue | Prisma.JsonNull => {
  if (value === undefined || value === null) return Prisma.JsonNull;
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value;
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.map((item) => toJsonValue(item)) as Prisma.InputJsonArray;
  if (typeof value === 'object') {
    if ('toString' in value && value.constructor?.name === 'ObjectId') return value.toString();

    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, toJsonValue(entry)])
    ) as Prisma.InputJsonObject;
  }
  return String(value);
};

const migrateUser = async (mongoUser: MongoUser) => {
  const mongoId = mongoUser._id.toString();
  const email = toNullableString(mongoUser.email);

  if (!email) {
    console.warn(`Skipping Mongo user ${mongoId}: missing email`);
    return { users: 0, progress: 0, answers: 0 };
  }

  const userData = {
    mongoId,
    googleId: toNullableString(mongoUser.googleId),
    email,
    displayName: toNullableString(mongoUser.displayName),
    firstName: toNullableString(mongoUser.firstName),
    lastName: toNullableString(mongoUser.lastName),
    profilePicture: toNullableString(mongoUser.profilePicture),
    profilePictureUpdatedAt: toDate(mongoUser.profilePictureUpdatedAt) ?? new Date(),
    createdAt: toDate(mongoUser.createdAt) ?? new Date(),
  };

  const existingUser =
    (await prisma.user.findUnique({ where: { mongoId } })) ??
    (await prisma.user.findUnique({ where: { email } }));

  if (existingUser && options.skipExistingUsers) {
    return { users: 0, progress: 0, answers: 0, skippedUsers: 1, skippedProgress: 0 };
  }

  const user = existingUser
    ? await prisma.user.update({ where: { id: existingUser.id }, data: userData })
    : await prisma.user.create({ data: userData });

  let progressCount = 0;
  let answerCount = 0;
  let skippedProgress = 0;

  const existingProgressKeys = options.skipExistingProgress
    ? new Set(
      (await prisma.progress.findMany({
        where: { userId: user.id },
        select: { courseId: true, lessonId: true },
      })).map((progress) => `${progress.courseId}:${progress.lessonId}`)
    )
    : new Set<string>();

  for (const entry of mongoUser.progress ?? []) {
    const lessonId = toNullableString(entry.lessonId);
    if (!lessonId) {
      console.warn(`Skipping progress for user ${email}: missing lessonId`);
      continue;
    }

    const courseId = toNullableString(entry.courseId) ?? 'mechanics';
    if (existingProgressKeys.has(`${courseId}:${lessonId}`)) {
      skippedProgress += 1;
      continue;
    }

    const progress = await prisma.progress.upsert({
      where: {
        userId_courseId_lessonId: {
          userId: user.id,
          courseId,
          lessonId,
        },
      },
      create: {
        userId: user.id,
        lessonId,
        courseId,
        videoIndex: toInt(entry.videoIndex),
        questionIndex: toInt(entry.questionIndex),
        lastUpdated: toDate(entry.lastUpdated) ?? new Date(),
      },
      update: {
        videoIndex: toInt(entry.videoIndex),
        questionIndex: toInt(entry.questionIndex),
        lastUpdated: toDate(entry.lastUpdated) ?? new Date(),
      },
    });

    await prisma.userAnswer.deleteMany({ where: { progressId: progress.id } });

    const answers = entry.userAnswers ?? [];
    if (answers.length > 0) {
      await prisma.userAnswer.createMany({
        data: answers.map((answer, position) => ({
          progressId: progress.id,
          position,
          videoIndex: typeof answer.videoIndex === 'number' ? answer.videoIndex : null,
          questionIndex: typeof answer.questionIndex === 'number' ? answer.questionIndex : null,
          answer: toJsonValue(answer.answer),
          isCorrect: typeof answer.isCorrect === 'boolean' ? answer.isCorrect : null,
        })),
      });
    }

    progressCount += 1;
    answerCount += answers.length;
  }

  return { users: 1, progress: progressCount, answers: answerCount, skippedUsers: 0, skippedProgress };
};

const buildMongoFilter = () => {
  const filter: Record<string, unknown> = {};

  if (options.email) filter.email = options.email;
  if (options.googleId) filter.googleId = options.googleId;
  if (options.mongoId) filter._id = new mongoose.Types.ObjectId(options.mongoId);

  return filter;
};

const main = async () => {
  await mongoose.connect(mongoUri);

  const usersCollection = mongoose.connection.collection<MongoUser>('users');
  const mongoFilter = buildMongoFilter();
  const cursor = usersCollection.find(mongoFilter);
  if (options.limit) cursor.limit(options.limit);

  const mongoUsers = await cursor.toArray();

  if (options.dryRun) {
    const progressCount = mongoUsers.reduce((sum, user) => sum + (user.progress?.length ?? 0), 0);
    const answerCount = mongoUsers.reduce(
      (sum, user) => sum + (user.progress ?? []).reduce((nestedSum, entry) => nestedSum + (entry.userAnswers?.length ?? 0), 0),
      0
    );

    console.log(`Dry run: found ${mongoUsers.length} users, ${progressCount} progress entries, ${answerCount} answers in MongoDB.`);
    return;
  }

  const totals = { users: 0, progress: 0, answers: 0, skippedUsers: 0, skippedProgress: 0 };

  for (const mongoUser of mongoUsers) {
    const result = await migrateUser(mongoUser);
    totals.users += result.users;
    totals.progress += result.progress;
    totals.answers += result.answers;
    totals.skippedUsers += result.skippedUsers;
    totals.skippedProgress += result.skippedProgress;
  }

  console.log(`Migrated ${totals.users} users, ${totals.progress} progress entries, and ${totals.answers} answers to Postgres.`);
  console.log(`Skipped ${totals.skippedUsers} existing users and ${totals.skippedProgress} existing progress entries.`);
};

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await mongoose.disconnect();
  });
