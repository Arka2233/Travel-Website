import React, { useState } from 'react';
import { 
  Star, ShieldCheck, MapPin, Users, Clock, ArrowUpRight, 
  Mountain, Flame, Heart, ChevronLeft, ChevronRight, Sparkles, Check
} from 'lucide-react';
import { Tour, Guide } from '../types';
import { formatINR } from '../utils/formatters';

interface TourCardProps {
  tour: Tour;
  guide?: Guide;
  onSelect: (tour: Tour) => void;
  onSelectGuide?: (guide: Guide) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  guide,
  onSelect,
  onSelectGuide,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const images = (tour.galleryImages && tour.galleryImages.length > 0)
    ? tour.galleryImages
    : (tour.imageUrl ? [tour.imageUrl] : []);

  const scopeLabel = 
    tour.scope === 'trek' ? 'Himalayan Trek' :
    tour.scope === 'national' ? 'Domestic Circuit' :
    tour.scope === 'local' ? 'Local Heritage Walk' : 'International Expedition';

  const isTrek = tour.scope === 'trek';

  // Discount calculation
  const discountINR = tour.originalPriceINR && tour.originalPriceINR > tour.priceINR 
    ? tour.originalPriceINR - tour.priceINR 
    : 0;
  const discountPercent = tour.originalPriceINR && discountINR > 0
    ? Math.round((discountINR / tour.originalPriceINR) * 100)
    : 0;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <article 
      onClick={() => onSelect(tour)}
      className="group cursor-pointer bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-2xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 relative"
    >
      <div>
        {/* Visual Travel Package Hero Carrier with Photography & Animated Micro-interactions */}
        <div className="relative h-64 w-full overflow-hidden bg-stone-900 select-none">
          
          {/* Main Photo with Ken Burns Zoom & Smooth Transition */}
          {images.length > 0 && !imageError ? (
            <img 
              src={images[currentImageIndex]} 
              alt={tour.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${tour.gradientTheme} flex items-center justify-center`}>
              <Mountain className="w-16 h-16 text-white/30 animate-pulse" />
            </div>
          )}

          {/* Luxury Scrim Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-black/60 pointer-events-none" />

          {/* Shimmer Light Sweep on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* Top Row: Customer Attraction Badges & Wishlist Button */}
          <div className="absolute top-3.5 inset-x-3.5 z-10 flex items-center justify-between">
            {/* Animated Customer Highlight Badge */}
            <div className="flex flex-col gap-1 items-start">
              {tour.badgeLabel ? (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-md bg-amber-500 text-stone-950 backdrop-blur-md border border-amber-300/60 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-950 animate-ping inline-block" />
                  <span>{tour.badgeLabel}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-white/15">
                  {isTrek && <Mountain className="w-3 h-3" />}
                  <span>{scopeLabel}</span>
                </div>
              )}

              {/* Scarcity / High Demand pill */}
              {tour.spotsLeft && tour.spotsLeft <= 5 && (
                <div className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-950/80 backdrop-blur-md text-rose-300 border border-rose-500/40">
                  <Flame className="w-2.5 h-2.5 text-rose-400 animate-bounce" />
                  <span>Only {tour.spotsLeft} slots left!</span>
                </div>
              )}
            </div>

            {/* Right side: Star Rating & Wishlist */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-300 font-medium border border-white/15 shadow-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-mono tabular-nums text-white text-xs font-bold">{tour.rating.toFixed(2)}</span>
                <span className="text-stone-300 text-[10px]">({tour.reviewCount})</span>
              </div>

              <button
                type="button"
                onClick={handleWishlistToggle}
                className={`p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer shadow-xs ${
                  isWishlisted 
                    ? 'bg-rose-600 border-rose-400 text-white scale-110' 
                    : 'bg-black/50 border-white/20 text-white/90 hover:bg-black/80 hover:text-rose-400'
                }`}
                title={isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
                aria-label="Wishlist"
              >
                <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Quick Photo Carousel Arrows (Show on Hover) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer shadow-md"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer shadow-md"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Photo Indicator Dots */}
              <div className="absolute bottom-16 inset-x-0 flex justify-center gap-1 z-10 pointer-events-none">
                {images.slice(0, 5).map((_, idx) => (
                  <span 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex 
                        ? 'w-4 bg-amber-400' 
                        : 'w-1.5 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Bottom Photo Overlay: Location & Altitude / Stats */}
          <div className="absolute bottom-3 inset-x-3.5 z-10 text-white">
            <div className="flex items-center justify-between gap-2 text-xs mb-1">
              <p className="text-[11px] text-amber-200 uppercase tracking-widest font-mono font-semibold flex items-center gap-1 drop-shadow-sm">
                <MapPin className="w-3 h-3 text-amber-400" />
                {tour.stateOrRegion}, {tour.country}
              </p>

              {tour.maxAltitudeFt ? (
                <span className="flex items-center gap-1 bg-amber-500/30 backdrop-blur-xs px-2 py-0.5 rounded-md font-mono text-[10px] text-amber-200 font-bold border border-amber-300/40">
                  <Mountain className="w-3 h-3 text-amber-300 animate-pulse" />
                  {tour.maxAltitudeFt.toLocaleString()} ft
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[11px] text-stone-200">
                  <Clock className="w-3 h-3 text-amber-400" />
                  {tour.durationText}
                </span>
              )}
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors line-clamp-1 drop-shadow-md">
              {tour.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Tagline */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
            {tour.tagline}
          </p>

          {/* Key Trek/Tour Highlights Bullets */}
          <div className="mb-4 space-y-1">
            {tour.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>

          {/* Zero-pill metadata line with typographic separators */}
          <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-4 flex-wrap">
            <span className="font-semibold text-stone-800">{tour.difficulty} Grade</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Season: {tour.bestSeason}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Max {tour.groupSizeMax} trekkers</span>
          </div>

          {/* Verified Indian Guide / Trek Leader Attribution */}
          {guide && (
            <div 
              onClick={(e) => {
                if (onSelectGuide) {
                  e.stopPropagation();
                  onSelectGuide(guide);
                }
              }}
              className="flex items-center justify-between p-2.5 bg-[#FAF8F5] hover:bg-amber-50/60 rounded-2xl border border-amber-900/10 transition-colors group/guide"
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${guide.avatarColor} text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-2xs`}>
                  {guide.avatarInitials}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-stone-900 group-hover/guide:text-amber-800 transition-colors">{guide.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[10px] text-amber-900 font-medium block">
                    {guide.badgeTier}
                  </span>
                </div>
              </div>

              <span className="text-[10px] text-stone-400 font-mono">
                {guide.responseTime}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: INR Pricing, Discount Badge & Animated CTA */}
      <div className="px-5 py-4 bg-[#FBF9F6] border-t border-stone-200 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Starts at</span>
            {discountINR > 0 && (
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {discountPercent}% OFF
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono tabular-nums text-xl font-bold text-stone-900">
              {formatINR(tour.priceINR)}
            </span>
            {tour.originalPriceINR && tour.originalPriceINR > tour.priceINR && (
              <span className="text-xs text-stone-400 font-mono line-through">
                {formatINR(tour.originalPriceINR)}
              </span>
            )}
            <span className="text-[11px] text-stone-500 font-normal">/ person</span>
          </div>
        </div>

        <button 
          type="button"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 group-hover:bg-amber-600 text-white rounded-xl text-xs font-semibold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
        >
          <span>Explore Package</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
};
