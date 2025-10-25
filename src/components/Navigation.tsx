import { ArrowRight } from 'lucide-react';

interface NavigationProps {
  onCTAClick: () => void;
}

export default function Navigation({ onCTAClick }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/2025-10-11- Dobeu Logo (Logo with Text)whtiebck.png"
              alt="Dobeu Tech Solutions"
              className="h-8 sm:h-10"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onCTAClick}
              className="group inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Schedule Audit</span>
              <span className="sm:hidden">Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
