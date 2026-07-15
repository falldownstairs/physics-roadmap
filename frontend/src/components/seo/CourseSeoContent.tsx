import Link from 'next/link';

interface CourseNode {
  id: number;
  type: 'lesson' | 'topic' | 'root';
  title: string;
  description: string;
  videos: { number: string; title: string; videoId?: string }[];
  practiceProblems?: string;
}

interface CourseSeoContentProps {
  courseId: string;
  title: string;
  description: string;
  selfStudyAnswer: string;
  courseData: CourseNode[];
}

export default function CourseSeoContent({
  courseId,
  title,
  description,
  selfStudyAnswer,
  courseData,
}: CourseSeoContentProps) {
  const topics = courseData.filter((node) => node.type === 'topic');
  const lessons = courseData.filter((node) => node.type === 'lesson');
  const videoCount = courseData.reduce((total, node) => total + node.videos.length, 0);

  return (
    <section className="bg-slate-50 px-6 py-14 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              AP Physics C self-study roadmap
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
            <p className="mt-4 text-base leading-7 text-slate-700">{selfStudyAnswer}</p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">What is included</h2>
            <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Topics</dt>
                <dd className="mt-1 text-2xl font-bold text-blue-700">{topics.length}</dd>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Lessons</dt>
                <dd className="mt-1 text-2xl font-bold text-blue-700">{lessons.length}</dd>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Videos</dt>
                <dd className="mt-1 text-2xl font-bold text-blue-700">{videoCount}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Core topics</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {topics.map((topic) => (
                <article key={topic.id} className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>
                  {topic.practiceProblems && (
                    <p className="mt-3 text-xs font-medium text-blue-700">{topic.practiceProblems}</p>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Lesson index</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              These direct lesson links give students, search engines, and AI answer systems a clear path to the
              learning material behind the interactive roadmap.
            </p>
            <div className="mt-5 max-h-[520px] overflow-y-auto pr-2">
              <ol className="space-y-3">
                {lessons.map((lesson) => (
                  <li key={lesson.id} className="rounded-2xl border border-slate-200 p-4">
                    <Link
                      href={`/${courseId}/lesson/${lesson.id}`}
                      className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                    >
                      {lesson.title}
                    </Link>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{lesson.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
