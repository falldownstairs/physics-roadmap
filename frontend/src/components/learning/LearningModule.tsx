'use client';

import { useState, useEffect, useRef } from 'react';
import { Lesson, UserAnswer, ModuleProgress } from '../../lib/types';
import { fetchProgress, saveProgress } from '../../lib/progressApi';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';
import VideoPlayer from './VideoPlayer';
import QuestionRenderer from './QuestionRenderer';
import ExplanationDisplay from './ExplanationDisplay';
import SignInPrompt from './SignInPrompt';

interface LearningModuleProps {
  lesson: Lesson;
}

export default function LearningModule({ lesson }: LearningModuleProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const currentQuestionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated: isUserAuthenticated, loading: authLoading } = useAuth();
  const hasLoadedProgress = useRef(false);
  
  // Load progress only from API for authenticated users
  useEffect(() => {
    async function loadProgress() {
      if (authLoading) return;
      
      setIsLoading(true);
      
      if (isUserAuthenticated) {
        const apiProgress = await fetchProgress(lesson.id);
        
        if (apiProgress) {
          setCurrentVideoIndex(apiProgress.videoIndex);
          setCurrentQuestionIndex(apiProgress.questionIndex);
          setUserAnswers(apiProgress.userAnswers);
        }
      }
      
      hasLoadedProgress.current = true;
      setIsLoading(false);
    }
    
    loadProgress();
  }, [lesson.id, lesson.videos, isUserAuthenticated, authLoading]);

  // Save progress whenever key state changes
  useEffect(() => {
    if (!hasLoadedProgress.current) return;
    if (authLoading || !isUserAuthenticated) return;
    
    const progress: ModuleProgress = {
      videoIndex: currentVideoIndex,
      questionIndex: currentQuestionIndex,
      userAnswers
    };
    
    saveProgress(lesson.id, progress).catch(err => {
      console.error('Failed to save progress:', err);
    });
  }, [currentVideoIndex, currentQuestionIndex, userAnswers, lesson.id, isUserAuthenticated, authLoading]);

  const handleAnswerSubmit = (videoIdx: number, questionIdx: number, answer: string | number, isCorrect: boolean) => {
    // Use functional update to avoid stale closures
    setUserAnswers(prevAnswers => {
      const userAnswer: UserAnswer = {
        videoIndex: videoIdx,
        questionIndex: questionIdx,
        answer,
        isCorrect
      };
      
      const filteredAnswers = prevAnswers.filter(
        ans => !(ans.videoIndex === videoIdx && ans.questionIndex === questionIdx)
      );
      
      const newUserAnswers = [...filteredAnswers, userAnswer].sort((a, b) => {
        if (a.videoIndex !== b.videoIndex) {
          return a.videoIndex - b.videoIndex;
        }
        return a.questionIndex - b.questionIndex;
      });
      
      return newUserAnswers;
    });
    
    const isAnsweringFurthestQuestion = 
      videoIdx === currentVideoIndex && questionIdx === currentQuestionIndex;
    
    if (isAnsweringFurthestQuestion) {
      const currentVideo = lesson.videos[videoIdx];
      
      if (questionIdx < currentVideo.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else if (videoIdx < lesson.videos.length - 1) {
        setCurrentVideoIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const getUserAnswer = (videoIdx: number, questionIdx: number) => {
    return userAnswers.find(
      ans => ans.videoIndex === videoIdx && ans.questionIndex === questionIdx
    );
  };

  const isQuestionAnswered = (videoIdx: number, questionIdx: number) => {
    return getUserAnswer(videoIdx, questionIdx) !== undefined;
  };

  // Generate progress segments
  const getProgressSegments = () => {
    const segments: Array<{ type: 'video' | 'question'; status: 'completed' | 'unanswered'; videoIdx: number; questionIdx?: number }> = [];
    
    lesson.videos.forEach((video, videoIdx) => {
      // Video is completed if it's been rendered (user has progressed to or past it)
      const videoStatus = videoIdx <= currentVideoIndex ? 'completed' : 'unanswered';
      segments.push({ type: 'video', status: videoStatus, videoIdx });
      
      // Add question segments
      video.questions.forEach((_, questionIdx) => {
        const questionStatus = isQuestionAnswered(videoIdx, questionIdx) ? 'completed' : 'unanswered';
        
        segments.push({ 
          type: 'question', 
          status: questionStatus, 
          videoIdx, 
          questionIdx 
        });
      });
    });
    
    return segments;
  };

  // Add scroll listener for compact mode
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading || authLoading) {
    return <div className="flex justify-center p-8">Loading your progress...</div>;
  }

  return (
    <div className="pb-6">
      {/* Sticky Header - Full Width */}
      <div className={`sticky top-0 z-30 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className={`max-w-5xl mx-auto px-6 transition-all duration-300 pt-4 pb-4`}>
          {/* Return to Roadmap Button */}
          <Link
            href="/mechanics"
            className="mb-3 flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Roadmap
          </Link>

          <div className={`transition-all duration-300 ${
            isScrolled ? 'mb-3' : 'mb-4'
          }`}>
            <h1 className={`font-bold text-slate-800 transition-all duration-300 ${
              isScrolled ? 'text-xl mb-1' : 'text-3xl mb-2'
            }`}>
              {lesson.title}
            </h1>
            {!isScrolled && (
              <p className="text-slate-600 text-sm">
                Estimated time: {lesson.estimatedTime}
              </p>
            )}
          </div>

          {/* Progress Bar */}
          <div className="flex gap-1 items-center">
            {getProgressSegments().map((segment, index) => (
              <div
                key={index}
                className={`h-2 min-w-[6px] flex-1 rounded-full transition-all duration-300 ${
                  segment.status === 'completed' ? 'bg-blue-500' : 'bg-slate-200'
                }`}
                title={segment.type === 'video' ? `Video ${segment.videoIdx + 1}` : `Question ${(segment.questionIdx ?? 0) + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sign-in prompt - below sticky header */}
      {!isUserAuthenticated && (
        <div className="max-w-5xl mx-auto px-6 pt-4">
          <SignInPrompt />
        </div>
      )}

      {/* Content Area */}
      <div className={`max-w-5xl mx-auto px-6 space-y-12 ${isUserAuthenticated ? 'mt-8' : 'mt-4'}`}>
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

                  const userAnswer = getUserAnswer(videoIdx, questionIdx);

                  return (
                    <div
                      key={questionIdx}
                      className="bg-white rounded-lg shadow-md p-6"
                    >
                      <QuestionRenderer
                        question={question}
                        onSubmit={(answer, isCorrect) => handleAnswerSubmit(videoIdx, questionIdx, answer, isCorrect)}
                        disabled={false}
                        submittedAnswer={userAnswer?.answer}
                        isCorrect={userAnswer?.isCorrect}
                        isCompleted={!!userAnswer}
                      />

                      <ExplanationDisplay
                        explanation={question.explanation}
                        isCorrect={userAnswer?.isCorrect}
                        isCompleted={!!userAnswer}
                      />
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