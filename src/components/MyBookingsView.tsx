import React, { useState } from 'react';
import { 
  Ticket, Calendar, Clock, MapPin, ShieldCheck, 
  MessageSquare, Star, AlertTriangle, Download, X, Mountain
} from 'lucide-react';
import { Booking, Tour, Guide } from '../types';
import { formatINR } from '../utils/formatters';

interface MyBookingsViewProps {
  bookings: Booking[];
  tours: Tour[];
  guides: Guide[];
  onSelectTour: (tour: Tour) => void;
  onOpenMessageGuide: (guide: Guide) => void;
  onOpenWriteReview: (tour: Tour) => void;
  onCancelBooking: (bookingId: string) => void;
  onExploreTours: () => void;
}

export const MyBookingsView: React.FC<MyBookingsViewProps> = ({
  bookings,
  tours,
  guides,
  onSelectTour,
  onOpenMessageGuide,
  onOpenWriteReview,
  onCancelBooking,
  onExploreTours,
}) => {
  const [selectedVoucher, setSelectedVoucher] = useState<Booking | null>(null);
  const [cancelModalBooking, setCancelModalBooking] = useState<Booking | null>(null);

  const handleDownloadTicket = (b: Booking) => {
    window.print();
  };

  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-amber-900/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
            <Ticket className="w-4 h-4 text-amber-700" />
            <span>Trekker Hub & Permit Manifest</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            My Booked Indian Expeditions
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Access your official forest department permit vouchers, communicate directly with your NIM trek leader, and manage batch departure dates.
          </p>
        </div>

        <button
          onClick={onExploreTours}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-all shadow-xs self-start sm:self-auto cursor-pointer"
        >
          <span>Explore More Treks & Tours</span>
        </button>
      </div>

      {/* Bookings List */}
      <div className="mt-8">
        {bookings.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-4 shadow-2xs">
            <div className="w-14 h-14 bg-amber-100/70 text-amber-800 rounded-full flex items-center justify-center mx-auto">
              <Mountain className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-stone-900">
              No active trek bookings yet
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              Ready to feel the high Himalayas or wander royal havelis? Explore verified domestic treks and cultural trails across India.
            </p>
            <button
              onClick={onExploreTours}
              className="mt-2 inline-flex items-center px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Browse Himalayan Treks
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map(b => {
              const matchedTour = tours.find(t => t.id === b.tourId);
              const matchedGuide = guides.find(g => g.id === b.guideId);

              const isConfirmed = b.status === 'confirmed';
              const isCancelled = b.status === 'cancelled';

              return (
                <div 
                  key={b.id}
                  className={`bg-white rounded-3xl border p-6 md:p-8 transition-all ${
                    isCancelled ? 'border-rose-200 bg-rose-50/20 opacity-80' : 'border-stone-200/90 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200">
                    <div className="flex items-start gap-4">
                      {matchedTour?.imageUrl && (
                        <div 
                          onClick={() => onSelectTour(matchedTour)}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-stone-200 cursor-pointer group/img relative"
                        >
                          <img 
                            src={matchedTour.imageUrl} 
                            alt={b.tourTitle} 
                            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-3 text-xs mb-2">
                          <span className="font-mono font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md">
                            {b.bookingCode}
                          </span>

                          <span className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] ${
                            isConfirmed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {isConfirmed ? '✓ Confirmed & UPI Escrow Held' : 'Cancelled & Refunded to UPI'}
                          </span>

                          <span className="text-stone-400 font-mono hidden sm:inline">
                            Booked: {new Date(b.createdAt).toLocaleDateString('en-IN')}
                          </span>
                        </div>

                        <h3 
                          onClick={() => matchedTour && onSelectTour(matchedTour)}
                          className="font-display text-xl sm:text-2xl font-bold text-stone-900 hover:text-amber-700 cursor-pointer transition-colors"
                        >
                          {b.tourTitle}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-stone-600 mt-2">
                          <span className="flex items-center gap-1 font-mono font-semibold text-stone-900">
                            <Calendar className="w-3.5 h-3.5 text-amber-700" />
                            Batch: {b.date}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5 text-stone-500" />
                            {b.timeSlot}
                          </span>
                          <span>·</span>
                          <span>{b.guestsCount} {b.guestsCount === 1 ? 'Trekker' : 'Trekkers'}</span>
                          <span>·</span>
                          <span className="font-mono tabular-nums font-bold text-stone-900">
                            Total Paid: {formatINR(b.totalAmountINR)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Guide Info */}
                    {matchedGuide && (
                      <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 rounded-2xl border border-amber-900/10 shrink-0">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${matchedGuide.avatarColor} text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-2xs`}>
                          {matchedGuide.avatarInitials}
                        </div>
                        <div className="text-left text-xs">
                          <div className="flex items-center gap-1 font-bold text-stone-900">
                            {matchedGuide.name}
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          </div>
                          <span className="text-[11px] text-amber-900 font-semibold block">
                            {matchedGuide.badgeTier}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedVoucher(b)}
                        className="px-3.5 py-2 bg-stone-900 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Ticket className="w-3.5 h-3.5 text-amber-300" />
                        <span>View E-Ticket & Permit</span>
                      </button>

                      {matchedGuide && (
                        <button
                          type="button"
                          onClick={() => onOpenMessageGuide(matchedGuide)}
                          className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-stone-600" />
                          <span>Chat Leader</span>
                        </button>
                      )}

                      {matchedTour && (
                        <button
                          type="button"
                          onClick={() => onOpenWriteReview(matchedTour)}
                          className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>Write Review</span>
                        </button>
                      )}
                    </div>

                    {isConfirmed && (
                      <button
                        type="button"
                        onClick={() => setCancelModalBooking(b)}
                        className="text-stone-400 hover:text-rose-600 font-medium transition-colors cursor-pointer"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Ticket Voucher Modal View */}
      {selectedVoucher && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-4 animate-in fade-in duration-200">
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 my-auto border border-stone-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <span className="font-display font-bold text-stone-900">ARKA TRAVELS E-TICKET</span>
              <button 
                onClick={() => setSelectedVoucher(null)}
                className="p-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="text-center py-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">Booking Permit ID</span>
                <div className="font-mono text-xl font-bold text-amber-900">{selectedVoucher.bookingCode}</div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-2xl space-y-1 border border-amber-900/10">
                <strong className="text-stone-900 block text-sm">{selectedVoucher.tourTitle}</strong>
                <span className="text-stone-700 block">Batch Date: <strong>{selectedVoucher.date}</strong></span>
                <span className="text-stone-700 block">Party: <strong>{selectedVoucher.guestsCount} Trekkers</strong> ({selectedVoucher.guestName})</span>
                <span className="text-stone-700 block font-mono font-bold">Amount: {formatINR(selectedVoucher.totalAmountINR)}</span>
              </div>

              <div className="text-center pt-2">
                <div className="w-20 h-20 bg-stone-100 mx-auto rounded-lg flex items-center justify-center p-2 mb-2">
                  <svg className="w-full h-full text-stone-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm0-4h4v-4h-4v4zm-2 2h2v2h-2v-2zm-2-2h2v2h-2v-2zm4-4h2v2h-2v-2z" />
                  </svg>
                </div>
                <span className="text-[11px] text-stone-500">Scan at base camp rendezvous with your NIM mountain leader</span>
              </div>
            </div>

            <button
              onClick={() => handleDownloadTicket(selectedVoucher)}
              className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold text-xs mt-2 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Download E-Ticket</span>
            </button>
          </div>
        </div>
      )}

      {/* Cancellation Confirmation Modal */}
      {cancelModalBooking && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-4 animate-in fade-in duration-200">
          <div className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6 my-auto border border-stone-200 space-y-4">
            <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h4 className="font-display text-lg font-bold text-stone-900">
                Cancel Booking {cancelModalBooking.bookingCode}?
              </h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Under the Arka Travels Escrow Guarantee, your full payment of <strong>{formatINR(cancelModalBooking.totalAmountINR)}</strong> will be automatically refunded back to your source UPI / Bank account.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setCancelModalBooking(null)}
                className="w-1/2 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Keep Booking
              </button>
              <button
                type="button"
                onClick={() => {
                  onCancelBooking(cancelModalBooking.id);
                  setCancelModalBooking(null);
                }}
                className="w-1/2 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Confirm Refund
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
