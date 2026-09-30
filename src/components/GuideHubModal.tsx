import React, { useState } from 'react';
import { X, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Booking } from '../types';
import { formatINR } from '../utils/formatters';

interface GuideHubModalProps {
  bookings: Booking[];
  onClose: () => void;
}

export const GuideHubModal: React.FC<GuideHubModalProps> = ({
  bookings,
  onClose,
}) => {
  const [instantBookingEnabled, setInstantBookingEnabled] = useState<boolean>(true);

  // Escrow financial mock in INR
  const totalEscrowPendingINR = 148500;
  const totalEarningsMonthINR = 384200;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-700 text-amber-50 font-bold flex items-center justify-center font-mono text-xs">
              AT
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-900 uppercase tracking-widest block font-bold">
                Arka Travels Leader Portal
              </span>
              <h3 className="font-display font-bold text-stone-900 text-base">
                Devendra Singh Rawat · NIM Mountaineering Master
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              Verified NIM Certified
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-xs">
          
          {/* Metrics Row in INR */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-amber-900/10">
              <span className="text-stone-500 text-[11px] block mb-1">Escrow Balance Pending UPI Release</span>
              <div className="font-mono text-2xl font-bold text-stone-900">
                {formatINR(totalEscrowPendingINR)}
              </div>
              <span className="text-[10px] text-stone-400 mt-1 block">
                Auto-credited via UPI 24h after trek concludes
              </span>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200">
              <span className="text-stone-500 text-[11px] block mb-1">Earned This Month (90% Payout)</span>
              <div className="font-mono text-2xl font-bold text-emerald-900">
                {formatINR(totalEarningsMonthINR)}
              </div>
              <span className="text-[10px] text-emerald-700 mt-1 block flex items-center gap-0.5 font-semibold">
                <TrendingUp className="w-3 h-3" />
                +24% vs last winter season
              </span>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-amber-900/10">
              <span className="text-stone-500 text-[11px] block mb-1">Trekker Satisfaction Score</span>
              <div className="font-mono text-2xl font-bold text-amber-900">
                4.99 ★
              </div>
              <span className="text-[10px] text-stone-400 mt-1 block">
                Based on 382 verified Indian trekkers
              </span>
            </div>
          </div>

          {/* Operational Controls & Status */}
          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-2xl flex items-center justify-between gap-4">
            <div>
              <span className="font-bold text-amber-950 block">Instant Batch Booking Mode</span>
              <span className="text-stone-600 text-[11px]">
                Allows verified Indian trekkers to book open slots on Kedarkantha & Har Ki Dun batches instantly with UPI.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setInstantBookingEnabled(!instantBookingEnabled)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                instantBookingEnabled 
                  ? 'bg-emerald-700 text-white shadow-xs' 
                  : 'bg-stone-200 text-stone-700'
              }`}
            >
              {instantBookingEnabled ? 'Instant Active' : 'Manual Review'}
            </button>
          </div>

          {/* Upcoming Manifest Roster */}
          <div>
            <h4 className="font-display text-base font-bold text-stone-900 mb-3">
              Upcoming Batch Manifest Roster
            </h4>

            <div className="space-y-3">
              {bookings.map(b => (
                <div key={b.id} className="p-4 bg-white border border-stone-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-amber-900">{b.bookingCode}</span>
                      <span className="text-stone-400">·</span>
                      <span className="font-semibold text-stone-900">{b.tourTitle}</span>
                    </div>
                    <div className="text-stone-500 text-[11px] flex items-center gap-3">
                      <span>Batch: <strong>{b.date}</strong></span>
                      <span>·</span>
                      <span>Lead Trekker: <strong>{b.guestName}</strong></span>
                      <span>·</span>
                      <span>{b.guestsCount} Trekkers</span>
                    </div>
                  </div>

                  <div className="text-right sm:border-l sm:border-stone-100 sm:pl-4 shrink-0">
                    <span className="text-[11px] text-emerald-800 font-bold block">
                      Escrow Held: {formatINR(b.totalAmountINR)}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      Settles to: devendra@okaxis
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Audit Dossier */}
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <h5 className="font-bold text-stone-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              Mountain Leader Compliance Audit
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-600">
              <div>Mountaineering Institute: <strong>NIM Uttarkashi (Advanced AMC Grade A)</strong></div>
              <div>Forest Dept Permit: <strong>Govind Pashu Vihar & Kedarkantha Authorized</strong></div>
              <div>Wilderness First Aid: <strong>WFR Certified (Valid until Dec 2027)</strong></div>
              <div>Emergency Protocols: <strong>Oxygen cylinder & pulse oximeter verified</strong></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
