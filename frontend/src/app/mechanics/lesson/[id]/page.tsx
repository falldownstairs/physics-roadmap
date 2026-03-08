import { fetchLesson } from '@/lib/api';
import LearningModule from '@/components/learning/LearningModule';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const lesson = await fetchLesson(id, 'mechanics');
    return {
      title: `${lesson.title} - AP Physics C: Mechanics`,
      description: `Learn ${lesson.title} in AP Physics C Mechanics. ${lesson.videos?.length || 0} video lesson${(lesson.videos?.length || 0) !== 1 ? 's' : ''} with practice questions.`,
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
  const lesson = await fetchLesson(id, 'mechanics');

  return (
    <div className="min-h-screen bg-slate-50">
      <LearningModule lesson={lesson} />
    </div>
  );
}
