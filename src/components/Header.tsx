import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, Palmtree, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement / Quick Contact Strip */}
      <div className="bg-[#09261D] text-gray-200 text-xs py-2 px-4 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {BUSINESS_INFO.address}
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              {BUSINESS_INFO.timings}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#D4AF37] hover:text-[#F3E5AB] font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F3D2E]/90 backdrop-blur-md shadow-xl py-3 border-b border-[#D4AF37]/30'
            : 'bg-[#0F3D2E] py-4 border-b border-[#D4AF37]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0F3D2E] rounded-full flex items-center justify-center">
                <Palmtree className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                The Palm Hall
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] -mt-0.5">
                Premier Venue
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-[#D4AF37]/40 text-xs font-semibold rounded-full transition-all duration-300"
            >
              Quick Inquiry
            </button>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#D4AF37] text-[#0F3D2E] font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 bg-[#D4AF37] text-[#0F3D2E] rounded-full"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D4AF37] rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden sticky top-[68px] z-30 bg-[#0F3D2E] border-b border-[#D4AF37]/30 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-serif text-gray-200 hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white border border-[#D4AF37]/40 text-sm font-semibold rounded-xl transition-all"
                >
                  Quick Inquiry Form
                </button>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D4AF37] text-[#0F3D2E] font-bold text-sm rounded-xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Book on WhatsApp ({BUSINESS_INFO.whatsapp})</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
