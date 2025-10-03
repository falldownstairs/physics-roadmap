'use client';

import { useState, useEffect, useRef } from 'react';
import { Lesson, UserAnswer, ModuleProgress } from '../../lib/types';
import { fetchProgress, saveProgress } from '../../lib/progressApi';
import { useAuth } from '../../context/AuthContext';
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
  const [completedVideos, setCompletedVideos] = useState<number[]>([0]);
  const currentQuestionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated: isUserAuthenticated, loading: authLoading } = useAuth();
  const hasLoadedProgress = useRef(false);

  // Load progress only from API for authenticated users
  useEffect(() => {
    async function loadProgress() {
      // Wait for auth to load
      if (authLoading) return;
      
      setIsLoading(true);
      
      // Only try to load from API if authenticated
      if (isUserAuthenticated) {
        console.log('Loading progress for lesson:', lesson.id);
        const apiProgress = await fetchProgress(lesson.id);
        
        if (apiProgress) {
          console.log('Progress loaded:', apiProgress);
          setCurrentVideoIndex(apiProgress.videoIndex);
          setCurrentQuestionIndex(apiProgress.questionIndex);
          setUserAnswers(apiProgress.userAnswers);
          
          // Calculate which videos are completed based on progress
          const completed = new Set<number>([0]);
          
          for (let i = 0; i < apiProgress.videoIndex; i++) {
            completed.add(i);
          }
          
          const videosWithCompletedQuestions = apiProgress.userAnswers.map(a => a.videoIndex);
          videosWithCompletedQuestions.forEach(videoIdx => {
            const video = lesson.videos[videoIdx];
            if (video) {
              const answeredQuestionsCount = apiProgress.userAnswers.filter(a => a.videoIndex === videoIdx).length;
              if (answeredQuestionsCount === video.questions.length && videoIdx + 1 < lesson.videos.length) {
                completed.add(videoIdx + 1);
              }
            }
          });
          
          setCompletedVideos(Array.from(completed));
        } else {
          console.log('No existing progress found');
        }
      }
      
      hasLoadedProgress.current = true;
      setIsLoading(false);
    }
    
    loadProgress();
  }, [lesson.id, lesson.videos, isUserAuthenticated, authLoading]);

  // Save progress whenever key state changes
  useEffect(() => {
    // Don't save until we've loaded initial progress
    if (!hasLoadedProgress.current) {
      console.log('Skipping save - progress not loaded yet');
      return;
    }
    
    if (authLoading || !isUserAuthenticated) {
      console.log('Skipping save - not authenticated');
      return;
    }
    
    const progress: ModuleProgress = {
      videoIndex: currentVideoIndex,
      questionIndex: currentQuestionIndex,
      userAnswers
    };
    
    console.log('Attempting to save progress:', progress);
    
    saveProgress(lesson.id, progress)
      .then(() => {
        console.log('✅ Progress saved successfully');
      })
      .catch(err => {
        console.error('❌ Failed to save progress:', err);
      });
  }, [currentVideoIndex, currentQuestionIndex, userAnswers, lesson.id, isUserAuthenticated, authLoading]);

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
    
    const newUserAnswers = [...filteredAnswers, userAnswer];
    
    // Automatically advance to next question
    const currentVideo = lesson.videos[currentVideoIndex];
    
    // Check if this was the last question of the video
    const isLastQuestion = currentQuestionIndex === currentVideo.questions.length - 1;
    
    // Update all state together
    setUserAnswers(newUserAnswers);
    
    // If this was the last question and there are more videos, mark the next video as completed
    if (isLastQuestion && currentVideoIndex + 1 < lesson.videos.length) {
      setCompletedVideos(prev => [...prev, currentVideoIndex + 1]);
    }
    
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

  const isVideoCompleted = (videoIdx: number) => {
    return completedVideos.includes(videoIdx);
  };

  // Generate progress segments
  const getProgressSegments = () => {
    const segments: Array<{ type: 'video' | 'question'; status: 'completed' | 'current' | 'locked'; videoIdx: number; questionIdx?: number }> = [];
    
    lesson.videos.forEach((video, videoIdx) => {
      // Add video segment
      const videoStatus = 
        isVideoCompleted(videoIdx) ? 'completed' :
        videoIdx === currentVideoIndex ? 'current' : 'locked';
      segments.push({ type: 'video', status: videoStatus, videoIdx });
      
      // Add question segments
      video.questions.forEach((_, questionIdx) => {
        let questionStatus: 'completed' | 'current' | 'locked';
        
        if (isQuestionCompleted(videoIdx, questionIdx)) {
          questionStatus = 'completed';
        } else if (isCurrentQuestion(videoIdx, questionIdx)) {
          questionStatus = 'current';
        } else {
          questionStatus = 'locked';
        }
        
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
                  segment.status === 'completed'
                    ? 'bg-blue-500'
                    : segment.status === 'current'
                    ? 'bg-blue-300 animate-pulse'
                    : 'bg-slate-200'
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
