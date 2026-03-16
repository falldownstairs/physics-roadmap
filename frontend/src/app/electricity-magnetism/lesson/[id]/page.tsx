import { fetchLessonCached } from '@/lib/api';
import LearningModule from '@/components/learning/LearningModule';
import type { Metadata } from 'next';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const lesson = await fetchLessonCached(id, 'electricity-magnetism');
    return {
      title: `${lesson.title} - AP Physics C: E&M`,
      description: `Learn ${lesson.title} in AP Physics C Electricity & Magnetism. ${lesson.videos?.length || 0} video lesson${(lesson.videos?.length || 0) !== 1 ? 's' : ''} with practice questions.`,
    };
  } catch {
    return {
      title: 'Electricity & Magnetism Lesson',
      description: 'AP Physics C Electricity and Magnetism lesson with video lectures and practice questions.',
    };
  }
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lesson = await fetchLessonCached(id, 'electricity-magnetism');

  return (
    <div className="min-h-screen bg-slate-50">
      <LearningModule lesson={lesson} />
    </div>
  );
}
