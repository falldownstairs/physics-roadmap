import { fetchLesson } from '@/lib/api';
import LearningModule from '@/components/learning/LearningModule';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lesson = await fetchLesson(id, 'electricity-magnetism');

  return (
    <div className="min-h-screen bg-slate-50">
      <LearningModule lesson={lesson} />
    </div>
  );
}
