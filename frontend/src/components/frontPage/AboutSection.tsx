import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="w-full px-4 py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Why Choose PhysicsRoadmap?
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
          Our platform is designed by physics educators and students who understand the challenges 
          of mastering AP Physics C. We provide clear explanations, step-by-step solutions, and 
          practice problems that mirror the actual AP exam format.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Step-by-Step Solutions</h3>
                <p className="text-slate-600">Detailed explanations for every problem, showing you exactly how to approach each concept.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Exam-Focused Content</h3>
                <p className="text-slate-600">All materials are aligned with the latest AP Physics C curriculum and exam format.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Progress Tracking</h3>
                <p className="text-slate-600">Monitor your learning journey with built-in progress indicators and achievement badges.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Start Learning?</h3>
            <p className="text-slate-600 mb-6">
              Join thousands of students who have improved their physics understanding with our comprehensive resources.
            </p>
            <div className="space-y-3">
              <Link href="/mechanics" className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start with Mechanics
              </Link>
              <Link href="/electricity-magnetism" className="block w-full bg-white text-blue-600 border-2 border-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Explore E&M
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}