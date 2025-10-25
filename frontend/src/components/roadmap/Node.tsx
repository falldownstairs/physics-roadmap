import { useMemo } from 'react';
import { useProgress } from "../../contexts/ProgressContext";

interface NodeProps{
  title: string;
  id: number;
  course: string;
  x: number;
  y: number;
  onClick: (id: number) => void;
}

export default function Node({title,id,x,y,onClick}:NodeProps){
  const { progressData, totalProblems, isLoading } = useProgress();
  
  // Calculate progress percentage
  const progressPercentage = useMemo(() => {
    if (isLoading) return 0;
    
    const lessonId = id.toString();
    const lessonProgress = progressData[lessonId];
    const total = totalProblems[lessonId] || 0;
    
    if (!lessonProgress || total === 0) return 0;
    
    return Math.min(100, (lessonProgress.userAnswers.length / total) * 100);
  }, [id, progressData, totalProblems, isLoading]);

  // Determine completion based on progress
  const completed = progressPercentage === 100;
  
  // ✅ PERFORMANCE FIX: Memoize color classes
  const nodeColorClass = useMemo(() => {
    if (completed) {
      return 'bg-violet-700 hover:bg-violet-600 shadow-lg shadow-violet-700/25'; 
    } else {
      return 'bg-[#3b5be7] hover:bg-[#5276ff] shadow-lg shadow-blue-600/25';
    }
  }, [completed]);
  

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent drag behavior
    onClick(id);
  };

  console.log(`Node ${id} progress:`, {
  lessonId: id.toString(),
  progress: progressData[id.toString()]?.userAnswers?.length || 0,
  total: totalProblems[id.toString()] || 0,
  percentage: progressPercentage
  });

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
      {/* Add progress bar at the bottom of the node */}
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