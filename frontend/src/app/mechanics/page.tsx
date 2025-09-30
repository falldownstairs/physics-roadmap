import CourseRoadmap from '@/components/roadmap/CourseRoadmap'
import { courseData, connections } from '@/lib/mechanicsContent';
export default function RoadmapPage() {
  return (
    <div className='w-screen h-screen bg-black'>
      <CourseRoadmap 
        courseData={courseData} 
        connections={connections} 
        courseName="mechanics" 
      />
    </div>
  );
}