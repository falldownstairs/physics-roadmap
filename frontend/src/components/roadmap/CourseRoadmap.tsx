"use client"
import React, { useState, useRef, useEffect, useCallback, startTransition, useMemo } from 'react';
import Node from "./Node";
import NodeSidebar from "./NodeSidebar";

interface NodeData {
  id: number;
  title: string;
  description: string;
  videos: { number: string; title: string }[];
  completed: boolean;
  x: number;
  y: number;
}

interface Connection {
  from: number;
  to: number;
  offset: number;
}

interface CourseRoadmapProps {
  courseData: NodeData[];
  connections: Connection[];
  courseName: string;
}

export default function CourseRoadmap({ courseData, connections, courseName }: CourseRoadmapProps){
  // Reference resolution (where current values are perfect)
  const REFERENCE_WIDTH = 1400;
  const REFERENCE_HEIGHT = 700;
  const REFERENCE_POSITION = { x: -75, y: 50 };
  const REFERENCE_SCALE = 0.42;

  // Always start with reference values for SSR
  const [position, setPosition] = useState(REFERENCE_POSITION);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(REFERENCE_SCALE);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [sidebarWidth, setSidebarWidth] = useState(20);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isFadedIn, setIsFadedIn] = useState(false);
  
  // ✅ PERFORMANCE FIX: Memoize expensive calculations
  const maxX = useMemo(() => Math.max(...courseData.map(node => node.x)) + 200, [courseData]);
  const maxY = useMemo(() => Math.max(...courseData.map(node => node.y)) + 200, [courseData]);

  // Adjust after hydration
  useEffect(() => {
    setIsHydrated(true);
    
    const viewportWidth = window.innerWidth * 0.8;
    const viewportHeight = window.innerHeight;

    const widthRatio = viewportWidth / REFERENCE_WIDTH;
    const heightRatio = viewportHeight / REFERENCE_HEIGHT;
    const scaleMultiplier = Math.min(widthRatio, heightRatio);

    // Only adjust if significantly different
    if (Math.abs(scaleMultiplier - 1) > 0.05) {
      setPosition({
        x: REFERENCE_POSITION.x * scaleMultiplier,
        y: REFERENCE_POSITION.y * scaleMultiplier
      });
      setScale(REFERENCE_SCALE * scaleMultiplier);
    }

    // Fade in after a short delay
    setTimeout(() => {
      setIsFadedIn(true);
    }, 100);
  }, []);

  const handleNodeClick = useCallback((nodeId: number) => {
    const node = courseData.find(n => n.id === nodeId);
    if (node) {
      setSelectedNode(node);
    }
  }, [courseData]);

  const handleMouseDown = (e : React.MouseEvent<HTMLDivElement>) => {
    if (isResizing) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e : React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || isResizing) return;
    
    requestAnimationFrame(() => {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Resize handlers
  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setIsDragging(false); // Ensure dragging is stopped
  }, []);

  useEffect(() => {
    if (!isResizing) return;

    const handleResizeMove = (e: MouseEvent) => {
      if (!parentRef.current) return;
      
      const parentWidth = parentRef.current.offsetWidth;
      const mouseX = e.clientX - parentRef.current.getBoundingClientRect().left;
      const newSidebarWidth = ((parentWidth - mouseX) / parentWidth) * 100;
      
      // Constrain between 15% and 50%
      const constrainedWidth = Math.min(Math.max(newSidebarWidth, 15), 50);
      setSidebarWidth(constrainedWidth);
    };

    const handleResizeEnd = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing]);

  // ✅ PERFORMANCE FIX: Memoize path creation function
  const createCurvedPath = useCallback((from: number, to: number, offset: number) => {
    const fromNode = courseData.find(node => node.id === from);
    const toNode = courseData.find(node => node.id === to);
    if (!fromNode || !toNode) return '';

    const x1 = fromNode.x + 88; // center of node (176/2)
    const y1 = fromNode.y;
    const x2 = toNode.x + 88 + offset;
    const y2 = toNode.y + 95; // height of node

    const midY = (y1 + y2) / 2;
    const controlY1 = y1 + (midY - y1) * 0.7;
    const controlY2 = y2 - (y2 - midY) * 0.7;

    return `M ${x1} ${y1} C ${x1} ${controlY1} ${x2} ${controlY2} ${x2} ${y2}`;
  }, [courseData]);

  const handleWheelDirect = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    

    const delta = e.deltaY * -0.0015;
    const newScale = Math.min(Math.max(0.1, scale + delta), 2);
    
    // Calculate the point in the content space that the cursor is over
    const pointX = (cx - position.x) / scale;
    const pointY = (cy - position.y) / scale;
    
    // Calculate new position to keep the same point under the cursor
    startTransition(()=>{
      setPosition({
        x: cx - pointX * newScale,
        y: cy - pointY * newScale
      });
      
      setScale(newScale);
    });
  }, [scale, position]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheelDirect, { passive: false });
      
      return () => {
        container.removeEventListener('wheel', handleWheelDirect);
      };
    }
  }, [handleWheelDirect]); // ✅ Only recreates when handler changes

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div ref={parentRef} className="w-full h-full bg-[#c7d8ea] relative flex">
      {/* Roadmap Container - dynamic width */}
      <div 
        className="h-full relative z-0"
        style={{ width: `${100 - sidebarWidth}%` }}
      >
        <div
          ref={containerRef}
          className={`w-full h-full ${isResizing ? 'pointer-events-none' : 'cursor-move'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className={`relative transition-opacity duration-700 ${
              isFadedIn ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: '0 0',
              width: `${maxX}px`,
              height: `${maxY}px`,
              willChange: 'transform'
            }}
          >
            {/* Connection Arrows */}
            <svg 
              className="absolute inset-0 pointer-events-none" 
              style={{ 
                zIndex: 1,
                width: `${maxX}px`,
                height: `${maxY}px`
              }}
              viewBox={`0 0 ${maxX} ${maxY}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
              <marker
                id="arrowhead"
                markerWidth="12"
                markerHeight="12"
                refX="0"
                refY="2"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <polygon
                  points="0 0, 3 2, 0 4"
                  fill="white"
                />
              </marker>
              </defs>
              
              {connections.map((connection, index) => {
                const pathData = createCurvedPath(connection.from, connection.to, connection.offset);
                return pathData ? (
                  <path
                    key={index}
                    d={pathData}
                    stroke="white"
                    strokeWidth="5"
                    fill="none"
                    opacity={1}
                    markerEnd="url(#arrowhead)"
                    className="drop-shadow-sm"
                  />
                ) : null;
              })}
            </svg>
            {/* Course Nodes */}
            {courseData.map((node) => {
              return (
              <Node 
                key={node.id} 
                id={node.id} 
                title={node.title} 
                x={node.x} 
                y={node.y} 
                completed={node.completed} 
                course={courseName}
                onClick={handleNodeClick}
              />
            )})}
          </div>
        </div>
      </div>

      {/* Invisible Resize Handle */}
      <div
        className="w-2 cursor-col-resize relative z-20 flex-shrink-0"
        onMouseDown={handleResizeStart}
        style={{ 
          touchAction: 'none',
          backgroundColor: 'transparent'
        }}
      >
        <div className="absolute inset-y-0 -left-2 -right-2" />
      </div>

      {/* Sidebar - dynamic width */}
      <div 
        className="relative z-10 flex-shrink-0"
        style={{ width: `calc(${sidebarWidth}% - 8px)` }}
      >
        <NodeSidebar selectedNode={selectedNode} courseName={courseName} />
      </div>
    </div>
  );
};