"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, BookOpen, Youtube, CheckCircle } from 'lucide-react';
import QuestionSwitcher from '@/components/lesson/QuestionSwitcher';
import Video from '@/components/lesson/Video';
import CompletionBanner from '@/components/lesson/CompletionBanner';
import { fetchLesson } from '@/lib/api';
import type { Lesson as LessonType, QuestionData } from '@/lib/types';

export default function Lesson({ lessonId }: { lessonId: string }){
  const [lesson, setLesson] = useState<LessonType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  useEffect(() => {
    const getLessonData = async () => {
      try {
        setLoading(true);
        setError(null);
        const lessonData = await fetchLesson(lessonId);
        setLesson(lessonData);
      } catch (err) {
        console.error('Error fetching lesson:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    getLessonData();
  }, [lessonId]);

  const handleAnswerSubmit = useCallback((questionId: number, selectedAnswer: any, isCorrect: boolean) => {
    setAnsweredQuestions(prev => new Set(prev).add(questionId));
    setAnswers(prev => ({ ...prev, [questionId]: selectedAnswer }));
    setCorrectAnswers(prev => {
      const next = new Set(prev);
      if (isCorrect) next.add(questionId); else next.delete(questionId);
      return next;
    });
  }, []);

  const goBack = () => { if (typeof window !== 'undefined') window.history.back(); };

  if (loading) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-400"></div>
    </div>
  );
  if (!lesson) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center"><p className="text-slate-600">Lesson not found</p></div>
  );

  const allQuestionsAnswered = answeredQuestions.size === lesson.questions.length;
  const score = correctAnswers.size;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white shadow-xl border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button onClick={goBack} className="flex items-center gap-2 text-slate-600 hover:text-black hover:bg-slate-100 px-3 py-1.5 rounded-lg transition-all duration-200 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Roadmap
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-black mb-2">{lesson.title}</h1>
              <p className="text-slate-600 mb-4">{lesson.description}</p>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{lesson.estimatedTime}</div>
                <div>Difficulty: {lesson.difficulty}</div>
                <div className="flex items-center gap-1"><Youtube className="w-4 h-4" />{lesson.videoDuration}</div>
              </div>
            </div>
            {allQuestionsAnswered && (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 px-3 py-2 rounded-lg border border-green-200 shadow-lg">
                <CheckCircle className="w-5 h-5" />
                Complete ({score}/{lesson.questions.length})
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <Video id={lesson.youtubeVideoId} title={lesson.videoTitle} />
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow">
          <h2 className="text-lg font-bold text-black mb-2">{lesson.videoTitle}</h2>
          <p className="text-slate-600 text-sm">Duration: {lesson.videoDuration} • {lesson.questions.length} questions below</p>
        </div>
        {lesson.questions
          .map((q, i) => ({ question: q, originalIndex: i }))
          .filter(({ originalIndex: i }) => i === 0 || answeredQuestions.has(lesson.questions[i - 1].id))
          .map(({ question: q, originalIndex: i }) => (
            <QuestionSwitcher 
              key={`question-${q.id}-${i}`}
              question={q as QuestionData}
              index={i}
              total={lesson.questions.length}
              onAnswerSubmit={handleAnswerSubmit}
              initialAnswer={answers[q.id]}
            />
          ))}
        {allQuestionsAnswered && <CompletionBanner score={score} total={lesson.questions.length} />}
      </div>
    </div>
  );
}


