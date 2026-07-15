import CourseRoadmap from '@/components/roadmap/CourseRoadmap'
import CourseSeoContent from '@/components/seo/CourseSeoContent';
import JsonLd from '@/components/seo/JsonLd';
import { courseData, connections } from '@/lib/emContent';
import { absoluteUrl, buildBreadcrumbJsonLd, publisherJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

const title = 'AP Physics C: Electricity & Magnetism Roadmap';
const description = 'Free AP Physics C Electricity and Magnetism lessons covering electrostatics, Gauss\'s law, electric potential, capacitance, DC circuits, RC circuits, magnetic forces, electromagnetic induction, and inductance.';
const pageUrl = absoluteUrl('/electricity-magnetism');

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/electricity-magnetism',
  },
  openGraph: {
    title: `${title} | PhysicsRoadmap`,
    description,
    url: pageUrl,
  },
};


export default function ElectricityMagnetismPage() {
  const topics = courseData.filter((node) => node.type === 'topic');
  const lessons = courseData.filter((node) => node.type === 'lesson');
  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: 'PhysicsRoadmap', url: absoluteUrl('/') },
      { name: title, url: pageUrl },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      '@id': `${pageUrl}#learning-resource`,
      name: title,
      description,
      url: pageUrl,
      isAccessibleForFree: true,
      educationalLevel: 'Advanced high school',
      learningResourceType: 'Roadmap',
      teaches: topics.map((topic) => topic.title),
      publisher: publisherJsonLd,
      hasPart: lessons.map((lesson) => ({
        '@type': 'LearningResource',
        name: lesson.title,
        description: lesson.description,
        url: absoluteUrl(`/electricity-magnetism/lesson/${lesson.id}`),
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'AP Physics C Electricity and Magnetism lesson sequence',
      itemListElement: lessons.map((lesson, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(`/electricity-magnetism/lesson/${lesson.id}`),
        name: lesson.title,
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className='w-full h-[calc(100vh-57px)] bg-black overflow-hidden'>
        <CourseRoadmap
          courseData={courseData}
          connections={connections}
          courseName="electricity-magnetism"
        />
      </div>
      <CourseSeoContent
        courseId="electricity-magnetism"
        title={title}
        description={description}
        selfStudyAnswer="Use this roadmap after or alongside AP Physics C Mechanics. It organizes the E&M sequence from electric charge and fields through Gauss's law, electric potential, circuits, magnetism, induction, and inductance."
        courseData={courseData}
      />
    </>
  );
}
