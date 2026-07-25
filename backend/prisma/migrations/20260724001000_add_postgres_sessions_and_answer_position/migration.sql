-- AlterTable
ALTER TABLE "user_answers" ADD COLUMN "position" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "user_answers_progressId_position_idx" ON "user_answers"("progressId", "position");

-- CreateTable
CREATE TABLE "sessions" (
    "sid" VARCHAR NOT NULL,
    "sess" JSONB NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("sid")
);

-- CreateIndex
CREATE INDEX "IDX_sessions_expire" ON "sessions"("expire");
