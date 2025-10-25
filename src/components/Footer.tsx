import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img
              src="/2025-10-11- Dobeu Logo (Logo with Text)whtiebck.png"
              alt="Dobeu Tech Solutions"
              className="h-10 mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Specialized software for mid-market operations. Built for businesses caught between basic tools and enterprise solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Toms River, NJ</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@dobeu.net" className="text-sm hover:text-cyan-400 transition-colors">
                  contact@dobeu.net
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Available via scheduled consultation</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Service Area</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Currently prioritizing businesses within 100 miles of Toms River, NJ for pilot program participation and hands-on partnership.
            </p>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Pilot Programs Active</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Ocean County Restaurants</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Mid-Atlantic Fleets</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Dobeu Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
