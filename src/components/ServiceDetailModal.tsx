import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Calendar,
  DollarSign,
  Users,
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { ServiceItem, BUSINESS_INFO } from '../data/businessData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenInquiry: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenInquiry,
}) => {
  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in booking or inquiring about "${service.title}" at The Palm Hall. Please share current rates and availability.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#D4AF37]/30 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          {/* Top Sticky Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0F3D2E] text-white border-b border-[#D4AF37]/30 shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Service Details & Packages
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0F3D2E] transition-colors text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Banner Image & Hero Badge */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl group border border-gray-200">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E] via-[#0F3D2E]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#0F3D2E] text-[10px] font-extrabold rounded-full uppercase tracking-widest mb-2 shadow-md">
                  Premier Venue Offering
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-[#F8F8F8] rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Service Overview
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                {service.detailedDescription}
              </p>
            </div>

            {/* Key Service Highlights & Features */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#0F3D2E] mb-4">
                What's Included & Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Packages & Pricing Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3D2E]">
                    Available Packages & Options
                  </h3>
                  <p className="text-xs text-gray-500">Tiered packages tailored to your event guest capacity.</p>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 bg-[#0F3D2E]/10 text-[#0F3D2E] border border-[#D4AF37]/30 text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Up to 800 Guests
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-gray-200 shadow-md hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-serif text-base font-bold text-[#0F3D2E] group-hover:text-[#D4AF37] transition-colors">
                          {pkg.name}
                        </h4>
                      </div>
                      <span className="inline-block px-2.5 py-1 bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 text-[#0F3D2E] text-[10px] font-bold rounded-md mb-4 uppercase tracking-wider">
                        <Users className="w-3 h-3 inline-block mr-1 -mt-0.5" />
                        {pkg.guestCount}
                      </span>

                      <ul className="space-y-2 mb-4">
                        {pkg.includes.map((inc, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                        {pkg.pricingNote}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Note Callout */}
            <div className="p-4 rounded-xl bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 text-xs text-gray-600 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span><strong>Pricing Guarantee:</strong> {service.pricingNote}</span>
              </div>
              <span className="text-[10px] text-gray-400 shrink-0 font-medium hidden sm:inline">Transparent Rates</span>
            </div>

          </div>

          {/* Bottom Action Footer Bar */}
          <div className="p-6 bg-[#09261D] text-white border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="text-center sm:text-left">
              <span className="text-xs text-gray-300 block">Ready to reserve or customize?</span>
              <strong className="text-sm text-[#F3E5AB]">The Palm Hall Management Team (Peshawar)</strong>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={`${BUSINESS_INFO.whatsappLink}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-3 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry(service.title);
                }}
                className="flex-1 sm:flex-none px-6 py-3 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0F3D2E] font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book This Service</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
