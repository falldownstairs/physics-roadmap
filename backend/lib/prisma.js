const { PrismaClient } = require('@prisma/client');
const { PrismaNeon } = require('@prisma/adapter-neon');

const databaseUrl =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.POSTGRES_URL;

if (!databaseUrl) {
  throw new Error('Missing Postgres connection string. Set DATABASE_URL, POSTGRES_PRISMA_URL, POSTGRES_URL_NON_POOLING, or POSTGRES_URL.');
}

const globalForPrisma = global;

const adapter = globalForPrisma.__physicsPrismaAdapter || new PrismaNeon({ connectionString: databaseUrl });
const prisma = globalForPrisma.__physicsPrisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__physicsPrismaAdapter = adapter;
  globalForPrisma.__physicsPrisma = prisma;
}

module.exports = prisma;
