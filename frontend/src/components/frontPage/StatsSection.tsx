export default function StatsSection() {
  return (
    <div className="w-full px-4 py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-slate-600">Practice Problems</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-sm text-slate-600">Access Available</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm text-slate-600">Free Content</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-sm text-slate-600">AP Physics C Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
}