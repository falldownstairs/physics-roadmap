import CourseRoadmap from '@/components/roadmap/CourseRoadmap'
import { courseData, connections } from '@/lib/emContent';

export default function ElectricityMagnetismPage() {
  return (
    <div className='w-full h-[calc(100vh-57px)] bg-black overflow-hidden'>
      <CourseRoadmap 
        courseData={courseData} 
        connections={connections} 
        courseName="electricity-magnetism" 
      />
    </div>
  );
}