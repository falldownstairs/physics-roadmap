-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "mongoId" TEXT,
    "googleId" TEXT,
    "email" TEXT NOT NULL,
    "displayName" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "profilePicture" TEXT,
    "profilePictureUpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL DEFAULT 'mechanics',
    "videoIndex" INTEGER NOT NULL DEFAULT 0,
    "questionIndex" INTEGER NOT NULL DEFAULT 0,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_answers" (
    "id" TEXT NOT NULL,
    "progressId" TEXT NOT NULL,
    "videoIndex" INTEGER,
    "questionIndex" INTEGER,
    "answer" JSONB,
    "isCorrect" BOOLEAN,

    CONSTRAINT "user_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_mongoId_key" ON "users"("mongoId");

-- CreateIndex
CREATE UNIQUE INDEX "users_googleId_key" ON "users"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "progress_userId_idx" ON "progress"("userId");

-- CreateIndex
CREATE INDEX "progress_courseId_lessonId_idx" ON "progress"("courseId", "lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "progress_userId_courseId_lessonId_key" ON "progress"("userId", "courseId", "lessonId");

-- CreateIndex
CREATE INDEX "user_answers_progressId_idx" ON "user_answers"("progressId");

-- AddForeignKey
ALTER TABLE "progress" ADD CONSTRAINT "progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_answers" ADD CONSTRAINT "user_answers_progressId_fkey" FOREIGN KEY ("progressId") REFERENCES "progress"("id") ON DELETE CASCADE ON UPDATE CASCADE;
