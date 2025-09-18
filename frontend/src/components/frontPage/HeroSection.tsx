import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full px-4 pt-32 pb-20 bg-slate-50 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6">
          PhysicsRoadmap
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="text-xl md:text-2xl text-slate-700 mb-4 font-medium">
          The best free resource for AP Physics C
        </p>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Master the fundamental laws of the universe with interactive content, practice problems, and comprehensive study guides
        </p>
        
        {/* Enhanced Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/mechanics"
            className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              ⚡ Mechanics
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          <Link
            href="/electricity-magnetism"
            className="group w-full sm:w-auto bg-white text-blue-700 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              🔌 Electricity & Magnetism
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}