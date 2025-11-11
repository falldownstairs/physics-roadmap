import CourseRoadmap from '@/components/roadmap/CourseRoadmap'
import { courseData, connections } from '@/lib/mechanicsContent';
export default function RoadmapPage() {
  return (
    <div className='w-full h-[calc(100vh-57px)] bg-black overflow-hidden'>
      <CourseRoadmap 
        courseData={courseData} 
        connections={connections} 
        courseName="mechanics" 
      />
    </div>
  );
}