import { useMemo } from 'react';
import { useProgress } from "../../contexts/ProgressContext";

interface NodeProps{
  title: string;
  id: number;
  course: string;
  type: 'lesson' | 'topic' | 'root';
  x: number;
  y: number;
  onClick: (id: number) => void;
}

export default function Node({title, id, type, x, y, onClick}: NodeProps){
  const { progressData, totalProblems, completionStatus, isLoading } = useProgress();
  
  // Calculate progress percentage for all node types
  const progressPercentage = useMemo(() => {
    if (isLoading) return 0;
    
    const idStr = id.toString();
    
    if (type === 'lesson') {
      const lessonProgress = progressData[idStr];
      const total = totalProblems[idStr] || 0;
      
      if (!lessonProgress || total === 0) return 0;
      
      return Math.min(100, (lessonProgress.userAnswers.length / total) * 100);
    } else if (type === 'topic') {
      const topicData = completionStatus.topics[idStr];
      if (!topicData || topicData.total === 0) return 0;
      
      return Math.min(100, (topicData.completedCount / topicData.total) * 100);
    } else {
      // root node
      const topicNodes = Object.values(completionStatus.topics);
      if (topicNodes.length === 0) return 0;
      
      const completedTopics = topicNodes.filter(t => t.completed).length;
      return Math.min(100, (completedTopics / topicNodes.length) * 100);
    }
  }, [id, type, progressData, totalProblems, completionStatus, isLoading]);

  // Determine if completed
  const isCompleted = progressPercentage === 100;
  
  // Determine color based on completion
  const nodeColorClass = useMemo(() => {
    return isCompleted
      ? 'bg-violet-700 hover:bg-violet-600 shadow-lg shadow-violet-700/25'
      : 'bg-[#3b5be7] hover:bg-[#5276ff] shadow-lg shadow-blue-600/25';
  }, [isCompleted]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(id);
  };

  return(
    <div
      key={id}
      className={`absolute w-44 h-20 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer ${nodeColorClass} text-white backdrop-blur-sm border border-white/10`}
      style={{
        left: x,
        top: y,
        zIndex: 2
      }}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between px-4 pt-2 pb-4.5 h-full">
        <div className="flex-1 min-w-0">
          <div className="font-bold text-base leading-tight truncate">
            {title}
          </div>
        </div>
      </div>
      
      {/* Progress bar for all node types */}
      <div className="absolute bottom-3 left-2 right-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-500 ease-out rounded-full"
          style={{ 
            width: `${progressPercentage}%`,
            opacity: isLoading ? 0.5 : 1
          }}
        />
      </div>
    </div>
  )
}