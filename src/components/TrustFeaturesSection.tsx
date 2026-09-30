import React from 'react';
import { ShieldCheck, Lock, Star, HeartHandshake, CheckCircle2, Mountain, Sun } from 'lucide-react';

export const TrustFeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-amber-900/10 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
            <Sun className="w-4 h-4 text-amber-600" />
            <span>The Arka Travels Mountain & Heritage Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            India's most trusted domestic trekking & cultural travel platform.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            We built Arka Travels to eliminate predatory unverified tour operators and dangerous uncertified trek groups. Every journey is grounded in four bedrock assurances:
          </p>
        </div>

        {/* 4 Pillars Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-mono text-xs font-bold text-amber-900 block mb-3">
                01. Certified Mountain Leadership
              </span>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-2">
                NIM & IMF Accredited Leaders
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every Himalayan trek leader must hold certification from India's premier mountaineering institutes (NIM, HMI, ABVIMAS) and carry wilderness first responder medical kits.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>NIM / IMF Verified Leaders</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-mono text-xs font-bold text-amber-900 block mb-3">
                02. Safe UPI Escrow Protection
              </span>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-2">
                Funds Released Post-Trek
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Pay seamlessly with Google Pay, PhonePe, or Cards. Your funds are locked safely in escrow and only released to the local leader 24 hours after your trek completes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
              <Lock className="w-4 h-4 text-emerald-700" />
              <span>100% UPI Escrow Guarantee</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-mono text-xs font-bold text-amber-900 block mb-3">
                03. Genuine Verified Reviews
              </span>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-2">
                E-Ticket Verified Feedback
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Only travelers who actually attended the batch and verified their permit QR code can leave reviews. Zero bot accounts, zero fake promotional ratings.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-amber-900 font-bold">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>100% Genuine Trekker Reviews</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-mono text-xs font-bold text-amber-900 block mb-3">
                04. Himalayan Eco-Pledge
              </span>
              <h3 className="font-display text-lg font-bold text-stone-900 mb-2">
                Leave No Trace & Local Prosperity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We strictly adhere to zero single-use plastic on trails, carry all non-biodegradable waste down, and distribute 90% of revenue directly to local Garhwali & Himachali families.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-900 font-bold">
              <HeartHandshake className="w-4 h-4 text-stone-700" />
              <span>Local Village Prosperity</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
