import Link from 'next/link';

interface Video {
  number: string;
  title: string;
}

interface NodeData {
  id: number;
  title: string;
  description: string;
  videos: Video[];
  completed: boolean;
}

interface NodeSidebarProps {
  selectedNode: NodeData | null;
  courseName: string;
}

export default function NodeSidebar({ selectedNode, courseName }: NodeSidebarProps) {
  if (!selectedNode) {
    return (
      <div className="w-full h-screen bg-white border-6 border-gray-200 shadow-lg p-6 flex items-center justify-center text-gray-500 box-border">
        Select a node
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-white border-6 border-blue-100 p-6 box-border">
      {/* Scrollable content area that includes everything */}
      <div className="h-full overflow-y-auto pr-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {selectedNode.title}
        </h2>

        {/* Description */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {selectedNode.description}
          </p>
        </div>

        {/* Videos */}
        {selectedNode.videos.length > 0 && (
          <>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Videos</h3>
            <div className="space-y-1.5 mb-4">
              {selectedNode.videos.map((video, index) => (
                <div key={index} className="bg-gray-50 p-2.5 rounded-lg">
                  <div className="font-medium text-sm text-blue-600 mb-1">
                    Video {video.number}
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Go to Lesson Button - now inside scrollable area */}
        <div className="mt-4 mb-8">
          <Link
            href={`/${courseName}/lesson/${selectedNode.id}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
          >
            Go to Lesson
          </Link>
        </div>
      </div>
    </div>
  );
}

