import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchCourseProgress, fetchTotalProblems } from '../lib/progressApi';
import { ModuleProgress } from '../lib/types';
import { courseData, connections } from '../lib/mechanicsContent';

interface CompletionStatus {
  lessons: Record<string, boolean>;
  topics: Record<string, { completed: boolean; total: number; completedCount: number }>;
  root: boolean;
}

interface ProgressContextType {
  progressData: Record<string, ModuleProgress>;
  totalProblems: Record<string, number>;
  completionStatus: CompletionStatus;
  isLoading: boolean;
  error: string | null;
}

const defaultContext: ProgressContextType = {
  progressData: {},
  totalProblems: {},
  completionStatus: { lessons: {}, topics: {}, root: false },
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

  // Calculate completion status
  const completionStatus = useMemo<CompletionStatus>(() => {
    // Calculate lesson completions
    const lessons: Record<string, boolean> = {};
    courseData.forEach(node => {
      if (node.type === 'lesson') {
        const lessonId = node.id.toString();
        const progress = progressData[lessonId];
        const total = totalProblems[lessonId] || 0;
        const answered = progress?.userAnswers?.length || 0;
        
        // Debug logging
        if (answered > 0 || total > 0) {
          console.log(`Lesson ${lessonId} (${node.title}):`, {
            answered,
            total,
            completed: answered >= total && total > 0
          });
        }
        
        lessons[lessonId] = answered >= total && total > 0;
      }
    });

    // Build dependency tree
    const tree = new Map<number, number[]>();
    connections.forEach(conn => {
      if (!tree.has(conn.to)) tree.set(conn.to, []);
      const children = tree.get(conn.to)!;
      children.push(conn.from);
    });

    // Calculate topic completions
    const topics: Record<string, { completed: boolean; total: number; completedCount: number }> = {};
    courseData.forEach(node => {
      if (node.type === 'topic') {
        const topicId = node.id.toString();
        const childIds = tree.get(node.id) || [];
        
        // Get all descendant lessons
        const getDescendantLessons = (nodeId: number): number[] => {
          const children = tree.get(nodeId) || [];
          let lessonIds: number[] = [];
          
          children.forEach(childId => {
            const childNode = courseData.find(n => n.id === childId);
            if (childNode?.type === 'lesson') {
              lessonIds.push(childId);
            } else if (childNode?.type === 'topic') {
              lessonIds.push(...getDescendantLessons(childId));
            }
          });
          
          return lessonIds;
        };
        
        const lessonIds = getDescendantLessons(node.id);
        const total = lessonIds.length;
        const completedCount = lessonIds.filter(id => lessons[id.toString()]).length;
        
        topics[topicId] = {
          completed: completedCount === total && total > 0,
          total,
          completedCount
        };
      }
    });

    // Calculate root completion
    const rootTopics = courseData.filter(n => n.type === 'topic');
    const completedTopics = rootTopics.filter(t => topics[t.id.toString()]?.completed).length;
    const root = completedTopics === rootTopics.length && rootTopics.length > 0;

    return { lessons, topics, root };
  }, [progressData, totalProblems]);

  return (
    <ProgressContext.Provider value={{ progressData, totalProblems, completionStatus, isLoading, error }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}