"use client"
import React, { useState, useRef, useEffect, useCallback, startTransition, useMemo } from 'react';
import Node from "./Node";
import { courseData,connections } from '@/lib/apPhysics1Content';

export default function CourseRoadmap(){
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.35);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // ✅ PERFORMANCE FIX: Memoize expensive calculations
  const maxX = useMemo(() => Math.max(...courseData.map(node => node.x)) + 200, []);
  const maxY = useMemo(() => Math.max(...courseData.map(node => node.y)) + 200, []);

  const handleMouseDown = (e : React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e : React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
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
  }, []);

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
    <div className="w-full h-full bg-slate-300 relative">

      {/* Roadmap Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className={`relative`}
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
            <Node key={node.id} id={node.id} title = {node.title} x={node.x} y={node.y} completed={node.completed} course='ap-physics-1'/>
          )})}
        </div>
      </div>
    </div>
  );
};