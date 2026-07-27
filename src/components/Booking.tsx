import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Users,
  Calendar,
  Sparkles,
  Send,
  Check,
  ChevronRight,
  ShieldCheck,
  Copy
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface BookingProps {
  onOpenInquiry: () => void;
}

export const Booking: React.FC<BookingProps> = ({ onOpenInquiry }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="booking" className="py-24 bg-[#0F3D2E] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] gold-text font-bold mb-3">
            Quick Booking & Reservation
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Book Your Special Event
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Reserve The Palm Hall for your wedding, engagement, Nikah, or corporate ceremony. Connect directly with our management team on WhatsApp or phone.
          </p>
        </div>

        {/* Main Booking Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Luxury Venue Contact Card */}
          <div className="lg:col-span-6 bg-[#09261D] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Official Contact Details</span>
              </div>
              
              <h3 className="font-serif text-3xl font-bold text-white mb-2">The Palm Hall</h3>
              <p className="text-xs text-gray-300 mb-8">{BUSINESS_INFO.description}</p>

              {/* Exact Business Details Rows */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0F3D2E] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Address</span>
                    <strong className="text-base text-white block mt-0.5">{BUSINESS_INFO.address}</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BUSINESS_INFO.address, 'address')}
                    className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                    title="Copy Address"
                  >
                    {copiedField === 'address' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0F3D2E] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Landline Phone</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-base font-bold text-white hover:text-[#D4AF37] transition-colors block mt-0.5">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BUSINESS_INFO.phone, 'phone')}
                    className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0F3D2E] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37] shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">WhatsApp Direct</span>
                    <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#D4AF37] hover:underline block mt-0.5">
                      {BUSINESS_INFO.whatsapp}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BUSINESS_INFO.whatsapp, 'whatsapp')}
                    className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                    title="Copy WhatsApp"
                  >
                    {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0F3D2E] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Venue Timings</span>
                    <strong className="text-base text-white block mt-0.5">{BUSINESS_INFO.timings}</strong>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#D4AF37] text-[#0F3D2E] font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Chat on WhatsApp ({BUSINESS_INFO.whatsapp})</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Right Side: Fast Online Event Date & Guest Capacity Form */}
          <div className="lg:col-span-6 bg-white text-[#1A1A1A] rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#0F3D2E]/10 text-[#0F3D2E] border border-[#D4AF37]/40 text-xs font-semibold rounded-full uppercase tracking-wider">
                  Direct Hall Booking
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-green-600" /> Instant Response
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#0F3D2E] mb-2">Plan Your Event</h3>
              <p className="text-xs text-gray-600 mb-6">Fill in your preferred event details to generate a formatted WhatsApp message to hall manager.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onOpenInquiry();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Guest Capacity</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors">
                      <option>Up to 300 Guests</option>
                      <option>300 - 500 Guests</option>
                      <option>500 - 800 Guests (Full Hall)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Target Event Date</label>
                    <input
                      type="date"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Special Venue Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Stage flower decoration, catering menu preference, parking arrangements..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#0F3D2E] hover:bg-[#09261D] text-white font-bold text-sm rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>Launch Interactive WhatsApp Inquiry</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                Located at <strong>University Rd, Tehkal, Peshawar</strong> with spacious parking & cooperative staff.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
