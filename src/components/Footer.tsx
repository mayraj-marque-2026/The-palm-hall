import React from 'react';
import { Palmtree, MapPin, Phone, MessageCircle, Clock, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#09261D] text-white pt-20 pb-10 border-t border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Logo, Info, Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#0F3D2E] rounded-full flex items-center justify-center">
                  <Palmtree className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white tracking-tight">The Palm Hall</span>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37]">University Rd, Peshawar</span>
              </div>
            </a>

            <p className="text-gray-300 text-sm leading-relaxed">
              {BUSINESS_INFO.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Operating Timings: <strong>{BUSINESS_INFO.timings}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#D4AF37]" />
                <span>Guest Capacity: <strong>{BUSINESS_INFO.capacity}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About The Palm Hall</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services & Amenities</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Venue Photo Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Guest Ratings & Reviews</a></li>
              <li><a href="#booking" className="hover:text-[#D4AF37] transition-colors">Book Hall on WhatsApp</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2 inline-block">
              Venue Location & Map
            </h4>

            <div className="space-y-2.5 text-xs text-gray-300 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:underline">{BUSINESS_INFO.phone}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>WhatsApp: <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">{BUSINESS_INFO.whatsapp}</a></span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-44 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-gray-900">
              <iframe
                title="The Palm Hall Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Located at {BUSINESS_INFO.address}</span>
            <span className="text-[#D4AF37]">★</span>
            <span>⭐ {BUSINESS_INFO.rating} Stars ({BUSINESS_INFO.reviewCount} Reviews)</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
