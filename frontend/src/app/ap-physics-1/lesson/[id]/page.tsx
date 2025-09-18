import LessonComponent from '@/components/lesson/Lesson';

interface LessonPageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;

  return (
    <div className="w-screen h-screen">
      <LessonComponent lessonId={id} />
    </div>
  );
}
