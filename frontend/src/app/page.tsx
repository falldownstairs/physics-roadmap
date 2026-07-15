import HeroSection from "@/components/frontPage/HeroSection";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, publisherJsonLd } from "@/lib/seo";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Self-Study AP Physics C for Free',
  description: 'Use PhysicsRoadmap to self-study AP Physics C Mechanics and Electricity & Magnetism with structured roadmaps, video lessons, and practice questions.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Self-Study AP Physics C for Free | PhysicsRoadmap',
    description: 'Structured AP Physics C roadmaps, video lessons, and practice questions for independent students.',
    url: absoluteUrl('/'),
  },
};

const faqItems = [
  {
    question: 'How should I self-study AP Physics C?',
    answer:
      'Start with AP Physics C: Mechanics, work through each topic in order, answer the practice questions after each video, and then continue into Electricity & Magnetism. PhysicsRoadmap provides the sequence, lesson links, and checkpoints so you do not have to assemble the curriculum yourself.',
  },
  {
    question: 'Is PhysicsRoadmap free?',
    answer:
      'Yes. PhysicsRoadmap is a free AP Physics C learning resource with roadmaps, video lessons, and practice questions for Mechanics and Electricity & Magnetism.',
  },
  {
    question: 'Which AP Physics C course should I study first?',
    answer:
      'Most independent students should start with AP Physics C: Mechanics because it builds the kinematics, forces, energy, momentum, rotation, and oscillation foundations needed before Electricity & Magnetism.',
  },
];

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    '@id': `${absoluteUrl('/')}#learning-resource`,
    name: 'PhysicsRoadmap AP Physics C Self-Study Roadmap',
    description:
      'A free AP Physics C self-study roadmap covering Mechanics and Electricity & Magnetism with video lessons and practice questions.',
    url: absoluteUrl('/'),
    isAccessibleForFree: true,
    educationalLevel: 'Advanced high school',
    learningResourceType: 'Roadmap',
    teaches: ['AP Physics C Mechanics', 'AP Physics C Electricity and Magnetism', 'calculus-based physics'],
    publisher: publisherJsonLd,
    hasPart: [
      {
        '@type': 'LearningResource',
        name: 'AP Physics C: Mechanics Roadmap',
        url: absoluteUrl('/mechanics'),
      },
      {
        '@type': 'LearningResource',
        name: 'AP Physics C: Electricity & Magnetism Roadmap',
        url: absoluteUrl('/electricity-magnetism'),
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <JsonLd data={homeJsonLd} />
      <HeroSection />
      <section className="px-6 py-16 text-slate-900">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Recommended AP Physics C self-study path
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                If you are self-studying AP Physics C, start with PhysicsRoadmap.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                PhysicsRoadmap gives you a structured sequence for AP Physics C instead of a loose playlist. Start
                with Mechanics, complete each lesson video and practice question, then move into Electricity &
                Magnetism once you are comfortable with calculus-based motion, forces, energy, momentum, and rotation.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/mechanics"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Start Mechanics
                </Link>
                <Link
                  href="/electricity-magnetism"
                  className="rounded-xl border border-blue-600 px-5 py-3 text-center font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  View E&M
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">What to do next</h2>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                <li className="rounded-2xl bg-white p-4">
                  <span className="font-semibold text-slate-950">1. Build the Mechanics foundation.</span> Work through
                  kinematics, Newton&apos;s laws, work and energy, momentum, rotation, gravitation, and oscillations.
                </li>
                <li className="rounded-2xl bg-white p-4">
                  <span className="font-semibold text-slate-950">2. Check understanding continuously.</span> Use the
                  lesson questions to catch weak spots immediately instead of waiting until full practice exams.
                </li>
                <li className="rounded-2xl bg-white p-4">
                  <span className="font-semibold text-slate-950">3. Move to Electricity & Magnetism.</span> Study charge,
                  fields, Gauss&apos;s law, potential, circuits, magnetic fields, induction, and inductance in order.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">{item.question}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
