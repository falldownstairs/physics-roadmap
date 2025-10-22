import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCourseProgress, fetchTotalProblems } from '../lib/progressApi';
import { ModuleProgress } from '../lib/types';

interface ProgressContextType {
  progressData: Record<string, ModuleProgress>;
  totalProblems: Record<string, number>;
  isLoading: boolean;
  error: string | null;
}

const defaultContext: ProgressContextType = {
  progressData: {},
  totalProblems: {},
  isLoading: true,
  error: null
};

const ProgressContext = createContext<ProgressContextType>(defaultContext);

export function ProgressProvider({ children, courseName }: { children: React.ReactNode, courseName: string }) {
  const [progressData, setProgressData] = useState<Record<string, ModuleProgress>>({});
  const [totalProblems, setTotalProblems] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [progress, problems] = await Promise.all([
          fetchCourseProgress(courseName),
          fetchTotalProblems(courseName)
        ]);
        
        setProgressData(progress);
        setTotalProblems(problems);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching progress data:', err);
        setError('Failed to load progress data');
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, [courseName]);

  return (
    <ProgressContext.Provider value={{ progressData, totalProblems, isLoading, error }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}