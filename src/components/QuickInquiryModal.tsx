import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Sparkles, Phone, Send, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [eventType, setEventType] = useState('Wedding Ceremony');
  const [guestCount, setGuestCount] = useState('500');
  const [eventDate, setEventDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello The Palm Hall team,\n\nI would like to inquire about booking your venue:\n• Event Type: ${eventType}\n• Expected Guests: ${guestCount}\n• Preferred Date: ${eventDate || 'Flexible'}\n• Notes: ${additionalNotes || 'N/A'}\n\nPlease share hall availability and package details. Thank you!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/923009032122?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative max-w-lg w-full bg-[#0F3D2E] border border-[#D4AF37]/40 rounded-3xl p-6 md:p-8 text-white shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Gold Header Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-[#D4AF37] p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close form"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Fast Inquiry
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">Book The Palm Hall</h3>
            <p className="text-xs text-gray-300 mt-1">Direct message via WhatsApp with instant detail pre-fill</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-200 mb-1">Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-[#09261D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                <option value="Wedding & Barat Ceremony">Wedding & Barat Ceremony</option>
                <option value="Walima Reception">Walima Reception</option>
                <option value="Engagement / Ring Ceremony">Engagement / Ring Ceremony</option>
                <option value="Mehndi / Sangeet Night">Mehndi / Sangeet Night</option>
                <option value="Religious Nikah Ceremony">Religious Nikah Ceremony</option>
                <option value="Anniversary Celebration">Anniversary Celebration</option>
                <option value="Corporate Event / Conference">Corporate Event / Conference</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Expected Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-[#09261D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="Up to 200 Guests">Up to 200 Guests</option>
                  <option value="200 - 400 Guests">200 - 400 Guests</option>
                  <option value="400 - 600 Guests">400 - 600 Guests</option>
                  <option value="600 - 800 Guests">600 - 800 Guests (Full Capacity)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#09261D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-200 mb-1">Additional Requirements / Catering Notes</label>
              <textarea
                rows={2}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="E.g., Catering preferences, stage decoration customization, parking details..."
                className="w-full bg-[#09261D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              />
            </div>

            <div className="bg-[#09261D]/80 rounded-xl p-3 border border-white/10 text-xs text-gray-300 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Venue Capacity: <strong>{BUSINESS_INFO.capacity}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Timings: <strong>{BUSINESS_INFO.timings}</strong></span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:from-[#F3E5AB] hover:to-[#D4AF37] text-[#0F3D2E] font-bold text-base rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span>Send Inquiry via WhatsApp</span>
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-xs text-gray-400">Or Call Direct: </span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xs text-[#D4AF37] font-semibold hover:underline inline-flex items-center gap-1">
              <Phone className="w-3 h-3" /> {BUSINESS_INFO.phone}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
