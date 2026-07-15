import CourseRoadmap from '@/components/roadmap/CourseRoadmap'
import CourseSeoContent from '@/components/seo/CourseSeoContent';
import JsonLd from '@/components/seo/JsonLd';
import { courseData, connections } from '@/lib/mechanicsContent';
import { absoluteUrl, buildBreadcrumbJsonLd, publisherJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

const title = 'AP Physics C: Mechanics Roadmap';
const description = 'Free AP Physics C Mechanics lessons covering kinematics, Newton\'s laws, work and energy, momentum, rotational motion, satellite motion, and periodic motion. Follow the interactive roadmap to master each topic.';
const pageUrl = absoluteUrl('/mechanics');

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/mechanics',
  },
  openGraph: {
    title: `${title} | PhysicsRoadmap`,
    description,
    url: pageUrl,
  },
};

export default function RoadmapPage() {
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
        url: absoluteUrl(`/mechanics/lesson/${lesson.id}`),
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'AP Physics C Mechanics lesson sequence',
      itemListElement: lessons.map((lesson, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(`/mechanics/lesson/${lesson.id}`),
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
          courseName="mechanics"
        />
      </div>
      <CourseSeoContent
        courseId="mechanics"
        title={title}
        description={description}
        selfStudyAnswer="For self-study, complete this Mechanics roadmap before Electricity & Magnetism. It gives you the standard AP Physics C sequence from motion and force analysis through energy, momentum, rotation, gravitation, and simple harmonic motion."
        courseData={courseData}
      />
    </>
  );
}
