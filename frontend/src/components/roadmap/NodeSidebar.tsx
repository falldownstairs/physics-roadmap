import Link from 'next/link';
import { useProgress } from '../../contexts/ProgressContext';
import { useMemo } from 'react';


interface Video {
  number: string;
  title: string;
  videoId?: string;  // Add videoId to interface
}

interface NodeData {
  id: number;
  type: 'lesson' | 'topic' | 'root';
  title: string;
  description: string;
  videos: Video[];
  practiceProblems?: string;
}

interface NodeSidebarProps {
  selectedNode: NodeData | null;
  courseName: string;
}

export default function NodeSidebar({ selectedNode, courseName }: NodeSidebarProps) {
  const { progressData, totalProblems, completionStatus, isLoading } = useProgress();
  
  // Calculate progress percentage for the selected node
  const progressPercentage = useMemo(() => {
    if (!selectedNode || isLoading) return 0;
    
    const idStr = selectedNode.id.toString();
    
    if (selectedNode.type === 'lesson') {
      const lessonProgress = progressData[idStr];
      const total = totalProblems[idStr] || 0;
      
      if (!lessonProgress || total === 0) return 0;
      
      return Math.min(100, Math.round((lessonProgress.userAnswers.length / total) * 100));
    } else if (selectedNode.type === 'topic') {
      const topicData = completionStatus.topics[idStr];
      if (!topicData || topicData.total === 0) return 0;
      
      return Math.min(100, Math.round((topicData.completedCount / topicData.total) * 100));
    } else {
      // root node
      const topicNodes = Object.values(completionStatus.topics);
      if (topicNodes.length === 0) return 0;
      
      const completedTopics = topicNodes.filter(t => t.completed).length;
      return Math.min(100, Math.round((completedTopics / topicNodes.length) * 100));
    }
  }, [selectedNode, progressData, totalProblems, completionStatus, isLoading]);

  if (!selectedNode) {
    return (
      <div className="w-full h-screen bg-white border-6 border-gray-200 shadow-lg p-6 flex items-center justify-center text-gray-500 box-border">
        Select a node
      </div>
    );
  }

  const isLesson = selectedNode.type === 'lesson';
  const isTopic = selectedNode.type === 'topic';
  const videoSectionTitle = isLesson ? 'Lesson Videos' : 'Review Videos';

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full h-screen bg-white border-6 border-blue-100 pr-2 pl-4 pt-5 pb-5  box-border">
      {/* Scrollable content area that includes everything */}
      <div className="h-full overflow-y-auto pr-4 pl-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {selectedNode.title}
        </h2>
        
        {/* Progress Percentage */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-gray-700 min-w-[45px]">
            {progressPercentage}%
          </span>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {selectedNode.description}
          </p>
        </div>

        {/* Video resources */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">{videoSectionTitle}</h3>
          {selectedNode.videos.length > 0 ? (
            <div className="space-y-1.5">
              {selectedNode.videos.map((video, index) => (
                <div 
                  key={index} 
                  onClick={() => video.videoId && handleVideoClick(video.videoId)}
                  className={`p-2.5 rounded-lg transition-all duration-200 ${
                    video.videoId 
                      ? 'bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 cursor-pointer hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`font-medium text-sm mb-1 flex items-center gap-2 ${
                    video.videoId ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {video.videoId && (
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    Video {video.number}
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm italic">No review videos</p>
          )}
        </div>

        {/* Practice Problems (only for topics) */}
        {isTopic && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Practice Problems</h3>
            {selectedNode.practiceProblems ? (
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedNode.practiceProblems}
                </p>
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">No practice problems available</p>
            )}
          </div>
        )}

        {/* Go to Lesson Button - only for lessons */}
        {isLesson && (
          <div className="mt-4 mb-8">
            <Link
              href={`/${courseName}/lesson/${selectedNode.id}`}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
            >
              Go to Lesson
            </Link>
          </div>
        )}
        <div className="mt-4 mb-12"/>
      </div>
    </div>
  );
}
