import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full h-screen px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-200 relative z-10 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto -mt-8 sm:-mt-12 md:-mt-16">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
          PhysicsRoadmap
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 mb-4 sm:mb-5 md:mb-6 font-medium px-4">
          The best free resource for AP Physics C
        </p>
        
        {/* Enhanced Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-center px-4">
          <Link
            href="/mechanics"
            className="group w-full sm:w-auto bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
              Mechanics
            </span>
          </Link>
          <Link
            href="/electricity-magnetism"
            className="group w-full sm:w-auto bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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