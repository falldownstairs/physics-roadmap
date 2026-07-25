import CourseRoadmap from '@/components/roadmap/CourseRoadmap'
import { courseData, connections } from '@/lib/emContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AP Physics C: Electricity & Magnetism Roadmap',
  description: 'Free AP Physics C Electricity and Magnetism lessons covering electrostatics, Gauss\'s law, electric potential, capacitance, DC circuits, RC circuits, magnetic forces, electromagnetic induction, and inductance.',
};


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