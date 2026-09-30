import React, { useState } from 'react';
import { 
  Sun, Mountain, ShieldCheck, Ticket, UserCheck, 
  Menu, X, PhoneCall, ChevronDown, Sparkles, MapPin, 
  CheckCircle2, Compass, ArrowRight, ExternalLink
} from 'lucide-react';
import { TourScope } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentTab: 'tours' | 'guides' | 'trust' | 'bookings';
  onSelectTab: (tab: 'tours' | 'guides' | 'trust' | 'bookings') => void;
  selectedScope: TourScope | 'all';
  onSelectScope: (scope: TourScope | 'all') => void;
  bookingsCount: number;
  onOpenGuideApplication: () => void;
  onOpenGuideHub: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  selectedScope,
  onSelectScope,
  bookingsCount,
  onOpenGuideApplication,
  onOpenGuideHub,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpeditionDropdownOpen, setIsExpeditionDropdownOpen] = useState(false);

  const handleNavClick = (tab: 'tours' | 'guides' | 'trust' | 'bookings', scope?: TourScope | 'all') => {
    onSelectTab(tab);
    if (scope !== undefined) {
      onSelectScope(scope);
    }
    setIsMobileMenuOpen(false);
    setIsExpeditionDropdownOpen(false);
  };

  return (
    <>
      {/* 1. Indian Luxury Top Utility Ribbon */}
      <div className="bg-[#1C1917] text-stone-300 text-[11px] font-medium border-b border-amber-900/30 tracking-wide relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          {/* Left: Indian Heritage & Govt Accreditation badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>अर्क • ARKA EXPEDITIONS</span>
            </span>
            <span className="hidden md:inline-block text-stone-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-stone-300">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Govt. Registered Adventure Operator & IMF Certified
            </span>
          </div>

          {/* Right: Emergency Line, Escrow & Currency */}
          <div className="flex items-center gap-3 sm:gap-5 text-stone-300">
            <a 
              href="tel:18002752275" 
              className="hidden lg:flex items-center gap-1 hover:text-amber-300 transition-colors text-stone-300"
              title="24x7 Himalayan Trek Rescue & Booking Helpline"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>24x7 Helpline: <strong className="text-amber-300 font-mono">1800-ARKA-IND</strong></span>
            </a>

            <button
              onClick={onOpenGuideHub}
              className="hover:text-amber-300 transition-colors hidden sm:inline-flex items-center gap-1 text-stone-300 cursor-pointer"
            >
              <span>Guide Portal</span>
            </button>

            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800/80 border border-stone-700/60 text-amber-300 font-mono font-semibold text-[10px]">
              <span>🇮🇳 INR (₹)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Distinctive Brand Identity */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('tours', 'all')}
              className="flex items-center gap-3 text-left group focus-visible:outline-none cursor-pointer"
              aria-label="Arka Travels Home"
            >
              {/* Surya & Himalayan Crest Logo Icon */}
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 p-[1.5px] shadow-sm group-hover:scale-105 group-hover:shadow-amber-500/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-[#1C1917] flex items-center justify-center overflow-hidden relative">
                  {/* Subtle golden ambient glow inside */}
                  <div className="absolute inset-0 bg-radial from-amber-500/20 to-transparent opacity-80" />
                  
                  {/* Custom Surya + Mountain Emblem */}
                  <div className="relative flex flex-col items-center justify-center">
                    <Sun className="w-5 h-5 text-amber-400 animate-[spin_12s_linear_infinite]" />
                    <Mountain className="w-4 h-4 -mt-2 text-stone-200" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                    ARKA
                  </span>
                  <span className="font-display text-2xl font-light tracking-wide text-amber-700 group-hover:text-amber-900 transition-colors">
                    TRAVELS
                  </span>
                </div>
                <div className="flex items-center gap-2 -mt-0.5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 font-semibold">
                    Himalayan Treks & Domestic Trails
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Clean, balanced, uncluttered) */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-stone-700">
            {/* 1. Explore Expeditions Dropdown / Main Switcher */}
            <div className="relative">
              <button
                onClick={() => {
                  if (currentTab !== 'tours') {
                    handleNavClick('tours', 'all');
                  } else {
                    setIsExpeditionDropdownOpen(!isExpeditionDropdownOpen);
                  }
                }}
                onMouseEnter={() => setIsExpeditionDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  currentTab === 'tours'
                    ? 'bg-amber-100/60 text-amber-950 font-semibold shadow-2xs'
                    : 'hover:bg-stone-100 text-stone-700 hover:text-stone-900'
                }`}
              >
                <Compass className={`w-4 h-4 ${currentTab === 'tours' ? 'text-amber-700' : 'text-stone-500'}`} />
                <span>Expeditions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-stone-400 ${isExpeditionDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Expeditions Dropdown Menu */}
              <AnimatePresence>
                {isExpeditionDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setIsExpeditionDropdownOpen(false)}
                    className="absolute top-full left-0 mt-1 w-64 p-2 bg-white rounded-2xl shadow-xl border border-stone-200/90 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-stone-400">
                      Browse by Expedition Type
                    </div>
                    
                    <button
                      onClick={() => handleNavClick('tours', 'all')}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                        currentTab === 'tours' && selectedScope === 'all'
                          ? 'bg-amber-50 text-amber-900 font-semibold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>All Experiences</span>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400">View all</span>
                    </button>

                    <button
                      onClick={() => handleNavClick('tours', 'trek')}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                        currentTab === 'tours' && selectedScope === 'trek'
                          ? 'bg-amber-50 text-amber-900 font-semibold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Mountain className="w-4 h-4 text-amber-700" />
                        <div>
                          <div className="font-medium text-stone-900">Himalayan Treks</div>
                          <div className="text-[10px] text-stone-500">Kedarkantha, Hampta, Rupin</div>
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-600 text-white">HOT</span>
                    </button>

                    <button
                      onClick={() => handleNavClick('tours', 'national')}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                        currentTab === 'tours' && selectedScope === 'national'
                          ? 'bg-amber-50 text-amber-900 font-semibold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <div>
                          <div className="font-medium text-stone-900">Domestic Circuits</div>
                          <div className="text-[10px] text-stone-500">Rajasthan, Kerala, Meghalaya</div>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('tours', 'local')}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                        currentTab === 'tours' && selectedScope === 'local'
                          ? 'bg-amber-50 text-amber-900 font-semibold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Compass className="w-4 h-4 text-purple-600" />
                        <div>
                          <div className="font-medium text-stone-900">Local Heritage Walks</div>
                          <div className="text-[10px] text-stone-500">Old Delhi, Kashi, Kolkata</div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Direct Himalayan Treks shortcut */}
            <button
              onClick={() => handleNavClick('tours', 'trek')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                currentTab === 'tours' && selectedScope === 'trek'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'hover:bg-amber-50/80 text-stone-700 hover:text-amber-900'
              }`}
            >
              <Mountain className={`w-4 h-4 ${currentTab === 'tours' && selectedScope === 'trek' ? 'text-white' : 'text-amber-600'}`} />
              <span>Himalayan Treks</span>
            </button>

            {/* 3. Verified Trek Leaders */}
            <button
              onClick={() => handleNavClick('guides')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                currentTab === 'guides'
                  ? 'bg-amber-100/60 text-amber-950 font-semibold shadow-2xs'
                  : 'hover:bg-stone-100 text-stone-700 hover:text-stone-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Leaders</span>
            </button>

            {/* 4. Safety & Escrow */}
            <button
              onClick={() => handleNavClick('trust')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                currentTab === 'trust'
                  ? 'bg-amber-100/60 text-amber-950 font-semibold shadow-2xs'
                  : 'hover:bg-stone-100 text-stone-700 hover:text-stone-900'
              }`}
            >
              <span>Safety & Escrow</span>
            </button>

            {/* 5. My Bookings with Pill */}
            <button
              onClick={() => handleNavClick('bookings')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                currentTab === 'bookings'
                  ? 'bg-amber-100/60 text-amber-950 font-semibold shadow-2xs'
                  : 'hover:bg-stone-100 text-stone-700 hover:text-stone-900'
              }`}
            >
              <Ticket className="w-4 h-4 text-stone-500" />
              <span>My Bookings</span>
              {bookingsCount > 0 && (
                <span className="px-1.5 py-0.2 font-mono text-[10px] font-bold bg-amber-600 text-white rounded-full">
                  {bookingsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Zone 3: Actions & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Guide Partner Hub link (desktop) */}
            <button
              onClick={onOpenGuideHub}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              title="Guide Partner Portal"
            >
              <span>Partner Hub</span>
            </button>

            {/* Join as Leader CTA button */}
            <button
              onClick={onOpenGuideApplication}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 hover:from-stone-800 hover:to-amber-900 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Lead a Trek</span>
              <span className="hidden xl:inline text-[10px] text-amber-300 font-mono font-normal">NIM/IMF</span>
            </button>

            {/* Mobile Bookings Quick Button */}
            <button
              onClick={() => handleNavClick(currentTab === 'bookings' ? 'tours' : 'bookings')}
              className="lg:hidden relative p-2.5 rounded-xl bg-stone-100 text-stone-700 hover:text-stone-900 hover:bg-stone-200/70 transition-colors cursor-pointer"
              aria-label="My Bookings"
            >
              <Ticket className="w-5 h-5" />
              {bookingsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-600 text-white text-[9px] font-mono font-bold flex items-center justify-center">
                  {bookingsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 hover:bg-amber-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* 3. Mobile Navigation Drawer (Full animated sheet) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FDFBF7] border-b border-amber-900/15 shadow-2xl relative z-40 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
              
              {/* Brand Motto Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 to-amber-950 text-stone-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-semibold">
                    Arka Travels • भारत दर्शन
                  </div>
                  <div className="font-display text-base text-white font-bold mt-0.5">
                    Himalayan Treks & Verified Trails
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-amber-400" />
                </div>
              </div>

              {/* Main Navigation Links */}
              <div className="space-y-1">
                <div className="px-2 pb-1 text-[11px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                  Menu Navigation
                </div>

                <button
                  onClick={() => handleNavClick('tours', 'all')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentTab === 'tours' && selectedScope === 'all'
                      ? 'bg-amber-100 text-amber-950'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-amber-700" />
                    <span>All Expeditions & Tours</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('tours', 'trek')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentTab === 'tours' && selectedScope === 'trek'
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-800 hover:bg-amber-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Mountain className={`w-5 h-5 ${currentTab === 'tours' && selectedScope === 'trek' ? 'text-white' : 'text-amber-600'}`} />
                    <span>Himalayan Treks (Kedarkantha, Hampta...)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white">Top Pick</span>
                </button>

                <button
                  onClick={() => handleNavClick('tours', 'national')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentTab === 'tours' && selectedScope === 'national'
                      ? 'bg-amber-100 text-amber-950'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span>Domestic Circuits (Rajasthan, Kerala...)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('tours', 'local')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentTab === 'tours' && selectedScope === 'local'
                      ? 'bg-amber-100 text-amber-950'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span>Local Heritage Walks (Delhi, Kashi...)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('guides')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentTab === 'guides'
                      ? 'bg-amber-100 text-amber-950'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Verified Trek Leaders & Guides</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">NIM Certified</span>
                </button>

                <button
                  onClick={() => handleNavClick('trust')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentTab === 'trust'
                      ? 'bg-amber-100 text-amber-950'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-700" />
                    <span>Safety, Medical & UPI Escrow Guarantee</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('bookings')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentTab === 'bookings'
                      ? 'bg-amber-100 text-amber-950'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-stone-600" />
                    <span>My Bookings & Permit Vouchers</span>
                  </div>
                  {bookingsCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-600 text-white">
                      {bookingsCount} Active
                    </span>
                  )}
                </button>
              </div>

              {/* Action Buttons for Mobile */}
              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenGuideApplication();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Join as Verified Trek Leader (NIM / IMF)</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenGuideHub();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Guide Partner Payout Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </button>
              </div>

              {/* Emergency & Support Footer in Mobile Menu */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                    Trekker Emergency Hotline:
                  </span>
                  <a href="tel:18002752275" className="font-mono font-bold text-amber-900 underline">
                    1800-ARKA-IND
                  </a>
                </div>
                <p className="text-[11px] text-stone-600">
                  Instant UPI Escrow release 24h after trek completion. 100% weather & safety refund protection.
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
