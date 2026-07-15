import Link from 'next/link';
import type { Lesson } from '@/lib/types';
import { cleanText, getLessonStats } from '@/lib/seo';

interface LessonSeoContentProps {
  lesson: Lesson;
  courseTitle: string;
  coursePath: string;
}

export default function LessonSeoContent({ lesson, courseTitle, coursePath }: LessonSeoContentProps) {
  const { videoCount, questionCount } = getLessonStats(lesson);
  const questions = lesson.videos.flatMap((video) => video.questions).slice(0, 6);

  return (
    <section className="border-b border-slate-200 bg-white px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-700">PhysicsRoadmap</Link>
          <span className="px-2">/</span>
          <Link href={coursePath} className="hover:text-blue-700">{courseTitle}</Link>
          <span className="px-2">/</span>
          <span>{lesson.title}</span>
        </nav>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Free AP Physics C lesson</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{lesson.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-700">
            This {courseTitle} lesson is designed for AP Physics C self-study. It includes {videoCount} video
            lesson{videoCount === 1 ? '' : 's'}, {questionCount} practice question{questionCount === 1 ? '' : 's'},
            and an estimated completion time of {lesson.estimatedTime}.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Video lessons</h2>
            <ol className="mt-5 space-y-3">
              {lesson.videos.map((video, index) => (
                <li key={`${video.videoId}-${index}`} className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">{video.videoTitle}</h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    className="mt-2 inline-block text-sm font-medium text-blue-700 underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Watch on YouTube
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Practice covered</h2>
            <ol className="mt-5 space-y-3">
              {questions.map((question, index) => (
                <li key={index} className="rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-700">
                  {cleanText(question.question)}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
