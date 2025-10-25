import { TrendingDown, Clock, BarChart3, AlertTriangle, FileText, ShieldAlert } from 'lucide-react';

export default function Problems() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            You're caught between basic tools that don't scale and enterprise solutions you can't justify
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                R
              </span>
              For Restaurant Operators
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Losing $200-300 weekly per location to untracked food waste?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Without real-time visibility, you're throwing away profits you can't even measure
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Spending 13+ hours on manual invoice processing?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Time your team could spend improving operations instead of chasing paperwork
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Can't see performance gaps across locations?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Flying blind without cross-location visibility means missing optimization opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                F
              </span>
              For Fleet Operators
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    One safety violation away from a $15K+ DOT penalty?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Compliance gaps you don't even know exist could shut down your operation
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Drowning in DVIR paperwork and training documentation?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Scattered files across multiple systems make audits a nightmare
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Can't justify a full-time safety manager but need compliance coverage?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    You're stuck doing it yourself or risking costly violations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
