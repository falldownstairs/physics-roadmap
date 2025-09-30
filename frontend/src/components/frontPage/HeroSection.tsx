import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full h-screen px-4 bg-slate-200 relative z-10 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto -mt-16">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-3">
          PhysicsRoadmap
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="text-xl md:text-2xl text-slate-700 mb-6 font-medium">
          The best free resource for AP Physics C
        </p>
        
        {/* Enhanced Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/mechanics"
            className="group w-full sm:w-auto bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
              Mechanics
            </span>
          </Link>
          <Link
            href="/electricity-magnetism"
            className="group w-full sm:w-auto bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
              Electricity & Magnetism
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}