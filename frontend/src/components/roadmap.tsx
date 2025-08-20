"use client"
import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const CourseRoadmap = () => {
  const l1 = 50;
  const l2 = 350;
  const l3 = 650;
  const l4 = 950;
  const l5 = 1250;

  const [position, setPosition] = useState({ x: -775, y: -400 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.45);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const courseData = [
    // root
    { id: 0, title: "Physics I", x: 1350, y: l1, completed: false },
  
    // topics
    { id: 1, title: "Kinematics", x: 300, y: l2, completed: false },
    { id: 2, title: "Dynamics", x: 600, y: l2, completed: false },
    { id: 3, title: "Work, Energy, Power", x: 900, y: l2, completed: false },
    { id: 4, title: "Momentum", x: 1200, y: l2, completed: false },
    { id: 5, title: "Torque & Rotation", x: 1500, y: l2, completed: false },
    { id: 6, title: "Rot. Energy & Momentum", x: 1800, y: l2, completed: false },
    { id: 7, title: "Oscillations & Simple Harmonic Motion", x: 2100, y: l2, completed: false },
    { id: 8, title: "Fluids", x: 2400, y: l2, completed: false },
  
    // subtopics - Unit 1: Kinematics
    { id: 101, title: "Scalars & Vectors in 1D", x: 50, y: l4, completed: false },
    { id: 102, title: "Displacement, Velocity, and Acceleration", x: 0, y: l5, completed: false },
    { id: 103, title: "Scalars & Vectors in 2D", x: 100, y: l3, completed: false },
    { id: 104, title: "Reference Frames & Relative Motion", x:375, y: l3, completed: false },
    { id: 105, title: "Motion Graphs", x: 250, y: l4, completed: false },
  
    // subtopics - Unit 2: Dynamics
    { id: 201, title: "Systems and Center of Mass", x: 650, y: l3, completed: false },
    { id: 202, title: "Free-Body Diagrams", x: 700, y: l4, completed: false },
    { id: 203, title: "Newton’s 1st Law", x: 300, y: l5, completed: false },
    { id: 204, title: "Newton’s 2nd Law", x: 500, y: l5, completed: false },
    { id: 205, title: "Newton’s 3rd Law", x: 700, y: l5, completed: false },
    { id: 206, title: "Gravitational Force", x: 450, y: l4, completed: false },
    { id: 207, title: "Friction Force", x: 900, y: l5, completed: false },
  
    // subtopics - Unit 3: Work, Energy, Power
    { id: 301, title: "Kinetic Energy", x: 1150, y: l4, completed: false },
    { id: 302, title: "Work", x: 850, y: l3, completed: false },
    { id: 303, title: "Potential Energy", x: 1100, y: l5, completed: false },
    { id: 304, title: "Conservation of Energy", x: 1025, y: l3, completed: false },
    { id: 305, title: "Power", x: 925, y: l4, completed: false },
  
    // subtopics - Unit 4: Momentum
    { id: 401, title: "Linear Momentum", x: 1300, y: l5, completed: false },
    { id: 402, title: "Impulse", x: 1210, y: l3, completed: false },
    { id: 403, title: "Conservation of Momentum", x: 1400, y: l4, completed: false },
  
    // subtopics - Unit 5: Torque & Rotation
    { id: 501, title: "Rotational Kinematics", x: 1800, y: l4, completed: false },
    { id: 502, title: "Linear and Rotational Motion", x: 1700, y: l3, completed: false },
    { id: 503, title: "Torque", x: 1550, y: l5, completed: false },
    { id: 504, title: "Rotational Inertia", x: 1750, y: l5, completed: false },
    { id: 505, title: "Rotational Equilibrium", x: 1425, y: l3, completed: false },
    { id: 506, title: "Newton’s 2nd Law (Rotational Form)", x: 1600, y: l4, completed: false },
  
    // subtopics - Unit 6: Rot. Energy & Momentum
    { id: 601, title: "Rotational Kinetic Energy", x: 1950, y: l5, completed: false },
    { id: 602, title: "Torque and Work", x: 2025, y: l4, completed: false },
    { id: 603, title: "Angular Momentum/ Impulse", x: 2225, y: l4, completed: false },
    { id: 604, title: "Conservation of Angular Momentum", x: 1950, y: l3, completed: false },
  
    // subtopics - Unit 7: Oscillations/ Simple Harmoinc Motion
    { id: 701, title: "SMH Basics", x: 2250, y: l5, completed: false },
    { id: 702, title: "Frequency & Period", x: 2450, y: l4, completed: false },
    { id: 703, title: "SHM Graphs", x: 2150, y: l3, completed: false },
    { id: 704, title: "SHM Energy", x: 2350, y: l3, completed: false },
  
    // subtopics - Unit 8: Fluids
    { id: 801, title: "Density", x: 2750, y: l5, completed: false },
    { id: 802, title: "Pressure", x: 2650, y: l4, completed: false },
    { id: 803, title: "Fluids & Forces", x: 2550, y: l5, completed: false },
    { id: 804, title: "Fluids & Conservation", x: 2600, y: l3, completed: false },
  ];
  
  const connections = [
    // topics → root
    { from: 1, to: 0, offset: -50},
    { from: 2, to: 0, offset: -35},
    { from: 3, to: 0, offset: -20},
    { from: 4, to: 0, offset: -5},
    { from: 5, to: 0, offset: 10},
    { from: 6, to: 0, offset: 25},
    { from: 7, to: 0, offset: 40},
    { from: 8, to: 0, offset: 55},
  
    // subtopics → topics
    { from: 101, to: 103, offset: 0},
    { from: 102, to: 101, offset: 0},
    { from: 103, to: 1, offset: -15},
    { from: 104, to: 1, offset: 15},
    { from: 105, to: 1, offset: 0},
  
    { from: 201, to: 2, offset: 0},
    { from: 202, to: 201, offset: 0},
    { from: 203, to: 202, offset: -30},
    { from: 204, to: 202, offset: -15},
    { from: 205, to: 202, offset: 0},
    { from: 206, to: 2, offset: -15},
    { from: 207, to: 202, offset: 15},
  
    { from: 301, to: 304, offset: 15},
    { from: 302, to: 3, offset: -15},
    { from: 303, to: 304, offset: 0},
    { from: 304, to: 3, offset: 0},
    { from: 305, to: 302, offset: 0},
  
    { from: 401, to: 403, offset: 0},
    { from: 402, to: 4, offset: 25},
    { from: 403, to: 4, offset: 40},
  
    { from: 501, to: 502, offset: 0},
    { from: 502, to: 5, offset: 15},
    { from: 503, to: 505, offset: 20},
    { from: 504, to: 506, offset: 0},
    { from: 505, to: 5, offset: -15},
    { from: 506, to: 5, offset: 0},
  
    { from: 601, to: 602, offset: 0},
    { from: 602, to: 6, offset: 0},
    { from: 603, to: 604, offset: 20},
    { from: 604, to: 6, offset: 15},
  
    { from: 701, to: 702, offset: 0},
    { from: 702, to: 703, offset: 0},
    { from: 703, to: 7, offset: 0},
    { from: 704, to: 7, offset: 15},
  
    { from: 801, to: 804, offset: 45},
    { from: 802, to: 804, offset: 0},
    { from: 803, to: 802, offset: 0},
    { from: 804, to: 8, offset: 0},
  ];
  
    
  const maxX = Math.max(...courseData.map(node => node.x)) + 200;
  const maxY = Math.max(...courseData.map(node => node.y)) + 200;

  const handleMouseDown = (e : React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e : React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.25, scale + delta), 2);
    setScale(newScale);
  };

  useEffect((): (() => void) | void => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
      return (): void => container.removeEventListener('wheel', handleWheel);
    }
  }, [scale]);

  const getStatusIcon = (completed: boolean) => {
    return completed 
      ? <CheckCircle className="w-5 h-5 text-white" />
      : <Circle className="w-5 h-5 text-white" />;
  };

  const getNodeColor = (completed: boolean) => {
    return completed 
      ? 'bg-green-500 hover:bg-green-600' 
      : 'bg-blue-400 hover:bg-blue-500';
  };

  const createCurvedPath = (from: number, to: number, offset: number) => {
    const fromNode = courseData.find(node => node.id === from);
    const toNode = courseData.find(node => node.id === to);
    if (!fromNode || !toNode) return '';

    const x1 = fromNode.x + 75; // center of node
    const y1 = fromNode.y;
    const x2 = toNode.x + 75 + offset;
    const y2 = toNode.y + 95;

    // Create curved path
    const midY = (y1 + y2) / 2;
    const controlY1 = y1 + (midY - y1) * 0.7;
    const controlY2 = y2 - (y2 - midY) * 0.7;

    return `M ${x1} ${y1} C ${x1} ${controlY1} ${x2} ${controlY2} ${x2} ${y2}`;
  };

  const resetView = () => {
    setPosition({ x: -775, y: -400 });
    setScale(0.45);
  };

  return (
    <div className="w-screen h-screen bg-slate-200 overflow-hidden relative">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <button
          onClick={resetView}
          className="px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-sm font-medium"
        >
          Reset View
        </button>
        <div className="px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200 text-xs text-gray-600">
          Zoom: {Math.round(scale * 100)}%
        </div>
      </div>

      {/* Roadmap Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative transition-transform duration-75"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            width: `${maxX}px`,
            height: `${maxY}px`
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
              markerWidth="10"
              markerHeight="10"
              refX="0"
              refY="2.5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon
                points="0 0, 4 2.5, 0 5"
                fill="white"
              />
            </marker>
            </defs>
            
            {connections.map((connection, index) => {
              const pathData = createCurvedPath(connection.from, connection.to, connection.offset);

              if (!pathData) return null;
              
              return (
                <path
                  key={index}
                  d={pathData}
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  opacity={1}
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
          </svg>

          {/* Course Nodes */}
          {courseData.map((node) => (
            <div
              key={node.id}
              className={`absolute w-40 h-20 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer ${getNodeColor(node.completed)} text-white`}
              style={{
                left: node.x,
                top: node.y,
                zIndex: 2
              }}
              onClick={() => {
                alert(`Opening: ${node.title}`);
              }}
            >
              <div className="flex items-center justify-between p-3 h-full">
                <div className="flex-1">
                  <div className="font-semibold text-sm">
                    {node.title}
                  </div>
                </div>
                <div className="ml-2 flex-shrink-0">
                  {getStatusIcon(node.completed)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRoadmap;

