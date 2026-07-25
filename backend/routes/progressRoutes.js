const express = require('express');
const router = express.Router();
const { Prisma } = require('@prisma/client');
const prisma = require('../lib/prisma');
const dataService = require('../services/dataService');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: 'Not authenticated' });
};

const countProblems = (lesson) => {
  if (!lesson.videos) return 0;
  return lesson.videos.reduce((sum, v) => sum + (v.questions?.length || 0), 0);
};

const answerToJson = (answer) => answer == null ? Prisma.JsonNull : answer;

const formatUserAnswer = (answer) => ({
  videoIndex: answer.videoIndex,
  questionIndex: answer.questionIndex,
  answer: answer.answer,
  isCorrect: answer.isCorrect,
});

const formatProgress = (progress) => ({
  lessonId: progress.lessonId,
  courseId: progress.courseId,
  videoIndex: progress.videoIndex,
  questionIndex: progress.questionIndex,
  userAnswers: (progress.userAnswers || []).map(formatUserAnswer),
  lastUpdated: progress.lastUpdated,
});

// Get all progress for a course
router.get('/course/:courseName', isAuthenticated, async (req, res) => {
  try {
    const courseProgress = await prisma.progress.findMany({
      where: {
        userId: req.user.id,
        courseId: req.params.courseName,
      },
      include: {
        userAnswers: {
          orderBy: [
            { position: 'asc' },
            { id: 'asc' },
          ],
        },
      },
      orderBy: [
        { lastUpdated: 'desc' },
        { lessonId: 'asc' },
      ],
    });

    res.json({ progress: courseProgress.map(formatProgress) });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get total problems per lesson (PUBLIC - needed for progress bars)
router.get('/course/:courseName/problems', async (req, res) => {
  try {
    const lessons = dataService.getLessonsForCourse(req.params.courseName);
    const problemCounts = lessons.map(lesson => ({
      lessonId: lesson.id.toString(),
      totalProblems: countProblems(lesson)
    }));
    res.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.json(problemCounts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get completion status for a course
router.get('/course/:courseName/completion', isAuthenticated, async (req, res) => {
  try {
    const { courseName } = req.params;
    const lessons = dataService.getLessonsForCourse(courseName);
    const progressRows = await prisma.progress.findMany({
      where: {
        userId: req.user.id,
        courseId: courseName,
      },
      include: {
        _count: {
          select: { userAnswers: true },
        },
      },
    });
    const progressByLesson = new Map(progressRows.map(progress => [progress.lessonId, progress]));
    
    const lessonCompletions = {};
    lessons.forEach(lesson => {
      const lessonId = lesson.id.toString();
      const total = countProblems(lesson);
      const progress = progressByLesson.get(lessonId);
      const answered = progress?._count.userAnswers || 0;
      lessonCompletions[lessonId] = { completed: answered === total && total > 0, total, answered };
    });
    
    res.json({ lessonCompletions });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get progress for a specific lesson
router.get('/:courseId/:lessonId', isAuthenticated, async (req, res) => {
  try {
    const { courseId, lessonId } = req.params;
    const progress = await prisma.progress.findUnique({
      where: {
        userId_courseId_lessonId: {
          userId: req.user.id,
          courseId,
          lessonId,
        },
      },
      include: {
        userAnswers: {
          orderBy: [
            { position: 'asc' },
            { id: 'asc' },
          ],
        },
      },
    });

    if (!progress) return res.status(404).json({ message: 'No progress found' });

    res.json({
      videoIndex: progress.videoIndex,
      questionIndex: progress.questionIndex,
      userAnswers: progress.userAnswers.map(formatUserAnswer)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Save/update progress for a specific lesson
router.post('/:courseId/:lessonId', isAuthenticated, async (req, res) => {
  try {
    const { courseId, lessonId } = req.params;
    const { videoIndex, questionIndex, userAnswers } = req.body;
    const answers = Array.isArray(userAnswers) ? userAnswers : [];
    const lastUpdated = new Date();

    const progress = await prisma.$transaction(async (tx) => {
      const savedProgress = await tx.progress.upsert({
        where: {
          userId_courseId_lessonId: {
            userId: req.user.id,
            courseId,
            lessonId,
          },
        },
        create: {
          userId: req.user.id,
          lessonId,
          courseId,
          videoIndex: typeof videoIndex === 'number' ? videoIndex : 0,
          questionIndex: typeof questionIndex === 'number' ? questionIndex : 0,
          lastUpdated,
        },
        update: {
          videoIndex: typeof videoIndex === 'number' ? videoIndex : 0,
          questionIndex: typeof questionIndex === 'number' ? questionIndex : 0,
          lastUpdated,
        },
      });

      await tx.userAnswer.deleteMany({ where: { progressId: savedProgress.id } });

      if (answers.length > 0) {
        await tx.userAnswer.createMany({
          data: answers.map((answer, position) => ({
            progressId: savedProgress.id,
            position,
            videoIndex: typeof answer.videoIndex === 'number' ? answer.videoIndex : null,
            questionIndex: typeof answer.questionIndex === 'number' ? answer.questionIndex : null,
            answer: answerToJson(answer.answer),
            isCorrect: typeof answer.isCorrect === 'boolean' ? answer.isCorrect : null,
          })),
        });
      }

      return tx.progress.findUnique({
        where: { id: savedProgress.id },
        include: {
          userAnswers: {
            orderBy: [
              { position: 'asc' },
              { id: 'asc' },
            ],
          },
        },
      });
    });

    res.json({ message: 'Progress saved', progress: formatProgress(progress) });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
