import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, Star, MapPin, Award, CheckCircle, Search, Mountain } from 'lucide-react';
import { Guide, Tour } from '../types';

interface VerifiedGuidesDirectoryProps {
  guides: Guide[];
  tours: Tour[];
  onOpenMessageGuide: (guide: Guide) => void;
  onSelectTour: (tour: Tour) => void;
  onOpenApply: () => void;
}

export const VerifiedGuidesDirectory: React.FC<VerifiedGuidesDirectoryProps> = ({
  guides,
  tours,
  onOpenMessageGuide,
  onSelectTour,
  onOpenApply,
}) => {
  const [searchGuide, setSearchGuide] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('all');

  const filteredGuides = guides.filter(g => {
    const matchSearch = g.name.toLowerCase().includes(searchGuide.toLowerCase()) ||
      g.location.toLowerCase().includes(searchGuide.toLowerCase()) ||
      g.state.toLowerCase().includes(searchGuide.toLowerCase()) ||
      g.specialties.some(s => s.toLowerCase().includes(searchGuide.toLowerCase()));

    const matchState = selectedState === 'all' || 
      g.state.toLowerCase().includes(selectedState.toLowerCase());

    return matchSearch && matchState;
  });

  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Directory Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-amber-900/10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>NIM, IMF & Ministry of Tourism Certified</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Meet India's Verified Mountain Leaders & Local Historians
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Every leader on Arka Travels holds government licenses, mountaineering institute accreditation (NIM / HMI), and Wilderness First Aid certifications. Connect directly before booking.
          </p>
        </div>

        <button
          onClick={onOpenApply}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-all shadow-xs shrink-0 self-start md:self-auto cursor-pointer"
        >
          <Award className="w-4 h-4 text-amber-300" />
          <span>Apply as a Trek Leader</span>
        </button>
      </div>

      {/* Search & State Filter Bar for Guides */}
      <div className="my-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchGuide}
            onChange={(e) => setSearchGuide(e.target.value)}
            placeholder="Search by leader name, peak, or state..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs font-semibold text-stone-600 whitespace-nowrap">
            Region:
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600 cursor-pointer"
          >
            <option value="all">All Indian Regions</option>
            <option value="Uttarakhand">Uttarakhand (Garhwal)</option>
            <option value="Himachal">Himachal Pradesh</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Delhi">Delhi & Uttar Pradesh</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Kerala">Kerala (Western Ghats)</option>
          </select>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map(guide => {
          const guideTours = tours.filter(t => t.guideId === guide.id);

          return (
            <div 
              key={guide.id}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all"
            >
              <div>
                {/* Guide Header Card */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${guide.avatarColor} text-white font-mono text-base font-bold flex items-center justify-center shrink-0 shadow-xs`}>
                      {guide.avatarInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-display text-lg font-bold text-stone-900">
                          {guide.name}
                        </h3>
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-stone-500 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-700" />
                        <span>{guide.location}, {guide.state}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-0.5 text-xs font-bold text-stone-900">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-mono tabular-nums">{guide.rating}</span>
                    </div>
                    <span className="text-[10px] text-stone-400 font-mono block">
                      {guide.reviewCount} reviews
                    </span>
                  </div>
                </div>

                {/* Badge Tier */}
                <div className="text-xs mb-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-amber-900 font-bold bg-amber-100/70 px-2 py-0.5 rounded-md text-[11px]">
                    {guide.badgeTier}
                  </span>
                  <span className="text-stone-400">·</span>
                  <span className="text-stone-500 font-mono text-[11px]">{guide.responseTime} reply</span>
                </div>

                {/* Personal Quote */}
                <blockquote className="text-xs italic text-stone-700 bg-[#FAF8F5] p-3 rounded-xl border border-amber-900/10 mb-4">
                  "{guide.accentQuote}"
                </blockquote>

                {/* Bio */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                  {guide.bio}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-1.5">
                    Specialties & Terrain
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.specialties.map((spec, i) => (
                      <span key={i} className="text-xs text-stone-800 bg-stone-100 px-2 py-0.5 rounded-md font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Official License Pill */}
                <div className="text-[11px] text-stone-500 font-mono flex items-center gap-1 pt-2 border-t border-stone-100">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="truncate">Permit / Certificate: {guide.licenseNumber}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenMessageGuide(guide)}
                  className="w-1/2 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-stone-600" />
                  <span>Chat Leader</span>
                </button>

                {guideTours.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => onSelectTour(guideTours[0])}
                    className="w-1/2 py-2.5 px-3 bg-stone-900 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Mountain className="w-3.5 h-3.5 text-amber-200" />
                    <span>View Treks</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="w-1/2 py-2.5 px-3 bg-stone-100 text-stone-400 text-xs font-semibold rounded-xl cursor-not-allowed"
                  >
                    <span>Fully Booked</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
