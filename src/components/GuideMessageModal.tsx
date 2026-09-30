import React, { useState } from 'react';
import { X, Send, ShieldCheck } from 'lucide-react';
import { Guide, GuideMessage } from '../types';

interface GuideMessageModalProps {
  guide: Guide;
  onClose: () => void;
}

export const GuideMessageModal: React.FC<GuideMessageModalProps> = ({
  guide,
  onClose,
}) => {
  const [messages, setMessages] = useState<GuideMessage[]>([
    {
      id: 'm-1',
      guideId: guide.id,
      sender: 'guide',
      text: `Namaste! I am ${guide.name}, your verified mountain leader from ${guide.location}, ${guide.state}. Are you planning for our upcoming trek batch or heritage walk? Feel free to ask about fitness preparation, high-altitude snow gear, or vegetarian meal arrangements!`,
      timestamp: 'Today at 09:30 AM'
    }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: GuideMessage = {
      id: `m-${Date.now()}`,
      guideId: guide.id,
      sender: 'user',
      text: inputValue.trim(),
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = `Thanks for asking! As your trek leader, your safety and mountain experience come first. Our Arka Travels base camp team coordinates everything from Dehradun/Manali. You can reserve your batch spot right away with UPI!`;

      const lower = userMsg.text.toLowerCase();
      if (lower.includes('fitness') || lower.includes('prepare') || lower.includes('running') || lower.includes('gym')) {
        replyText = `For this trail, jogging 4-5 km in 30 minutes 3 times a week is ideal. Start doing brisk walks, stair climbing, and deep pranayama breathing. Our NIM guides keep a steady rhythmic pace on the trail so everyone summits comfortably!`;
      } else if (lower.includes('veg') || lower.includes('jain') || lower.includes('food') || lower.includes('diet')) {
        replyText = `All our camp meals are 100% pure vegetarian, freshly cooked at high altitude with ginger-garlic soup, hot khichdi, dal-chawal, and sweet halwa. Jain meals without onion/garlic are gladly prepared upon prior request!`;
      } else if (lower.includes('snow') || lower.includes('shoes') || lower.includes('jacket') || lower.includes('gear')) {
        replyText = `We provide certified microspikes and snow gaiters at the base camp. You only need good water-resistant trekking boots with ankle support, thermals, and fleece layers. Down jackets are also available for easy base camp rental.`;
      } else if (lower.includes('ams') || lower.includes('altitude') || lower.includes('oxygen')) {
        replyText = `Safety is paramount. Every Arka Travels leader carries portable medical oxygen cylinders, a comprehensive high-altitude trauma kit, and we do morning/evening SpO2 oximeter checks on every trekker.`;
      }

      const guideReply: GuideMessage = {
        id: `m-${Date.now() + 1}`,
        guideId: guide.id,
        sender: 'guide',
        text: replyText,
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, guideReply]);
      setIsTyping(false);
    }, 1300);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto flex flex-col h-[560px]"
        role="dialog"
        aria-modal="true"
      >
        {/* Chat Header */}
        <div className="p-4 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${guide.avatarColor} text-white font-mono text-sm font-bold flex items-center justify-center shrink-0`}>
              {guide.avatarInitials}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-display font-bold text-stone-900 text-sm">
                  {guide.name}
                </h4>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <p className="text-[11px] text-amber-900 font-semibold font-mono">
                {guide.badgeTier} · {guide.location}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FCFAF6]">
          <div className="text-center my-2">
            <span className="text-[10px] text-amber-900 uppercase tracking-widest font-mono bg-amber-100/70 px-2.5 py-0.5 rounded-md font-bold">
              Arka Travels Direct Mountain Leader Chat
            </span>
          </div>

          {messages.map(msg => (
            <div 
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[82%] rounded-2xl p-3 text-xs leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-amber-700 text-white rounded-br-xs' 
                    : 'bg-white text-stone-800 border border-stone-200 shadow-xs rounded-bl-xs'
                }`}
              >
                <p>{msg.text}</p>
                <span className={`text-[10px] mt-1 block text-right ${msg.sender === 'user' ? 'text-amber-200' : 'text-stone-400'}`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-stone-200 rounded-2xl px-3 py-2 text-xs text-stone-500 flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] font-mono ml-1">{guide.name} is typing...</span>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Ask ${guide.name} about snow gear, fitness, or diet...`}
            className="flex-1 px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-2.5 bg-amber-700 hover:bg-amber-800 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-xl transition-all cursor-pointer"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
