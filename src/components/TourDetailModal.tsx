import React, { useState } from 'react';
import { 
  X, Star, MapPin, Users, Clock, ShieldCheck, Check, AlertCircle, 
  MessageSquare, Calendar, ChevronRight, Sparkles, Mountain, Heart, Compass,
  Camera, Flame, ChevronLeft
} from 'lucide-react';
import { Tour, Guide, Review, TourAddOn } from '../types';
import { formatINR } from '../utils/formatters';

interface TourDetailModalProps {
  tour: Tour;
  guide?: Guide;
  reviews: Review[];
  onClose: () => void;
  onStartBooking: (
    tour: Tour, 
    date: string, 
    timeSlot: string, 
    guests: number, 
    selectedAddOns: TourAddOn[]
  ) => void;
  onOpenMessageGuide: (guide: Guide) => void;
  onOpenWriteReview: (tour: Tour) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  guide,
  reviews,
  onClose,
  onStartBooking,
  onOpenMessageGuide,
  onOpenWriteReview,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(tour.availableDates[0] || '2026-10-15');
  const [selectedSlot, setSelectedSlot] = useState<string>(tour.timeSlots[0] || 'Morning Departure');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const gallery = (tour.galleryImages && tour.galleryImages.length > 0)
    ? tour.galleryImages
    : (tour.imageUrl ? [tour.imageUrl] : []);

  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const selectedAddOnsList = tour.addOns.filter(a => selectedAddOnIds.includes(a.id));
  const addOnsTotalPerPerson = selectedAddOnsList.reduce((sum, a) => sum + a.price, 0);
  const subtotalINR = (tour.priceINR + addOnsTotalPerPerson) * guestsCount;
  const serviceFeeINR = Math.round(subtotalINR * 0.05); // 5% platform escrow
  const mountainInsuranceINR = tour.scope === 'trek' ? 499 * guestsCount : 199 * guestsCount;
  const totalAmountINR = subtotalINR + serviceFeeINR + mountainInsuranceINR;

  const tourReviews = reviews.filter(r => r.tourId === tour.id);

  const knowledgeAvg = tourReviews.length ? (tourReviews.reduce((s, r) => s + r.guideKnowledge, 0) / tourReviews.length).toFixed(1) : '5.0';
  const safetyAvg = tourReviews.length ? (tourReviews.reduce((s, r) => s + r.safety, 0) / tourReviews.length).toFixed(1) : '5.0';
  const valueAvg = tourReviews.length ? (tourReviews.reduce((s, r) => s + r.valueForMoney, 0) / tourReviews.length).toFixed(1) : '4.9';
  const punctualityAvg = tourReviews.length ? (tourReviews.reduce((s, r) => s + r.punctuality, 0) / tourReviews.length).toFixed(1) : '5.0';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky Header inside modal */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
            <span>{tour.scope === 'trek' ? 'Himalayan Trek' : `${tour.scope} Expedition`}</span>
            <span>·</span>
            <span>{tour.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isWishlisted ? 'bg-rose-50 border-rose-200 text-rose-600' : 'bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
              title="Save to favorites"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Container */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-10">
          
          {/* Hero Travel Photography Banner with Gallery & Badges */}
          <div className="space-y-3">
            <div className="relative rounded-3xl min-h-[380px] sm:min-h-[440px] text-white overflow-hidden shadow-xl flex flex-col justify-between p-6 sm:p-8 md:p-10 group">
              {/* Full Bleed Background Photo with Zoom on Hover */}
              {gallery.length > 0 ? (
                <img 
                  src={gallery[activePhotoIndex]} 
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${tour.gradientTheme}`} />
              )}

              {/* Scrim Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
              <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

              {/* Top Badges Row */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {tour.badgeLabel && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow-md border border-amber-300/60 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-950 animate-ping inline-block" />
                      <span>{tour.badgeLabel}</span>
                    </div>
                  )}
                  {tour.spotsLeft && tour.spotsLeft <= 5 && (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-950/90 text-rose-300 border border-rose-500/50 backdrop-blur-md">
                      <Flame className="w-3 h-3 text-rose-400 animate-bounce" />
                      <span>Only {tour.spotsLeft} slots left for this season</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>Photo {activePhotoIndex + 1} of {gallery.length}</span>
                </div>
              </div>

              {/* Center/Bottom Content */}
              <div className="relative z-10 max-w-2xl mt-auto pt-8">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-mono tracking-wider uppercase mb-2 font-bold drop-shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{tour.baseCity} · {tour.stateOrRegion}, {tour.country}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 leading-tight drop-shadow-md">
                  {tour.title}
                </h2>
                <p className="text-sm sm:text-base text-stone-200 leading-relaxed line-clamp-2 drop-shadow-sm">
                  {tour.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-5 pt-5 border-t border-white/20 text-xs">
                  <span className="flex items-center gap-1.5 text-stone-200">
                    <Clock className="w-4 h-4 text-amber-400" />
                    {tour.durationText}
                  </span>

                  {tour.maxAltitudeFt && (
                    <span className="flex items-center gap-1.5 text-amber-200 font-bold font-mono bg-amber-500/25 px-2.5 py-1 rounded-lg border border-amber-300/30">
                      <Mountain className="w-4 h-4 text-amber-400" />
                      Max Altitude: {tour.maxAltitudeFt.toLocaleString()} ft
                    </span>
                  )}

                  <span className="flex items-center gap-1.5 text-stone-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Grade: {tour.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-amber-300 font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    {tour.rating.toFixed(2)} ({tour.reviewCount} verified reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable Gallery Thumbnails Strip */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative rounded-2xl overflow-hidden shrink-0 transition-all duration-200 cursor-pointer ${
                      activePhotoIndex === idx 
                        ? 'ring-3 ring-amber-500 shadow-md scale-102' 
                        : 'opacity-70 hover:opacity-100 ring-1 ring-stone-200'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery thumbnail ${idx + 1}`} 
                      className="w-20 sm:w-24 h-14 sm:h-16 object-cover object-center"
                    />
                    {activePhotoIndex === idx && (
                      <span className="absolute inset-0 bg-amber-500/10 pointer-events-none" />
                    )}
                  </button>
                ))}
                <span className="text-[11px] text-stone-400 font-mono ml-1 hidden sm:inline">
                  Click to preview scenic highlights
                </span>
              </div>
            )}
          </div>

          {/* Grid Layout: Main Details (Left) + Purchase Module (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Itinerary, Guide, Inclusions & Reviews */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Tour Overview */}
              <div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                  Trail Overview & Experience
                </h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed whitespace-pre-line">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-amber-900/10">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  Trek & Journey Highlights
                </h4>
                <ul className="space-y-3">
                  {tour.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone-800">
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-950 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chronological Itinerary with Altitude Gain */}
              <div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-4">
                  Day-by-Day Trail Schedule
                </h3>
                <div className="space-y-5 border-l-2 border-amber-600/30 ml-3 pl-5">
                  {tour.itinerary.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-6.5 top-1 w-3 h-3 rounded-full bg-amber-600 border-2 border-white ring-2 ring-amber-200" />
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 mb-0.5">
                        <span>{item.timeOrDay}</span>
                        {item.altitudeGain && (
                          <span className="bg-amber-100 text-amber-900 px-2 py-0.2 rounded text-[10px]">
                            {item.altitudeGain}
                          </span>
                        )}
                      </div>
                      <h5 className="text-sm font-bold text-stone-900 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Trek Leader / Local Guide Spotlight */}
              {guide && (
                <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-amber-900/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${guide.avatarColor} text-white font-mono text-base font-bold flex items-center justify-center shrink-0 shadow-xs`}>
                        {guide.avatarInitials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display text-lg font-bold text-stone-900">{guide.name}</h4>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                            Verified Leader
                          </span>
                        </div>
                        <p className="text-xs text-amber-900 font-semibold mt-0.5">
                          {guide.badgeTier} · {guide.languages.join(' · ')}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenMessageGuide(guide)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-stone-600" />
                      Chat with Leader
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 mt-4 leading-relaxed">
                    {guide.bio}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-stone-200 text-xs">
                    <div>
                      <span className="text-[11px] text-stone-500 block">Experience</span>
                      <span className="font-semibold text-stone-900 font-mono">{guide.toursLedCount}+ treks led</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-500 block">Trekker Rating</span>
                      <span className="font-semibold text-stone-900 font-mono">★ {guide.rating} / 5.0</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-500 block">Response Time</span>
                      <span className="font-semibold text-stone-900 font-mono">{guide.responseTime}</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-500 block">Accreditation #</span>
                      <span className="font-semibold text-stone-900 font-mono truncate block" title={guide.licenseNumber}>
                        {guide.licenseNumber}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-5">
                  <h5 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-700" />
                    Included in Expedition
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {tour.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                  <h5 className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-stone-500" />
                    Excluded
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                    {tour.excluded.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-stone-400 font-bold">—</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Meeting Point & Cancellation */}
              <div className="border-t border-stone-200 pt-6 space-y-3 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Base Rendezvous: </strong>
                    <span>{tour.meetingPoint}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Refund Guarantee: </strong>
                    <span>{tour.cancellationPolicy}</span>
                  </div>
                </div>
              </div>

              {/* Verified Traveler Reviews */}
              <div className="border-t border-stone-200 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-900 flex items-center gap-2">
                      Verified Trekker Reviews
                      <span className="text-sm font-mono text-stone-500 font-normal">
                        ({tourReviews.length} total)
                      </span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Reviews submitted by verified Indian & global travelers who completed the trek.
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenWriteReview(tour)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    Write a Review
                  </button>
                </div>

                {/* Subscores Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200 mb-6 text-xs">
                  <div>
                    <span className="text-stone-500 block">Leader Knowledge</span>
                    <span className="font-mono tabular-nums text-base font-bold text-stone-900">{knowledgeAvg} / 5.0</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Mountain Safety</span>
                    <span className="font-mono tabular-nums text-base font-bold text-stone-900">{safetyAvg} / 5.0</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Value for Money</span>
                    <span className="font-mono tabular-nums text-base font-bold text-stone-900">{valueAvg} / 5.0</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Food & Camp Care</span>
                    <span className="font-mono tabular-nums text-base font-bold text-stone-900">{punctualityAvg} / 5.0</span>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {tourReviews.length === 0 ? (
                    <div className="p-6 text-center text-xs text-stone-500 bg-stone-50 rounded-2xl">
                      No reviews yet for this batch. Complete your booking to submit verified feedback!
                    </div>
                  ) : (
                    tourReviews.map((rev) => (
                      <div key={rev.id} className="p-5 rounded-2xl border border-stone-200 bg-white">
                        <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-stone-900">{rev.authorName}</span>
                            <span>({rev.authorCity})</span>
                            <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              Verified Trekker
                            </span>
                          </div>
                          <span className="font-mono text-stone-400">{rev.date}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3.5 h-3.5 ${i < rev.overallRating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-stone-900">{rev.title}</span>
                          <span className="text-[11px] text-stone-400 font-mono">· {rev.travelerType}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {rev.comment}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

            {/* Right Column: Contiguous Purchase / Booking Module in INR */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-[#FAF8F5] rounded-3xl border border-amber-900/15 p-6 shadow-sm space-y-6">
                
                {/* Price Display in INR */}
                <div className="flex items-baseline justify-between pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-xs text-stone-500 uppercase tracking-wider block font-semibold">Trek Fee per Person</span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="font-mono tabular-nums text-3xl font-bold text-stone-900">
                        {formatINR(tour.priceINR)}
                      </span>
                      <span className="text-xs text-stone-500">INR</span>
                    </div>
                  </div>

                  <div className="text-right text-xs">
                    <span className="text-emerald-800 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      UPI & Escrow Protected
                    </span>
                    <span className="text-stone-400 text-[11px] block mt-0.5">Funds released post-trek</span>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    Select Batch Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600 cursor-pointer"
                  >
                    {tour.availableDates.map(date => (
                      <option key={date} value={date}>
                        Batch: {new Date(date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    Reporting Time
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {tour.timeSlots.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                          selectedSlot === slot 
                            ? 'bg-stone-900 text-white border-stone-900 font-bold' 
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trekkers Counter Stepper */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      Number of Trekkers / Travelers
                    </label>
                    <span className="text-xs text-stone-500">
                      (Max {tour.groupSizeMax} per batch)
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white border border-stone-300 rounded-xl p-1.5">
                    <button
                      type="button"
                      disabled={guestsCount <= 1}
                      onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                      className="w-9 h-9 rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-stone-900 transition-colors flex items-center justify-center text-sm cursor-pointer"
                    >
                      –
                    </button>
                    <div className="font-mono tabular-nums font-bold text-base text-stone-900">
                      {guestsCount} {guestsCount === 1 ? 'Trekker' : 'Trekkers'}
                    </div>
                    <button
                      type="button"
                      disabled={guestsCount >= tour.groupSizeMax}
                      onClick={() => setGuestsCount(Math.min(tour.groupSizeMax, guestsCount + 1))}
                      className="w-9 h-9 rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-stone-900 transition-colors flex items-center justify-center text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add-ons checklist */}
                {tour.addOns.length > 0 && (
                  <div>
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                      Optional Add-ons
                    </label>
                    <div className="space-y-2">
                      {tour.addOns.map(addon => {
                        const checked = selectedAddOnIds.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddOn(addon.id)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                              checked ? 'bg-amber-100/60 border-amber-400' : 'bg-white border-stone-200 hover:border-stone-300'
                            }`}
                          >
                            <div className="flex items-center justify-between font-semibold text-stone-900">
                              <span>{addon.name}</span>
                              <span className="font-mono tabular-nums text-amber-900 font-bold">+{formatINR(addon.price)}/person</span>
                            </div>
                            <p className="text-[11px] text-stone-500 mt-1">{addon.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Price Breakdown Calculation in INR */}
                <div className="pt-4 border-t border-stone-200 space-y-2 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>{formatINR(tour.priceINR)} × {guestsCount} trekkers</span>
                    <span className="font-mono tabular-nums font-semibold">{formatINR(tour.priceINR * guestsCount)}</span>
                  </div>

                  {addOnsTotalPerPerson > 0 && (
                    <div className="flex justify-between text-stone-600">
                      <span>Add-ons ({formatINR(addOnsTotalPerPerson)} × {guestsCount})</span>
                      <span className="font-mono tabular-nums font-semibold">{formatINR(addOnsTotalPerPerson * guestsCount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-stone-600">
                    <span>Escrow Support & Safety Permit (5%)</span>
                    <span className="font-mono tabular-nums">{formatINR(serviceFeeINR)}</span>
                  </div>

                  <div className="flex justify-between text-stone-600">
                    <span>High-Altitude Insurance & Medical Shield</span>
                    <span className="font-mono tabular-nums">{formatINR(mountainInsuranceINR)}</span>
                  </div>

                  <div className="pt-2 border-t border-stone-300 flex justify-between font-bold text-stone-900 text-sm">
                    <span>Total Due</span>
                    <span className="font-mono tabular-nums text-xl text-stone-900">
                      {formatINR(totalAmountINR)}
                    </span>
                  </div>
                </div>

                {/* Primary Booking CTA */}
                <button
                  type="button"
                  onClick={() => onStartBooking(tour, selectedDate, selectedSlot, guestsCount, selectedAddOnsList)}
                  className="w-full py-4 px-4 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to UPI / Card Checkout</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-stone-500 text-center leading-relaxed">
                  🛡️ <strong>Arka Travels Escrow Guarantee:</strong> 100% of your payment is safely held in escrow and released to the mountain leader only after the trek concludes.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
