import React from 'react';
import { Search, MapPin, Mountain, ShieldCheck, Sparkles, Sun, CheckCircle } from 'lucide-react';
import { TourScope, TourCategory } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedScope: TourScope | 'all';
  onScopeChange: (scope: TourScope | 'all') => void;
  selectedCategory: TourCategory | 'all';
  onCategoryChange: (cat: TourCategory | 'all') => void;
  totalToursCount: number;
  filteredCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedScope,
  onScopeChange,
  selectedCategory,
  onCategoryChange,
  totalToursCount,
  filteredCount,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden border-b border-amber-900/10">
      {/* Background ambient warm Indian sunlight and mountain gradient */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-100/60 via-[#FDFBF7] to-[#F5EFE6] opacity-90" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Value Proposition */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-4 shadow-2xs">
            <Sun className="w-3.5 h-3.5 text-amber-600 animate-spin [animation-duration:8s]" />
            <span>Curated Domestic Treks & Verified Indian Trails</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.08] text-balance mb-6">
            From High Himalayan Summits to Ancient Temple Ghats.
          </h1>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mb-8">
            Experience authentic India with government-licensed local guides and NIM-certified mountain leaders. Book domestic treks and cultural trails safely with instant UPI, escrow protection, and 100% verified trekker reviews.
          </p>
        </div>

        {/* Unified Search & Discovery Bar */}
        <div className="bg-white rounded-3xl shadow-sm border border-stone-200/90 p-4 sm:p-5 lg:p-6 transition-all ring-1 ring-amber-900/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search destination or guide */}
            <div className="md:col-span-5 relative">
              <label htmlFor="destination-search" className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider">
                Where is your spirit calling?
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-4 h-4 text-amber-700 absolute left-3.5 pointer-events-none" />
                <input
                  id="destination-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Kedarkantha, Manali, Varanasi, Jaisalmer, Kerala..."
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white border border-stone-300 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Scope Selector */}
            <div className="md:col-span-3">
              <label htmlFor="scope-select" className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider">
                Expedition Scope
              </label>
              <div className="relative">
                <select
                  id="scope-select"
                  value={selectedScope}
                  onChange={(e) => onScopeChange(e.target.value as TourScope | 'all')}
                  className="w-full px-3.5 py-2.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white border border-stone-300 rounded-xl text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all cursor-pointer"
                >
                  <option value="all">All India Experiences</option>
                  <option value="trek">🏔️ Himalayan & Mountain Treks</option>
                  <option value="national">🏰 Domestic Multi-day Circuits</option>
                  <option value="local">🪔 Local Heritage & Food Walks</option>
                  <option value="international">🌏 International from India</option>
                </select>
              </div>
            </div>

            {/* Category Selector */}
            <div className="md:col-span-4">
              <label htmlFor="category-select" className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider">
                Experience Theme
              </label>
              <div className="relative">
                <select
                  id="category-select"
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value as TourCategory | 'all')}
                  className="w-full px-3.5 py-2.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white border border-stone-300 rounded-xl text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all cursor-pointer"
                >
                  <option value="all">All Experience Themes</option>
                  <option value="Himalayan Trek & High Altitude">Himalayan Trek & High Altitude</option>
                  <option value="Culinary & Street Food Trail">Culinary & Street Food Trail</option>
                  <option value="Royal Heritage & Havelis">Royal Heritage & Havelis</option>
                  <option value="Spiritual & Ghats Walk">Spiritual & Ghats Walk</option>
                  <option value="Western Ghats & Rainforest">Western Ghats & Rainforest</option>
                  <option value="Desert Safari & Dunes">Desert Safari & Dunes</option>
                </select>
              </div>
            </div>

          </div>

          {/* Quick Trending Domestic Trek & Tour Buttons */}
          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-amber-900 mr-1 flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5" />
                Trending Domestic:
              </span>
              <button
                onClick={() => { onSearchChange('Kedarkantha'); onScopeChange('trek'); }}
                className="px-2.5 py-1 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200/80 font-medium transition-colors cursor-pointer"
              >
                Kedarkantha Snow (12,500 ft)
              </button>
              <button
                onClick={() => { onSearchChange('Hampta'); onScopeChange('trek'); }}
                className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200/80 text-stone-800 transition-colors cursor-pointer"
              >
                Hampta Pass & Chandratal
              </button>
              <button
                onClick={() => { onSearchChange('Old Delhi'); onScopeChange('local'); }}
                className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200/80 text-stone-800 transition-colors cursor-pointer"
              >
                Chandni Chowk Food Trail
              </button>
              <button
                onClick={() => { onSearchChange('Varanasi'); onScopeChange('local'); }}
                className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200/80 text-stone-800 transition-colors cursor-pointer"
              >
                Varanasi Dawn Boat Walk
              </button>
              <button
                onClick={() => { onSearchChange('Rajasthan'); onScopeChange('national'); }}
                className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200/80 text-stone-800 transition-colors cursor-pointer"
              >
                Thar Desert Dunes
              </button>
            </div>

            <div className="flex items-center gap-3 text-stone-600">
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                NIM & IMF Certified Leaders
              </span>
              <span>·</span>
              <span className="font-mono font-medium text-stone-800">
                {filteredCount} {filteredCount === 1 ? 'Experience' : 'Experiences'} Available
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
