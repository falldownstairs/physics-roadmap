import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen px-3 sm:px-6 md:px-8 lg:px-12 bg-slate-200 relative z-10 flex items-center justify-center py-16 sm:py-0">
      <div className="text-center max-w-4xl mx-auto w-full">
        {/* Main Title */}
        <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-3 sm:mb-3 md:mb-4 px-1">
          PhysicsRoadmap
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl text-slate-700 mb-6 sm:mb-5 md:mb-6 font-medium px-1">
          The best free resource for AP Physics C
        </p>
        
        {/* Enhanced Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-6 justify-center items-stretch sm:items-center px-1">
          <Link
            href="/mechanics"
            className="group bg-transparent border-2 border-blue-600 text-blue-600 px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:transform sm:hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
              Mechanics
            </span>
          </Link>
          <Link
            href="/electricity-magnetism"
            className="group bg-transparent border-2 border-blue-600 text-blue-600 px-5 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:transform sm:hover:-translate-y-1"
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