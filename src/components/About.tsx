import React from 'react';
import { motion } from 'motion/react';
import { Users, MapPin, Sparkles, Heart, Car, UserCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, HIGHLIGHT_CARDS } from '../data/businessData';
import aboutImage from '../assets/images/wedding_stage_grand_1785153644051.jpg';
import entranceImage from '../assets/images/exterior_entrance_sign_1785153704708.jpg';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-[#D4AF37]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Heart': return <Heart className="w-6 h-6 text-[#D4AF37]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#D4AF37]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#D4AF37]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-[#F8F8F8] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] gold-text font-bold mb-3">
            The Venue Experience
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F3D2E] tracking-tight">
            The Palm Hall
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={aboutImage}
                alt="The Palm Hall Royal Stage"
                className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Exquisite Ambience</span>
                <p className="font-serif text-xl font-bold">Royal Bridal Stage & Grand Drapery</p>
              </div>
            </div>

            {/* Inset Secondary Image Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-48 sm:w-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={entranceImage}
                alt="The Palm Hall Exterior Sign"
                className="w-full h-36 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-[#0F3D2E] text-white p-2.5 text-center text-xs font-serif">
                Main Entrance • University Rd
              </div>
            </div>

            {/* Decorative Gold Accent Backdrop Box */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#D4AF37]/30 rounded-3xl -z-10" />
          </div>

          {/* Right Side: Description Text & Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full -z-0" />
              
              <h3 className="font-serif text-2xl text-[#0F3D2E] font-bold mb-4 relative z-10">
                Peshawar's Premier Event Address
              </h3>

              {/* EXACT BUSINESS DESCRIPTION TEXT */}
              <p className="text-gray-700 text-lg leading-relaxed font-normal relative z-10">
                {BUSINESS_INFO.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4 text-xs text-gray-500 font-medium">
                <div>Address: <strong className="text-[#0F3D2E]">{BUSINESS_INFO.address}</strong></div>
                <div>Capacity: <strong className="text-[#0F3D2E]">{BUSINESS_INFO.capacity}</strong></div>
              </div>
            </div>

            {/* Highlight Cards Grid */}
            <div>
              <h4 className="font-serif text-lg font-bold text-[#0F3D2E] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" /> Key Venue Highlights
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {HIGHLIGHT_CARDS.map((card) => (
                  <motion.div
                    key={card.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white p-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-3 group-hover:bg-[#0F3D2E] group-hover:text-white transition-colors duration-300">
                      {getIcon(card.iconName)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact CTA Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#0F3D2E] hover:bg-[#09261D] text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={onOpenInquiry}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0F3D2E] font-bold text-sm rounded-xl shadow-md transition-all duration-300"
              >
                <span>Check Availability</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
