import { CheckCircle, Circle } from 'lucide-react';
import { useMemo } from 'react';

interface NodeProps{
  title: string;
  id: number;
  course: string;
  x: number;
  y: number;
  completed: boolean;
  onClick: (id: number) => void;
}

export default function Node({title,id,course,x,y,completed,onClick}:NodeProps){
  // ✅ PERFORMANCE FIX: Memoize color classes
  const nodeColorClass = useMemo(() => {
    if (completed) {
      return 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/25'; 
    } else {
      return 'bg-[#404bd6] hover:bg-[#4061f8] shadow-lg shadow-blue-600/25';
    }
  }, [completed]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent drag behavior
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
      <div className="flex items-center justify-between p-4 h-full">
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm leading-tight truncate">
            {title}
          </div>
        </div>
        <div className="ml-3 flex-shrink-0">
          {completed
            ? <CheckCircle className="w-5 h-5 text-white" />
            : <Circle className="w-5 h-5 text-white" />
          }
        </div>
      </div>
    </div>
  )
}