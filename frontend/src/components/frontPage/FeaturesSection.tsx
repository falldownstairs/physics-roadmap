export default function FeaturesSection() {
  return (
    <div className="w-full px-4 py-20 bg-white border-t border-slate-200">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📚</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Coverage</h3>
          <p className="text-slate-600">Complete mastery of all AP Physics C topics with detailed explanations and examples</p>
        </div>
        
        <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Interactive Learning</h3>
          <p className="text-slate-600">Engaging physics simulations and real-time problem solving at absolutely no cost</p>
        </div>
        
        <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Exam Success</h3>
          <p className="text-slate-600">Structured roadmap designed specifically for AP Physics C exam preparation</p>
        </div>
      </div>
    </div>
  );
}