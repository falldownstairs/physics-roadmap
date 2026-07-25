import CourseRoadmap from '@/components/roadmap/CourseRoadmap'
import { courseData, connections } from '@/lib/mechanicsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AP Physics C: Mechanics Roadmap',
  description: 'Free AP Physics C Mechanics lessons covering kinematics, Newton\'s laws, work and energy, momentum, rotational motion, satellite motion, and periodic motion. Follow the interactive roadmap to master each topic.',
};

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