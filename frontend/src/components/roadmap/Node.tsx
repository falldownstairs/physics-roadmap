import Link from "next/link";
import { CheckCircle, Circle } from 'lucide-react';
import { useMemo } from 'react';

interface NodeProps{
  title: string;
  id: number;
  course: string;
  x: number;
  y: number;
  completed: boolean;
}

export default function Node({title,id,course,x,y,completed}:NodeProps){
  // ✅ PERFORMANCE FIX: Memoize color classes
  const nodeColorClass = useMemo(() => {
    if (completed) {
      return 'bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-400 hover:to-teal-600 shadow-lg shadow-teal-500/25'; 
    } else {
      return 'bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25';
    }
  }, [completed]);

  return(
    <Link
      href={`/ap-physics-1/lesson/${id}`}
      key={id}
      className={`absolute w-44 h-20 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer ${nodeColorClass} text-white backdrop-blur-sm border border-white/10`}
      style={{
        left: x,
        top: y,
        zIndex: 2
      }}
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
    </Link>
  )
}