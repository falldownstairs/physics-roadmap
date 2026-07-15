import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, publisherJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About PhysicsRoadmap",
  description:
    "Learn how to use PhysicsRoadmap, a free AP Physics C self-study roadmap with lessons, practice questions, credits, and contact information.",
  alternates: {
    canonical: "/about",
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About PhysicsRoadmap',
  description:
    'Usage guidance, credits, support information, and contact details for the free AP Physics C self-study platform PhysicsRoadmap.',
  url: absoluteUrl('/about'),
  publisher: publisherJsonLd,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-200 relative">
      <JsonLd data={aboutJsonLd} />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            About PhysicsRoadmap
          </h1>
        </section>

        <section className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-lg p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Video Credits</h2>
            <p className="text-slate-700">
              All lesson videos are created by <span className="font-medium text-blue-700">LasseViren1</span>.
            </p>
            <p className="text-slate-700">
              Explore more of his work on his{' '}
              <Link
                href="https://sites.google.com/view/ap-physics-lectures-virens-vid/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium underline"
              >
                website
              </Link>{' '}
              and his{' '}
              <Link
                href="https://www.youtube.com/user/lasseviren1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium underline"
              >
                YouTube channel
              </Link>.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-md p-6 space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">How to Use This Resource</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Work through each roadmap topic in order. Pause the videos, take notes, and reflect on the concepts.
              The accompanying questions are meant to reinforce comprehension and highlight areas that need review,
              they are not full exam simulations.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-md p-6 space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">Extended Practice</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Practice the concepts you learn from the videos with the{' '}
              <Link
                href="https://www.gonzmosis.com/uploads/7/4/8/4/7484591/ap_physics_c_revision_guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium underline"
              >
                MIT Practice Mechanics Workbook
              </Link>{' '}
              and track your readiness using the{' '}
              <Link
                href="https://apcentral.collegeboard.org/courses/ap-physics-c-mechanics/exam/past-exam-questions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium underline"
              >
                Past FRQs 
              </Link>.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">☕</span>
            <h3 className="text-xl font-semibold text-slate-900">Support This Project</h3>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Donations are highly appreciated but not necessary at all! This resource will always remain free. 
            If you&apos;ve found it helpful and want to support its continued development, consider buying me a coffee.
          </p>
          <Link
            href="https://buymeacoffee.com/physicsroadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <span>☕</span>
            Buy Me a Coffee
          </Link>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✉️</span>
            <h3 className="text-xl font-semibold text-slate-900">Contact & Feedback</h3>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Have suggestions or found an issue? Feel free to reach out at{' '}
            <span className="font-medium text-blue-700">physicsroadmap1@gmail.com</span>
          </p>
          <a
            href="mailto:physicsroadmap1@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <span>📧</span>
            Send an Email
          </a>
        </section>
      </div>
    </div>
  );
}
