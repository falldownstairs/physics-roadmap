import { fetchLesson } from '@/lib/api';
import LearningModule from '@/components/learning/LearningModule';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function LessonPage({ params }: PageProps) {
  const lesson = await fetchLesson(params.id, 'mechanics');

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <LearningModule lesson={lesson} />
    </div>
  );
}
