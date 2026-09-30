export type TourScope = 'trek' | 'local' | 'national' | 'international';

export type TourCategory = 
  | 'Himalayan Trek & High Altitude'
  | 'Culinary & Street Food Trail'
  | 'Royal Heritage & Havelis'
  | 'Spiritual & Ghats Walk'
  | 'Western Ghats & Rainforest'
  | 'Desert Safari & Dunes'
  | 'Wildlife & Forest Safari';

export type TourDifficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';

export interface TourItineraryItem {
  timeOrDay: string;
  title: string;
  description: string;
  altitudeGain?: string;
  distanceCovered?: string;
}

export interface TourAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  scope: TourScope;
  category: TourCategory;
  stateOrRegion: string;
  baseCity: string;
  country: string;
  priceINR: number;
  durationText: string;
  durationDays: number;
  maxAltitudeFt?: number;
  bestSeason: string;
  groupSizeMax: number;
  difficulty: TourDifficulty;
  languageOptions: string[];
  rating: number;
  reviewCount: number;
  guideId: string;
  tagline: string;
  description: string;
  highlights: string[];
  itinerary: TourItineraryItem[];
  included: string[];
  excluded: string[];
  meetingPoint: string;
  cancellationPolicy: string;
  availableDates: string[];
  timeSlots: string[];
  addOns: TourAddOn[];
  gradientTheme: string;
  coverAccent: string;
  tagPills: string[];
  imageUrl: string;
  galleryImages: string[];
  badgeLabel?: string;
  badgeColor?: 'amber' | 'emerald' | 'rose' | 'indigo' | 'cyan' | 'purple';
  originalPriceINR?: number;
  spotsLeft?: number;
}

export interface Guide {
  id: string;
  name: string;
  location: string;
  state: string;
  languages: string[];
  bio: string;
  specialties: string[];
  verifiedSince: string;
  badgeTier: 'NIM Mountaineering Master' | 'IMF Certified Trek Leader' | 'Govt. Licensed Regional Guide' | 'Local Heritage Scholar';
  rating: number;
  reviewCount: number;
  toursLedCount: number;
  responseTime: string;
  governmentIdVerified: boolean;
  phoneVerified: boolean;
  licenseNumber: string;
  certifications: string[];
  avatarInitials: string;
  avatarColor: string;
  accentQuote: string;
}

export interface Review {
  id: string;
  tourId: string;
  guideId: string;
  authorName: string;
  authorCity: string;
  date: string;
  overallRating: number;
  guideKnowledge: number;
  safety: number;
  valueForMoney: number;
  punctuality: number;
  travelerType: 'Solo Trekker' | 'College Friends' | 'Family with Kids' | 'Couple' | 'Adventure Club';
  title: string;
  comment: string;
  verifiedBooking: boolean;
  helpfulVotes: number;
}

export interface Booking {
  id: string;
  bookingCode: string;
  tourId: string;
  tourTitle: string;
  tourScope: TourScope;
  guideId: string;
  guideName: string;
  date: string;
  timeSlot: string;
  guestsCount: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  selectedAddOns: TourAddOn[];
  subtotalINR: number;
  serviceFeeINR: number;
  mountainInsuranceINR: number;
  totalAmountINR: number;
  status: 'confirmed' | 'completed' | 'cancelled';
  paymentMethod: 'upi' | 'card' | 'netbanking';
  upiApp?: 'gpay' | 'phonepe' | 'paytm' | 'bhim';
  createdAt: string;
  notes?: string;
}

export interface GuideMessage {
  id: string;
  guideId: string;
  sender: 'user' | 'guide';
  text: string;
  timestamp: string;
}
