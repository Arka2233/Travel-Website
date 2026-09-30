import React, { useState } from 'react';
import { 
  X, ShieldCheck, Lock, CreditCard, CheckCircle2, 
  Calendar, MapPin, Download, Ticket, QrCode, Smartphone, Building2
} from 'lucide-react';
import { Tour, Guide, TourAddOn, Booking } from '../types';
import { formatINR } from '../utils/formatters';

interface CheckoutModalProps {
  tour: Tour;
  guide?: Guide;
  date: string;
  timeSlot: string;
  guestsCount: number;
  selectedAddOns: TourAddOn[];
  onClose: () => void;
  onBookingSuccess: (booking: Booking) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  tour,
  guide,
  date,
  timeSlot,
  guestsCount,
  selectedAddOns,
  onClose,
  onBookingSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'processing' | 'confirmed'>('form');
  
  // Traveler details form
  const [guestName, setGuestName] = useState<string>('Arka Sarkar');
  const [guestEmail, setGuestEmail] = useState<string>('sarkararka8@gmail.com');
  const [guestPhone, setGuestPhone] = useState<string>('+91 98302 44910');
  const [emergencyPhone, setEmergencyPhone] = useState<string>('+91 98300 12345');
  const [specialNotes, setSpecialNotes] = useState<string>('Pure vegetarian meals. Shoe size UK 9.');
  
  // Payment methods
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [selectedUpiApp, setSelectedUpiApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'bhim'>('gpay');
  const [upiId, setUpiId] = useState<string>('sarkararka8@okhdfcbank');

  // Card details
  const [cardNumber, setCardNumber] = useState<string>('6070 •••• •••• 4421'); // RuPay / Visa
  const [cardExpiry, setCardExpiry] = useState<string>('08/29');
  const [cardCvc, setCardCvc] = useState<string>('712');

  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  // Financial calculations in INR
  const addOnsTotalINR = selectedAddOns.reduce((s, a) => s + a.price, 0) * guestsCount;
  const subtotalINR = (tour.priceINR * guestsCount) + addOnsTotalINR;
  const serviceFeeINR = Math.round(subtotalINR * 0.05);
  const mountainInsuranceINR = tour.scope === 'trek' ? 499 * guestsCount : 199 * guestsCount;
  const totalAmountINR = subtotalINR + serviceFeeINR + mountainInsuranceINR;

  const handlePayAndConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    setTimeout(() => {
      const cityCode = tour.baseCity.slice(0, 3).toUpperCase();
      const randomCode = `ARKA-${cityCode}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const newBooking: Booking = {
        id: `bk-${Date.now()}`,
        bookingCode: randomCode,
        tourId: tour.id,
        tourTitle: tour.title,
        tourScope: tour.scope,
        guideId: tour.guideId,
        guideName: guide ? guide.name : 'Certified Mountain Leader',
        date,
        timeSlot,
        guestsCount,
        guestName,
        guestEmail,
        guestPhone,
        selectedAddOns,
        subtotalINR,
        serviceFeeINR,
        mountainInsuranceINR,
        totalAmountINR,
        status: 'confirmed',
        paymentMethod,
        upiApp: paymentMethod === 'upi' ? selectedUpiApp : undefined,
        createdAt: new Date().toISOString(),
        notes: specialNotes
      };

      setConfirmedBooking(newBooking);
      onBookingSuccess(newBooking);
      setStep('confirmed');
    }, 1400);
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Arka Travels//Expedition Booking//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Arka Travels: ${tour.title}`,
      `DESCRIPTION:Guide/Trek Leader: ${guide?.name || 'Mountain Leader'}\\nRendezvous: ${tour.meetingPoint}\\nBooking ID: ${confirmedBooking?.bookingCode}`,
      `LOCATION:${tour.meetingPoint}`,
      `DTSTART:${date.replace(/-/g, '')}T060000Z`,
      `DTEND:${date.replace(/-/g, '')}T180000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${tour.slug}-arka-travels.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
              {step === 'confirmed' ? 'Official E-Ticket & Trek Permit Voucher' : 'Arka Travels 256-Bit Encrypted Indian Checkout'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8">
          
          {/* STEP 1: FORM */}
          {step === 'form' && (
            <form onSubmit={handlePayAndConfirm} className="space-y-6">
              
              {/* Order Summary Strip */}
              <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-amber-900/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-900 font-bold">
                    {tour.stateOrRegion}, India · {tour.scope === 'trek' ? 'Himalayan Trek' : 'Domestic Tour'}
                  </span>
                  <h4 className="font-display text-base font-bold text-stone-900 mt-0.5">
                    {tour.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-stone-600 mt-1 flex-wrap">
                    <span>Batch Date: <strong>{date}</strong></span>
                    <span>·</span>
                    <span>Reporting: <strong>{timeSlot}</strong></span>
                    <span>·</span>
                    <span><strong>{guestsCount}</strong> {guestsCount === 1 ? 'Trekker' : 'Trekkers'}</span>
                  </div>
                </div>

                <div className="text-right sm:border-l sm:border-stone-200 sm:pl-4 shrink-0">
                  <span className="text-[11px] text-stone-500 block">Total Due (INR)</span>
                  <span className="font-mono tabular-nums text-2xl font-bold text-stone-900">
                    {formatINR(totalAmountINR)}
                  </span>
                </div>
              </div>

              {/* Lead Trekker Information */}
              <div>
                <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                  Lead Trekker / Traveler Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">
                      Full Legal Name (as per Aadhaar / Passport)
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">
                      Email Address (for official trek permit)
                    </label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">
                      Mobile WhatsApp Number (for trek leader coordination)
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">
                      Emergency Family Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={emergencyPhone}
                      onChange={(e) => setEmergencyPhone(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600 font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-medium text-stone-700 mb-1">
                      Meal Preferences / Medical Notes (e.g. Jain, Pure Veg, Asthma)
                    </label>
                    <input
                      type="text"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                </div>
              </div>

              {/* Indian Payment Options: UPI / Cards / NetBanking */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Select Payment Method (INR)
                  </h4>
                  <span className="text-[11px] text-emerald-800 flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    Escrow Protected
                  </span>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Instant UPI (GPay / PhonePe)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    RuPay / Visa / Master
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      paymentMethod === 'netbanking'
                        ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    NetBanking (SBI, HDFC)
                  </button>
                </div>

                {/* UPI Interface */}
                {paymentMethod === 'upi' && (
                  <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-950">Select UPI App / ID:</span>
                      <span className="text-[11px] text-emerald-800 font-semibold">Zero Gateway Surcharge</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: 'gpay', label: 'Google Pay', icon: '🟢' },
                        { id: 'phonepe', label: 'PhonePe', icon: '🟣' },
                        { id: 'paytm', label: 'Paytm UPI', icon: '🔵' },
                        { id: 'bhim', label: 'BHIM UPI', icon: '🟠' }
                      ].map(app => (
                        <button
                          key={app.id}
                          type="button"
                          onClick={() => setSelectedUpiApp(app.id as any)}
                          className={`p-2 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                            selectedUpiApp === app.id
                              ? 'bg-white border-amber-600 font-bold text-stone-900 shadow-xs ring-1 ring-amber-600'
                              : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-white'
                          }`}
                        >
                          <span className="block text-sm mb-0.5">{app.icon}</span>
                          <span className="text-[11px] block">{app.label}</span>
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Enter UPI VPA ID
                      </label>
                      <input
                        type="text"
                        required
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@okhdfcbank or 9830244910@ybl"
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>
                  </div>
                )}

                {/* Card Fields */}
                {paymentMethod === 'card' && (
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-3">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-600 mb-1">
                        Card Number (RuPay, Visa, Mastercard)
                      </label>
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-stone-600 mb-1">
                          Expiry Date (MM/YY)
                        </label>
                        <input
                          type="text"
                          required
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-stone-600 mb-1">
                          CVV Code
                        </label>
                        <input
                          type="text"
                          required
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl text-xs space-y-2">
                    <span className="font-semibold block text-stone-800">Popular Indian Banks:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'].map(bank => (
                        <div key={bank} className="p-2 bg-white border border-stone-200 rounded-lg text-center font-medium text-stone-700">
                          {bank}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Escrow & Government Forest Permit Disclaimer */}
              <div className="bg-emerald-50/70 border border-emerald-300/80 rounded-2xl p-4 text-xs text-emerald-950 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-bold block">Arka Travels Escrow & Permit Protection:</span>
                  Your payment of <strong className="font-mono">{formatINR(totalAmountINR)}</strong> is secured in escrow. Your state forest department trek permits, high-altitude insurance policy, and campsite allotments are automatically issued.
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-bold text-sm rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-amber-200" />
                <span>Pay via UPI & Confirm Permit ({formatINR(totalAmountINR)})</span>
              </button>

            </form>
          )}

          {/* STEP 2: PROCESSING SIMULATOR */}
          {step === 'processing' && (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 border-3 border-amber-300 border-t-amber-700 rounded-full animate-spin mx-auto" />
              <h4 className="font-display text-lg font-bold text-stone-900">
                Authorizing UPI Escrow Payment...
              </h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Verifying mountain leader batch capacity and generating official Arka Travels E-Ticket & forest permit.
              </p>
            </div>
          )}

          {/* STEP 3: CONFIRMED TICKET VOUCHER */}
          {step === 'confirmed' && confirmedBooking && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-250">
              
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-900">
                  Trek Permit Confirmed & Escrow Held!
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Your official Arka Travels E-Ticket and mountain leader contact have been dispatched to <strong>{confirmedBooking.guestEmail}</strong>.
                </p>
              </div>

              {/* Official Arka Travels Boarding Pass / Ticket Voucher */}
              <div className="border-2 border-dashed border-amber-900/30 bg-[#FAF8F5] rounded-3xl p-6 relative overflow-hidden">
                
                {/* Top Voucher Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div>
                    <span className="font-display font-bold text-stone-900 text-lg tracking-wider block">
                      ARKA TRAVELS E-TICKET
                    </span>
                    <span className="text-[11px] text-amber-900 font-mono font-semibold">
                      Official Himalayan Permit & Trekker Voucher
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">Booking ID</span>
                    <span className="font-mono text-base font-bold text-amber-900 tracking-wider">
                      {confirmedBooking.bookingCode}
                    </span>
                  </div>
                </div>

                {/* Tour Info */}
                <div className="py-4 border-b border-stone-200">
                  <span className="text-[11px] text-amber-800 font-bold uppercase tracking-wider block">
                    {tour.stateOrRegion}, India · {tour.category}
                  </span>
                  <h4 className="font-display text-xl font-bold text-stone-900 mt-1">
                    {tour.title}
                  </h4>
                </div>

                {/* Key Grid Details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-b border-stone-200 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[11px]">Batch Date</span>
                    <span className="font-semibold text-stone-900 font-mono">{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">Reporting Time</span>
                    <span className="font-semibold text-stone-900 font-mono">{confirmedBooking.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">Party Size</span>
                    <span className="font-semibold text-stone-900 font-mono">{confirmedBooking.guestsCount} Trekkers</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">Amount Paid</span>
                    <span className="font-semibold text-stone-900 font-mono">{formatINR(confirmedBooking.totalAmountINR)}</span>
                  </div>
                </div>

                {/* Guide & Meeting Instructions */}
                <div className="py-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[11px]">Certified Trek Leader</span>
                    <span className="font-semibold text-stone-900 flex items-center gap-1">
                      {confirmedBooking.guideName}
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[11px]">Base Camp Rendezvous</span>
                    <span className="font-semibold text-stone-900">{tour.meetingPoint}</span>
                  </div>
                </div>

                {/* Voucher QR Code Simulated Footer */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-[11px] text-stone-500 max-w-sm">
                    Mountain Hotline: <strong>+91 1800 200 4882</strong> · Show this QR code to your NIM trek leader at the base camp rendezvous.
                  </div>

                  {/* SVG QR Code Simulation */}
                  <div className="w-14 h-14 bg-white p-1 rounded-lg border border-stone-200 shrink-0 flex items-center justify-center shadow-2xs">
                    <svg className="w-full h-full text-stone-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm0-4h4v-4h-4v4zm-2 2h2v2h-2v-2zm-2-2h2v2h-2v-2zm4-4h2v2h-2v-2z" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-1/2 py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-stone-600" />
                  <span>Sync to Calendar (.ics)</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-1/2 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>View in My Bookings</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
