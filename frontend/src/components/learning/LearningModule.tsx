'use client';

import { useState, useEffect, useRef } from 'react';
import { Lesson, UserAnswer, ModuleProgress } from '@/lib/types';
import VideoPlayer from './VideoPlayer';
import QuestionRenderer from './QuestionRenderer';
import ExplanationDisplay from './ExplanationDisplay';

interface LearningModuleProps {
  lesson: Lesson;
}

export default function LearningModule({ lesson }: LearningModuleProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const currentQuestionRef = useRef<HTMLDivElement>(null);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`module-${lesson.id}-progress`);
    if (savedProgress) {
      const progress: ModuleProgress = JSON.parse(savedProgress);
      setCurrentVideoIndex(progress.videoIndex);
      setCurrentQuestionIndex(progress.questionIndex);
      setUserAnswers(progress.userAnswers);
    }
  }, [lesson.id]);

  // Save progress to localStorage
  useEffect(() => {
    const progress: ModuleProgress = {
      videoIndex: currentVideoIndex,
      questionIndex: currentQuestionIndex,
      userAnswers
    };
    localStorage.setItem(`module-${lesson.id}-progress`, JSON.stringify(progress));
  }, [currentVideoIndex, currentQuestionIndex, userAnswers, lesson.id]);

  const handleAnswerSubmit = (answer: string | number, isCorrect: boolean) => {
    const userAnswer: UserAnswer = {
      videoIndex: currentVideoIndex,
      questionIndex: currentQuestionIndex,
      answer,
      isCorrect
    };
    
    // Remove any previous answer for this question to avoid duplicates
    const filteredAnswers = userAnswers.filter(
      ans => !(ans.videoIndex === currentVideoIndex && ans.questionIndex === currentQuestionIndex)
    );
    
    setUserAnswers([...filteredAnswers, userAnswer]);
    
    // Automatically advance to next question
    const currentVideo = lesson.videos[currentVideoIndex];
    
    if (currentQuestionIndex < currentVideo.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentVideoIndex < lesson.videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Module complete
      alert('Congratulations! You have completed this lesson.');
    }
  };

  const getUserAnswer = (videoIdx: number, questionIdx: number) => {
    return userAnswers.find(
      ans => ans.videoIndex === videoIdx && ans.questionIndex === questionIdx
    );
  };

  const isQuestionCompleted = (videoIdx: number, questionIdx: number) => {
    return getUserAnswer(videoIdx, questionIdx) !== undefined;
  };

  const isCurrentQuestion = (videoIdx: number, questionIdx: number) => {
    return videoIdx === currentVideoIndex && questionIdx === currentQuestionIndex;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{lesson.title}</h1>
        <p className="text-slate-600">Estimated time: {lesson.estimatedTime}</p>
        <div className="mt-4 flex gap-2">
          {lesson.videos.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full ${
                index < currentVideoIndex
                  ? 'bg-blue-600'
                  : index === currentVideoIndex
                  ? 'bg-blue-400'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {lesson.videos.map((video, videoIdx) => {
          const shouldShowVideo = videoIdx <= currentVideoIndex;
          if (!shouldShowVideo) return null;

          return (
            <div key={videoIdx} className="space-y-8">
              <VideoPlayer videoId={video.videoId} title={video.videoTitle} />

              <div className="space-y-6">
                {video.questions.map((question, questionIdx) => {
                  const shouldShowQuestion = 
                    videoIdx < currentVideoIndex || 
                    (videoIdx === currentVideoIndex && questionIdx <= currentQuestionIndex);
                  
                  if (!shouldShowQuestion) return null;

                  const isCurrent = isCurrentQuestion(videoIdx, questionIdx);
                  const isCompleted = isQuestionCompleted(videoIdx, questionIdx);
                  const userAnswer = getUserAnswer(videoIdx, questionIdx);

                  return (
                    <div
                      key={questionIdx}
                      ref={isCurrent ? currentQuestionRef : null}
                      className={`bg-white rounded-lg shadow-md p-6 ${
                        isCompleted && !isCurrent ? 'opacity-75' : ''
                      }`}
                    >
                      <QuestionRenderer
                        question={question}
                        onSubmit={handleAnswerSubmit}
                        disabled={!isCurrent || isCompleted}
                        submittedAnswer={userAnswer?.answer}
                      />

                      {isCompleted && (
                        <ExplanationDisplay
                          explanation={question.explanation}
                          isCorrect={userAnswer!.isCorrect}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


