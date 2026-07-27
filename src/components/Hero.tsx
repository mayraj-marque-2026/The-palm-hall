import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Images, Star, Users, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import heroBgImage from '../assets/images/hero_hall_overview_1785153615544.jpg';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0F3D2E]">
      {/* Background Image with Parallax & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={heroBgImage}
          alt="The Palm Hall Grand Interior"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Luxury Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E] via-[#0F3D2E]/80 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,61,46,0.6)_100%)]" />

        {/* Abstract Luxury Background Rings from Design HTML */}
        <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] border-[1px] border-[#D4AF37] opacity-20 rounded-full pointer-events-none" />
        <div className="absolute right-[-50px] top-[-50px] w-[500px] h-[500px] border-[1px] border-[#D4AF37] opacity-10 rounded-full pointer-events-none" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Luxury Line Accent & Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.4em] uppercase font-bold">Est. Peshawar</span>
          <div className="h-[1px] w-12 bg-[#D4AF37]" />
        </motion.div>

        {/* Main Title - Bold Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none mb-4 drop-shadow-lg"
        >
          The Palm Hall
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#F3E5AB] font-light max-w-2xl mb-8 drop-shadow-md"
        >
          {BUSINESS_INFO.tagline}
        </motion.p>

        {/* Quick Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-200 mb-10 max-w-3xl"
        >
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
            <Users className="w-4 h-4 text-[#D4AF37]" />
            <span>Capacity {BUSINESS_INFO.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span>⭐ {BUSINESS_INFO.rating} Stars ({BUSINESS_INFO.reviewCount.toLocaleString()} Reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>University Rd, Tehkal</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none"
        >
          {/* Primary CTA */}
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] hover:bg-[#0F3D2E] text-white hover:text-[#D4AF37] border border-[#D4AF37] text-sm font-bold uppercase tracking-widest shadow-2xl transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Book on WhatsApp</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 text-sm font-bold uppercase tracking-widest transition-all duration-300"
          >
            <Images className="w-5 h-5 text-[#D4AF37]" />
            <span>View Gallery</span>
          </a>

          {/* Quick Inquiry Button */}
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-black/40 hover:bg-black/60 text-[#F3E5AB] border border-white/20 text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            <span>Inquire Dates</span>
          </button>
        </motion.div>
      </div>

      {/* Gold Stats Widget Badge from Design HTML */}
      <div className="hidden lg:flex absolute bottom-0 right-12 bg-[#D4AF37] p-6 text-white flex-col items-center shadow-2xl border-t-2 border-x-2 border-white/20 z-20">
        <span className="text-3xl font-serif font-bold text-[#0F3D2E]">{BUSINESS_INFO.rating}</span>
        <div className="flex gap-1 my-1 text-[#0F3D2E]">
          <Star className="w-3.5 h-3.5 fill-current" />
          <Star className="w-3.5 h-3.5 fill-current" />
          <Star className="w-3.5 h-3.5 fill-current" />
          <Star className="w-3.5 h-3.5 fill-current" />
          <Star className="w-3.5 h-3.5 fill-current opacity-60" />
        </div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#0F3D2E]/90 text-center leading-tight">
          {BUSINESS_INFO.reviewCount.toLocaleString()} Reviews<br />on Google
        </span>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-300 hover:text-[#D4AF37] transition-colors"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
      </motion.a>
    </section>
  );
};
