import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchCourseProgress, fetchTotalProblems } from '../lib/progressApi';
import { ModuleProgress } from '../lib/types';
import { courseData as mechanicsCourseData, connections as mechanicsConnections } from '../lib/mechanicsContent';
import { courseData as emCourseData, connections as emConnections } from '../lib/emContent';

interface NodeData {
  id: number;
  type: 'lesson' | 'topic' | 'root';
  title: string;
  description: string;
  videos: { number: string; title: string }[];
  practiceProblems?: string;
  x: number;
  y: number;
}

interface Connection {
  from: number;
  to: number;
  offset: number;
}

// Map course names to their data
const courseDataMap: Record<string, { courseData: NodeData[], connections: Connection[] }> = {
  'mechanics': { courseData: mechanicsCourseData, connections: mechanicsConnections },
  'electricity-magnetism': { courseData: emCourseData, connections: emConnections }
};

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
  // Get course-specific data
  const { courseData, connections } = courseDataMap[courseName] || courseDataMap['mechanics'];
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
      } catch (err) {
        setError('Failed to load progress data');
      } finally {
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
        
        // Get ALL descendant lessons (not just direct children)
        const getDescendantLessons = (nodeId: number, visited = new Set<number>()): number[] => {
          // Prevent infinite loops in case of circular dependencies
          if (visited.has(nodeId)) return [];
          visited.add(nodeId);
          
          const children = tree.get(nodeId) || [];
          let lessonIds: number[] = [];
          
          children.forEach(childId => {
            const childNode = courseData.find(n => n.id === childId);
            if (!childNode) return;
            
            if (childNode.type === 'lesson') {
              lessonIds.push(childId);
              // IMPORTANT: Also check if this lesson has its own children
              const grandChildren = getDescendantLessons(childId, visited);
              lessonIds.push(...grandChildren);
            } else if (childNode.type === 'topic') {
              // Recursively get all lessons under this child topic
              lessonIds.push(...getDescendantLessons(childId, visited));
            }
          });
          
          return lessonIds;
        };
        
        const lessonIds = getDescendantLessons(node.id);
        // Remove duplicates
        const uniqueLessonIds = [...new Set(lessonIds)];
        const total = uniqueLessonIds.length;
        const completedCount = uniqueLessonIds.filter(id => lessons[id.toString()]).length;
        
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
  }, [progressData, totalProblems, courseData, connections]);

  return (
    <ProgressContext.Provider value={{ progressData, totalProblems, completionStatus, isLoading, error }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}