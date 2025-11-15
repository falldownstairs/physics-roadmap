import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-200 relative">
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
      </div>
    </div>
  );
}
