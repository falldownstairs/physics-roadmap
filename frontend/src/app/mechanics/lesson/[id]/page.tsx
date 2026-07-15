import { fetchLessonCached } from '@/lib/api';
import LearningModule from '@/components/learning/LearningModule';
import JsonLd from '@/components/seo/JsonLd';
import LessonSeoContent from '@/components/seo/LessonSeoContent';
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  estimatedTimeToIsoDuration,
  lessonDescription,
  publisherJsonLd,
} from '@/lib/seo';
import type { Metadata } from 'next';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const courseTitle = 'AP Physics C: Mechanics';
const coursePath = '/mechanics';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const lesson = await fetchLessonCached(id, 'mechanics');
    const description = lessonDescription(lesson, courseTitle);
    return {
      title: `${lesson.title} - AP Physics C: Mechanics`,
      description,
      alternates: {
        canonical: `${coursePath}/lesson/${id}`,
      },
      openGraph: {
        title: `${lesson.title} - ${courseTitle} | PhysicsRoadmap`,
        description,
        url: absoluteUrl(`${coursePath}/lesson/${id}`),
      },
    };
  } catch {
    return {
      title: 'Mechanics Lesson',
      description: 'AP Physics C Mechanics lesson with video lectures and practice questions.',
    };
  }
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lesson = await fetchLessonCached(id, 'mechanics');
  const lessonUrl = absoluteUrl(`${coursePath}/lesson/${id}`);
  const description = lessonDescription(lesson, courseTitle);
  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: 'PhysicsRoadmap', url: absoluteUrl('/') },
      { name: courseTitle, url: absoluteUrl(coursePath) },
      { name: lesson.title, url: lessonUrl },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      '@id': `${lessonUrl}#learning-resource`,
      name: lesson.title,
      description,
      url: lessonUrl,
      isAccessibleForFree: true,
      educationalLevel: 'Advanced high school',
      learningResourceType: 'Lesson',
      teaches: [lesson.title, ...lesson.videos.map((video) => video.videoTitle)],
      timeRequired: estimatedTimeToIsoDuration(lesson.estimatedTime),
      isPartOf: {
        '@type': 'LearningResource',
        name: courseTitle,
        url: absoluteUrl(coursePath),
      },
      publisher: publisherJsonLd,
      hasPart: lesson.videos.map((video) => ({
        '@type': 'CreativeWork',
        name: video.videoTitle,
        url: `https://www.youtube.com/watch?v=${video.videoId}`,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <JsonLd data={jsonLd} />
      <LessonSeoContent lesson={lesson} courseTitle={courseTitle} coursePath={coursePath} />
      <LearningModule lesson={lesson} />
    </div>
  );
}
