import React from 'react';
import { ShieldCheck, Lock, Sun, Mountain } from 'lucide-react';
import { TourScope } from '../types';

interface FooterProps {
  onSelectScope: (scope: TourScope | 'all') => void;
  onOpenGuides: () => void;
  onOpenSafety: () => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectScope,
  onOpenGuides,
  onOpenSafety,
  onOpenApply,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-0.5 flex items-center justify-center text-white">
                <Sun className="w-4 h-4 text-amber-50" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white block">
                ARKA TRAVELS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              India's premier adventure and heritage travel collective. Curated Himalayan snow treks, royal desert caravans, and spiritual city walks led by verified NIM-certified mountain leaders.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                NIM / IMF Certified
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-amber-300" />
                100% UPI Escrow
              </span>
            </div>
          </div>

          {/* Expeditions Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore by Scope
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onSelectScope('trek')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Mountain className="w-3 h-3 text-amber-400" />
                  Himalayan Domestic Treks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectScope('national')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Domestic Regional Circuits (Rajasthan & Kerala)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectScope('local')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Local Heritage & Street Food Walks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectScope('international')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  International from India (Nepal & Bhutan)
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Community */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Trek Community
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={onOpenGuides}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Verified Mountain Leaders
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenApply}
                  className="hover:text-white transition-colors text-amber-300 cursor-pointer"
                >
                  Join as a Trek Leader
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSafety}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Himalayan Safety Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Currency & Region */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Payments & Country
            </h4>
            <div className="text-xs text-stone-400 space-y-2">
              <div className="p-2 bg-stone-900 rounded-lg text-amber-300 font-mono text-[11px] font-bold border border-amber-900/30">
                🇮🇳 INR (₹) · Instant UPI
              </div>
              <p className="text-[11px] text-stone-500">
                Google Pay, PhonePe, Paytm, RuPay, and all major Indian banks supported.
              </p>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Arka Travels India Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Forest Permit Terms</span>
            <span>·</span>
            <span>UPI Escrow Policy</span>
            <span>·</span>
            <span>High-Altitude Safety Code</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
