import React, { useState, useEffect } from 'react';
import { 
  Tour, Guide, Review, Booking, TourScope, TourCategory, TourAddOn, TourDifficulty 
} from './types';
import { 
  INITIAL_TOURS, INITIAL_GUIDES, INITIAL_REVIEWS, INITIAL_BOOKINGS 
} from './data/mockData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TourCard } from './components/TourCard';
import { TourDetailModal } from './components/TourDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { VerifiedGuidesDirectory } from './components/VerifiedGuidesDirectory';
import { GuideMessageModal } from './components/GuideMessageModal';
import { ReviewModal } from './components/ReviewModal';
import { MyBookingsView } from './components/MyBookingsView';
import { GuideApplicationModal } from './components/GuideApplicationModal';
import { GuideHubModal } from './components/GuideHubModal';
import { TrustFeaturesSection } from './components/TrustFeaturesSection';
import { Footer } from './components/Footer';
import { formatINR } from './utils/formatters';
import { SlidersHorizontal, Mountain, Compass, Sparkles, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Persistent state in localStorage with Arka Travels namespace
  const [tours, setTours] = useState<Tour[]>(() => {
    const saved = localStorage.getItem('arka_travels_tours_v3');
    return saved ? JSON.parse(saved) : INITIAL_TOURS;
  });

  const [guides] = useState<Guide[]>(() => {
    const saved = localStorage.getItem('arka_travels_guides_v3');
    return saved ? JSON.parse(saved) : INITIAL_GUIDES;
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('arka_travels_reviews_v3');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('arka_travels_bookings_v3');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  useEffect(() => {
    localStorage.setItem('arka_travels_tours_v3', JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    localStorage.setItem('arka_travels_reviews_v3', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('arka_travels_bookings_v3', JSON.stringify(bookings));
  }, [bookings]);

  // Navigation tab & filters
  const [currentTab, setCurrentTab] = useState<'tours' | 'guides' | 'trust' | 'bookings'>('tours');
  const [selectedScope, setSelectedScope] = useState<TourScope | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<TourCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<TourDifficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPriceINR, setMaxPriceINR] = useState<number>(40000);

  // Modals state
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [checkoutData, setCheckoutData] = useState<{
    tour: Tour;
    date: string;
    timeSlot: string;
    guestsCount: number;
    selectedAddOns: TourAddOn[];
  } | null>(null);

  const [activeMessageGuide, setActiveMessageGuide] = useState<Guide | null>(null);
  const [activeReviewTour, setActiveReviewTour] = useState<Tour | null>(null);
  const [isGuideApplicationOpen, setIsGuideApplicationOpen] = useState<boolean>(false);
  const [isGuideHubOpen, setIsGuideHubOpen] = useState<boolean>(false);

  // Filtered tours
  const filteredTours = tours.filter(tour => {
    const matchScope = selectedScope === 'all' || tour.scope === selectedScope;
    const matchCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchDifficulty = selectedDifficulty === 'all' || tour.difficulty === selectedDifficulty;
    const matchPrice = tour.priceINR <= maxPriceINR;

    const query = searchQuery.toLowerCase().trim();
    const matchSearch = !query || 
      tour.title.toLowerCase().includes(query) ||
      tour.baseCity.toLowerCase().includes(query) ||
      tour.stateOrRegion.toLowerCase().includes(query) ||
      tour.tagline.toLowerCase().includes(query) ||
      tour.highlights.some(h => h.toLowerCase().includes(query));

    return matchScope && matchCategory && matchDifficulty && matchPrice && matchSearch;
  });

  // Handlers
  const handleStartBooking = (
    tour: Tour,
    date: string,
    timeSlot: string,
    guestsCount: number,
    selectedAddOns: TourAddOn[]
  ) => {
    setSelectedTour(null);
    setCheckoutData({
      tour,
      date,
      timeSlot,
      guestsCount,
      selectedAddOns
    });
  };

  const handleBookingSuccess = (newBooking: Booking) => {
    setBookings(prev => [newBooking, ...prev]);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(prev => 
      prev.map(b => b.id === bookingId ? { ...b, status: 'cancelled' } : b)
    );
  };

  const handleSubmitReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev]);
    setTours(prev => prev.map(t => {
      if (t.id === newReview.tourId) {
        const nextCount = t.reviewCount + 1;
        const nextRating = Number(((t.rating * t.reviewCount + newReview.overallRating) / nextCount).toFixed(2));
        return {
          ...t,
          reviewCount: nextCount,
          rating: nextRating
        };
      }
      return t;
    }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 flex flex-col font-sans selection:bg-amber-700 selection:text-white">
      
      {/* 1. Header (Arka Travels) */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        selectedScope={selectedScope}
        onSelectScope={setSelectedScope}
        bookingsCount={bookings.filter(b => b.status === 'confirmed').length}
        onOpenGuideApplication={() => setIsGuideApplicationOpen(true)}
        onOpenGuideHub={() => setIsGuideHubOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        
        {/* VIEW 1: TOURS & HIMALAYAN TREKS DISCOVERY */}
        {currentTab === 'tours' && (
          <div>
            {/* Hero Section */}
            <HeroSection
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedScope={selectedScope}
              onScopeChange={setSelectedScope}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              totalToursCount={tours.length}
              filteredCount={filteredTours.length}
            />

            {/* Catalog Grid Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              
              {/* Secondary Filter & Sort Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-amber-900/10">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                    {selectedScope === 'all' 
                      ? 'All Curated Indian Expeditions' 
                      : selectedScope === 'trek' 
                        ? '🏔️ Himalayan Treks & Summits' 
                        : selectedScope === 'national' 
                          ? '🏰 Domestic Regional Circuits' 
                          : selectedScope === 'local'
                            ? '🪔 Local Heritage & Street Food Walks'
                            : '🌏 International Expeditions from India'}
                  </span>
                  <span className="font-mono text-xs text-amber-900 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                    {filteredTours.length} available
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <label className="text-stone-600 font-semibold">Grade:</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value as TourDifficulty | 'all')}
                      className="px-2.5 py-1.5 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 cursor-pointer"
                    >
                      <option value="all">All Grades</option>
                      <option value="Easy">Easy</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Challenging">Challenging</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <label className="text-stone-600 font-semibold">Max Price:</label>
                    <span className="font-mono font-bold text-amber-900">{formatINR(maxPriceINR)}</span>
                    <input
                      type="range"
                      min="1500"
                      max="40000"
                      step="500"
                      value={maxPriceINR}
                      onChange={(e) => setMaxPriceINR(Number(e.target.value))}
                      className="w-24 accent-amber-700 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Tour Cards Grid */}
              {filteredTours.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-3 shadow-2xs">
                  <Compass className="w-10 h-10 text-amber-700 mx-auto" />
                  <h3 className="font-display text-xl font-bold text-stone-900">
                    No Indian expeditions match your current filters
                  </h3>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto">
                    Try broadening your search term or selecting "All India Experiences".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedScope('all');
                      setSelectedCategory('all');
                      setSelectedDifficulty('all');
                      setMaxPriceINR(40000);
                    }}
                    className="mt-2 inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded-xl text-xs font-bold hover:bg-amber-800 cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredTours.map(tour => {
                    const guide = guides.find(g => g.id === tour.guideId);
                    return (
                      <TourCard
                        key={tour.id}
                        tour={tour}
                        guide={guide}
                        onSelect={setSelectedTour}
                        onSelectGuide={setActiveMessageGuide}
                      />
                    );
                  })}
                </div>
              )}

            </div>

            {/* Trust & Guarantee Section */}
            <TrustFeaturesSection />
          </div>
        )}

        {/* VIEW 2: VERIFIED GUIDES & TREK LEADERS */}
        {currentTab === 'guides' && (
          <VerifiedGuidesDirectory
            guides={guides}
            tours={tours}
            onOpenMessageGuide={setActiveMessageGuide}
            onSelectTour={setSelectedTour}
            onOpenApply={() => setIsGuideApplicationOpen(true)}
          />
        )}

        {/* VIEW 3: SAFETY & ESCROW POLICY */}
        {currentTab === 'trust' && (
          <div>
            <div className="py-12 bg-white border-b border-amber-900/10">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold">
                  Arka Travels Safety & Escrow Architecture
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900">
                  How We Guarantee 100% Peace of Mind in the Mountains
                </h2>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Every booking on Arka Travels is backed by certified NIM/IMF mountain leaders, state forest department permits, zero-risk UPI escrow, and emergency medical insurance.
                </p>
              </div>
            </div>
            <TrustFeaturesSection />
          </div>
        )}

        {/* VIEW 4: MY BOOKINGS & DIGITAL PERMIT VOUCHERS */}
        {currentTab === 'bookings' && (
          <MyBookingsView
            bookings={bookings}
            tours={tours}
            guides={guides}
            onSelectTour={setSelectedTour}
            onOpenMessageGuide={setActiveMessageGuide}
            onOpenWriteReview={setActiveReviewTour}
            onCancelBooking={handleCancelBooking}
            onExploreTours={() => {
              setCurrentTab('tours');
              setSelectedScope('all');
            }}
          />
        )}

      </main>

      {/* 2. Footer */}
      <Footer
        onSelectScope={(scope) => {
          setSelectedScope(scope);
          setCurrentTab('tours');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGuides={() => {
          setCurrentTab('guides');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSafety={() => {
          setCurrentTab('trust');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenApply={() => setIsGuideApplicationOpen(true)}
      />

      {/* MODAL 1: TOUR DETAIL & CONTIGUOUS PURCHASE */}
      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          guide={guides.find(g => g.id === selectedTour.guideId)}
          reviews={reviews}
          onClose={() => setSelectedTour(null)}
          onStartBooking={handleStartBooking}
          onOpenMessageGuide={setActiveMessageGuide}
          onOpenWriteReview={setActiveReviewTour}
        />
      )}

      {/* MODAL 2: CHECKOUT & INSTANT PERMIT VOUCHER GENERATOR */}
      {checkoutData && (
        <CheckoutModal
          tour={checkoutData.tour}
          guide={guides.find(g => g.id === checkoutData.tour.guideId)}
          date={checkoutData.date}
          timeSlot={checkoutData.timeSlot}
          guestsCount={checkoutData.guestsCount}
          selectedAddOns={checkoutData.selectedAddOns}
          onClose={() => setCheckoutData(null)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {/* MODAL 3: DIRECT MOUNTAIN LEADER MESSAGING */}
      {activeMessageGuide && (
        <GuideMessageModal
          guide={activeMessageGuide}
          onClose={() => setActiveMessageGuide(null)}
        />
      )}

      {/* MODAL 4: WRITE A REVIEW */}
      {activeReviewTour && (
        <ReviewModal
          tour={activeReviewTour}
          onClose={() => setActiveReviewTour(null)}
          onSubmitReview={handleSubmitReview}
        />
      )}

      {/* MODAL 5: BECOME A LOCAL LEADER APPLICATION */}
      {isGuideApplicationOpen && (
        <GuideApplicationModal
          onClose={() => setIsGuideApplicationOpen(false)}
        />
      )}

      {/* MODAL 6: LEADER PORTAL / DASHBOARD */}
      {isGuideHubOpen && (
        <GuideHubModal
          bookings={bookings}
          onClose={() => setIsGuideHubOpen(false)}
        />
      )}

    </div>
  );
}
