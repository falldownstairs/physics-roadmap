"use client"
import React, { useState, useRef, useEffect, useCallback, startTransition, useMemo } from 'react';
import Node from "./Node";
import NodeSidebar from "./NodeSidebar";
import { ProgressProvider } from "../../contexts/ProgressContext";

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

interface CourseRoadmapProps {
  courseData: NodeData[];
  connections: Connection[];
  courseName: string;
}

export default function CourseRoadmap({ courseData, connections, courseName }: CourseRoadmapProps){
  // ✅ PERFORMANCE FIX: Memoize expensive calculations
  const contentBounds = useMemo(() => {
    const minX = Math.min(...courseData.map(node => node.x));
    const maxX = Math.max(...courseData.map(node => node.x)) + 176; // node width
    const minY = Math.min(...courseData.map(node => node.y));
    const maxY = Math.max(...courseData.map(node => node.y)) + 80; // node height
    return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
  }, [courseData]);

  const maxX = useMemo(() => contentBounds.maxX + 200, [contentBounds]);
  const maxY = useMemo(() => contentBounds.maxY + 200, [contentBounds]);

  // Calculate initial scale and position based on content size
  const getInitialView = useCallback((viewportWidth: number, viewportHeight: number) => {
    const padding = 100; // padding around content
    const contentWidth = contentBounds.width + padding * 2;
    const contentHeight = contentBounds.height + padding * 2;
    
    // Calculate scale to fit content in viewport
    const scaleX = viewportWidth / contentWidth;
    const scaleY = viewportHeight / contentHeight;
    const scale = Math.min(scaleX, scaleY, 0.5); // cap at 0.5 for readability
    
    // Center the content in the viewport
    const contentCenterX = contentBounds.minX + contentBounds.width / 2;
    const contentCenterY = contentBounds.minY + contentBounds.height / 2;
    
    const posX = (viewportWidth / 2) - (contentCenterX * scale);
    const posY = (viewportHeight / 2) - (contentCenterY * scale);
    
    return { scale, position: { x: posX, y: posY } };
  }, [contentBounds]);

  // Initial values for SSR (will be adjusted after hydration)
  const [position, setPosition] = useState({ x: 0, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.35);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [sidebarWidth, setSidebarWidth] = useState(20);
  const [sidebarHeight, setSidebarHeight] = useState(70);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isFadedIn, setIsFadedIn] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);

  // Adjust after hydration
  useEffect(() => {
    setIsHydrated(true);
    
    const checkMobile = window.innerWidth < 640;
    setIsMobile(checkMobile);
    
    const viewportWidth = checkMobile ? window.innerWidth : window.innerWidth * 0.8;
    const viewportHeight = checkMobile ? window.innerHeight * 0.4 : window.innerHeight;

    const initialView = getInitialView(viewportWidth, viewportHeight);
    setScale(initialView.scale);
    setPosition(initialView.position);

    // Fade in after a short delay
    setTimeout(() => {
      setIsFadedIn(true);
    }, 100);

    // Handle resize
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 640;
      setIsMobile(newIsMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isResizing) return;
    
    if (e.touches.length === 1) {
      // Single touch - start panning
      setTouchStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    } else if (e.touches.length === 2) {
      // Two touches - prepare for pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setLastTouchDistance(distance);
      setTouchStart(null); // Cancel panning
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isResizing) return;
    
    if (e.touches.length === 1 && touchStart) {
      // Single touch - pan
      e.preventDefault();
      requestAnimationFrame(() => {
        setPosition({
          x: e.touches[0].clientX - touchStart.x,
          y: e.touches[0].clientY - touchStart.y
        });
      });
    } else if (e.touches.length === 2 && lastTouchDistance) {
      // Two touches - pinch zoom
      e.preventDefault();
      
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Center point between two touches
      const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
      const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
      
      const delta = (distance - lastTouchDistance) * 0.005; // Reduced from 0.01 to 0.005
      const newScale = Math.min(Math.max(0.1, scale + delta), 2);
      
      const pointX = (cx - position.x) / scale;
      const pointY = (cy - position.y) / scale;
      
      setPosition({
        x: cx - pointX * newScale,
        y: cy - pointY * newScale
      });
      
      setScale(newScale);
      setLastTouchDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setLastTouchDistance(null);
  };

  // Resize handlers
  const handleResizeStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setIsDragging(false); // Ensure dragging is stopped
  }, []);

  useEffect(() => {
    if (!isResizing) return;

    const handleResizeMove = (e: MouseEvent | TouchEvent) => {
      if (!parentRef.current) return;
      
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      
      if (isMobile) {
        // Vertical resize for mobile
        const parentHeight = parentRef.current.offsetHeight;
        const mouseY = clientY - parentRef.current.getBoundingClientRect().top;
        const newSidebarHeight = ((parentHeight - mouseY) / parentHeight) * 100;
        
        // Constrain between 40% and 85%
        const constrainedHeight = Math.min(Math.max(newSidebarHeight, 40), 85);
        setSidebarHeight(constrainedHeight);
      } else {
        // Horizontal resize for desktop
        const parentWidth = parentRef.current.offsetWidth;
        const mouseX = clientX - parentRef.current.getBoundingClientRect().left;
        const newSidebarWidth = ((parentWidth - mouseX) / parentWidth) * 100;
        
        // Constrain between 15% and 50%
        const constrainedWidth = Math.min(Math.max(newSidebarWidth, 15), 50);
        setSidebarWidth(constrainedWidth);
      }
    };

    const handleResizeEnd = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
    document.addEventListener('touchmove', handleResizeMove);
    document.addEventListener('touchend', handleResizeEnd);
    document.body.style.cursor = isMobile ? 'row-resize' : 'col-resize';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.removeEventListener('touchmove', handleResizeMove);
      document.removeEventListener('touchend', handleResizeEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, isMobile]);

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
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProgressProvider courseName={courseName}>
      <div ref={parentRef} className={`w-full h-full bg-[#c7d8ea] relative ${isMobile ? 'flex-col' : 'flex'}`}>
        {/* Roadmap Container - dynamic width/height */}
        <div 
          className="relative z-0"
          style={isMobile ? { height: `${100 - sidebarHeight}%` } : { width: `${100 - sidebarWidth}%` }}
        >
          <div
            ref={containerRef}
            className={`w-full h-full ${isResizing ? 'pointer-events-none' : 'cursor-move'} touch-none`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
                  type={node.type}
                  x={node.x} 
                  y={node.y} 
                  course={courseName}
                  onClick={handleNodeClick}
                />
              )})}
            </div>
          </div>
        </div>

        {/* Resize Handle */}
        <div
          className={`${isMobile ? 'h-2 cursor-row-resize w-full' : 'w-2 cursor-col-resize h-full'} relative z-20 flex-shrink-0`}
          onMouseDown={handleResizeStart}
          onTouchStart={handleResizeStart}
          style={{ 
            touchAction: 'none',
            backgroundColor: 'transparent'
          }}
        >
          <div className={isMobile ? 'absolute inset-x-0 -top-2 -bottom-2' : 'absolute inset-y-0 -left-2 -right-2'} />
        </div>

        {/* Sidebar - dynamic width/height */}
        <div 
          className="relative z-10 flex-shrink-0"
          style={isMobile ? { height: `calc(${sidebarHeight}% - 8px)` } : { width: `calc(${sidebarWidth}% - 8px)` }}
        >
          <NodeSidebar selectedNode={selectedNode} courseName={courseName} isMobile={isMobile} />
        </div>
      </div>
    </ProgressProvider>
  );
};