import React, { useState } from 'react';
import { X, Star, ShieldCheck, Check } from 'lucide-react';
import { Tour, Review } from '../types';

interface ReviewModalProps {
  tour: Tour;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  tour,
  onClose,
  onSubmitReview,
}) => {
  const [overallRating, setOverallRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [guideKnowledge, setGuideKnowledge] = useState<number>(5);
  const [safety, setSafety] = useState<number>(5);
  const [valueForMoney, setValueForMoney] = useState<number>(5);
  const [punctuality, setPunctuality] = useState<number>(5);
  const [travelerType, setTravelerType] = useState<Review['travelerType']>('Solo Trekker');
  const [authorName, setAuthorName] = useState<string>('Arka Sarkar');
  const [authorCity, setAuthorCity] = useState<string>('Kolkata, West Bengal');
  const [title, setTitle] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-in-${Date.now()}`,
      tourId: tour.id,
      guideId: tour.guideId,
      authorName,
      authorCity,
      date: new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' }),
      overallRating,
      guideKnowledge,
      safety,
      valueForMoney,
      punctuality,
      travelerType,
      title: title.trim(),
      comment: comment.trim(),
      verifiedBooking: true,
      helpfulVotes: 1
    };

    onSubmitReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-5 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-amber-900 uppercase tracking-wider font-bold">
              Verified Trekker Review
            </span>
            <h3 className="font-display font-bold text-stone-900 text-base">
              Review: {tour.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-stone-900">
              Review Published!
            </h4>
            <p className="text-xs text-stone-500">
              Thank you for supporting verified Indian mountain leaders and helping fellow trekkers choose authentic trails.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Overall Rating Stars */}
            <div className="text-center pb-4 border-b border-stone-100">
              <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                Overall Trek / Tour Rating
              </label>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setOverallRating(star)}
                    className="p-1 transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Star 
                      className={`w-7 h-7 ${
                        star <= (hoverRating || overallRating)
                          ? 'fill-amber-400 text-amber-400' 
                          : 'text-stone-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-amber-900 mt-1 block">
                {overallRating} of 5 Stars
              </span>
            </div>

            {/* Granular Sub-scores */}
            <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-2xl border border-amber-900/10 text-xs">
              <h5 className="font-bold text-stone-800 uppercase tracking-wider text-[11px]">
                Detailed Mountain & Guide Criteria
              </h5>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-stone-700 mb-1">
                    <span>Leader Knowledge</span>
                    <span className="font-mono font-bold text-amber-900">{guideKnowledge}/5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={guideKnowledge}
                    onChange={(e) => setGuideKnowledge(Number(e.target.value))}
                    className="w-full accent-amber-700 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-stone-700 mb-1">
                    <span>Mountain Safety & Medical</span>
                    <span className="font-mono font-bold text-amber-900">{safety}/5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={safety}
                    onChange={(e) => setSafety(Number(e.target.value))}
                    className="w-full accent-amber-700 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-stone-700 mb-1">
                    <span>Value for Money</span>
                    <span className="font-mono font-bold text-amber-900">{valueForMoney}/5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={valueForMoney}
                    onChange={(e) => setValueForMoney(Number(e.target.value))}
                    className="w-full accent-amber-700 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-stone-700 mb-1">
                    <span>Food, Tents & Hospitality</span>
                    <span className="font-mono font-bold text-amber-900">{punctuality}/5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={punctuality}
                    onChange={(e) => setPunctuality(Number(e.target.value))}
                    className="w-full accent-amber-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Traveler Style */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Traveler Group Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {(['Solo Trekker', 'College Friends', 'Couple', 'Family with Kids', 'Adventure Club'] as const).map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTravelerType(type)}
                    className={`py-1.5 px-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                      travelerType === type
                        ? 'bg-amber-700 text-white border-amber-700 font-bold'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Author info */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-medium text-stone-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block font-medium text-stone-700 mb-1">City / State</label>
                <input
                  type="text"
                  required
                  value={authorCity}
                  onChange={(e) => setAuthorCity(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl"
                />
              </div>
            </div>

            {/* Review Title */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Headline / One-line summary
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Swargarohini sunrise at -8°C was unforgettable!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900"
              />
            </div>

            {/* Detailed Review */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Detailed Feedback
              </label>
              <textarea
                rows={4}
                required
                placeholder="How was your leader's mountain guidance? How was the food at high-altitude camps?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-amber-200" />
              <span>Submit Verified Trekker Review</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
