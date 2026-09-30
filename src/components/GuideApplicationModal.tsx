import React, { useState } from 'react';
import { X, ShieldCheck, Check, Award, UserCheck, Mountain } from 'lucide-react';
import { TourScope } from '../types';

interface GuideApplicationModalProps {
  onClose: () => void;
}

export const GuideApplicationModal: React.FC<GuideApplicationModalProps> = ({
  onClose,
}) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [baseState, setBaseState] = useState<string>('Uttarakhand');
  const [institution, setInstitution] = useState<string>('NIM Uttarkashi');
  const [experienceYears, setExperienceYears] = useState<number>(6);
  const [scope, setScope] = useState<TourScope>('trek');
  const [licenseNumber, setLicenseNumber] = useState<string>('');
  const [proposedTourTitle, setProposedTourTitle] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const appCode = `ARKA-LEADER-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedCode(appCode);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-700" />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
                Arka Travels Mountain Leader Accreditation
              </span>
              <h3 className="font-display font-bold text-stone-900 text-base">
                Join India's Most Respected Mountain & Heritage Network
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 md:p-8">
          {submittedCode ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-display text-2xl font-bold text-stone-900">
                Application Received for Verification!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Your dossier has been registered with reference code:
              </p>
              <div className="inline-block font-mono text-xl font-bold text-amber-900 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200">
                {submittedCode}
              </div>
              <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                Our mountain safety desk in <strong>Rishikesh & Manali</strong> will audit your NIM/HMI certificates and connect with you on WhatsApp within 24 hours.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Close Application Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Trust Box */}
              <div className="bg-[#FAF8F5] border border-amber-900/10 rounded-2xl p-4 text-xs text-stone-700 space-y-2">
                <h5 className="font-bold text-amber-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Why trek leaders choose Arka Travels:
                </h5>
                <ul className="space-y-1 text-stone-600 list-disc list-inside">
                  <li><strong>90% Direct Payouts:</strong> Transparent UPI & Escrow settlement 24h post-trek.</li>
                  <li><strong>Comprehensive Himalayan Rescue Shield:</strong> Medical helicopter evacuation cover.</li>
                  <li><strong>Verified Trekkers Only:</strong> Complete Aadhaar & phone verified bookings.</li>
                </ul>
              </div>

              {/* Personal Details */}
              <div>
                <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                  1. Mountain Leader Credentials
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Devendra Singh Rawat"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="leader@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Mobile WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Base State & Region</label>
                    <select
                      value={baseState}
                      onChange={(e) => setBaseState(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl font-medium"
                    >
                      <option value="Uttarakhand">Uttarakhand (Garhwal & Kumaon)</option>
                      <option value="Himachal Pradesh">Himachal Pradesh (Manali & Spiti)</option>
                      <option value="Ladakh">Ladakh (Leh & Zanskar)</option>
                      <option value="West Bengal / Sikkim">West Bengal & Sikkim (Darjeeling / Kanchenjunga)</option>
                      <option value="Rajasthan">Rajasthan (Thar Desert)</option>
                      <option value="Kerala">Kerala (Western Ghats)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Institute & Certification */}
              <div>
                <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                  2. Mountaineering Institute Accreditation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Mountaineering Institution</label>
                    <select
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl font-medium"
                    >
                      <option value="NIM Uttarkashi">Nehru Institute of Mountaineering (NIM Uttarkashi)</option>
                      <option value="HMI Darjeeling">Himalayan Mountaineering Institute (HMI Darjeeling)</option>
                      <option value="ABVIMAS Manali">Atal Bihari Institute of Mountaineering (ABVIMAS)</option>
                      <option value="JIM&WS Pahalgam">Jawahar Institute of Mountaineering (JIM&WS)</option>
                      <option value="Govt. of India RLG">Ministry of Tourism Govt. of India (RLG License)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Certificate / License #</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. NIM-AMC-2016-0428"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Years of High-Altitude Experience</label>
                    <input
                      type="number"
                      min="1"
                      max="35"
                      required
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Specialty Expedition Scope</label>
                    <select
                      value={scope}
                      onChange={(e) => setScope(e.target.value as TourScope)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl font-medium"
                    >
                      <option value="trek">🏔️ High Altitude Trek (Winter & Summer)</option>
                      <option value="national">🏰 Domestic Regional Circuit</option>
                      <option value="local">🪔 Local Heritage & Street Food Walk</option>
                      <option value="international">🌏 Cross-Border Himalayan (Nepal / Bhutan)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Proposed Trek */}
              <div>
                <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                  3. Trail Philosophy & Proposed Route
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Proposed Trek / Tour Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Har Ki Dun Ancient Wooden Village Trail (11,700 ft)"
                      value={proposedTourTitle}
                      onChange={(e) => setProposedTourTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Mountain Bio & Safety Philosophy</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="What is your approach to mountain acclimatization and respecting local Himalayan communities?"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Auditing Dossier...</span>
                ) : (
                  <>
                    <UserCheck className="w-4 h-4 text-amber-300" />
                    <span>Submit Leader Verification Application</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
