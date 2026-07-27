import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin } from 'lucide-react';
import { GalleryItem, BUSINESS_INFO } from '../data/businessData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        <div
          className="relative max-w-5xl w-full bg-[#0F3D2E] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#D4AF37] hover:text-[#0F3D2E] text-white p-2.5 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#D4AF37] hover:text-[#0F3D2E] text-white p-3 rounded-full transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 md:right-[360px] top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#D4AF37] hover:text-[#0F3D2E] text-white p-3 rounded-full transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image View */}
          <div className="flex-1 bg-black/60 flex items-center justify-center min-h-[320px] max-h-[70vh] md:max-h-[85vh] overflow-hidden p-2">
            <motion.img
              key={item.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={item.imageUrl}
              alt={item.title}
              className="max-h-full max-w-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sidebar / Image Details */}
          <div className="w-full md:w-[340px] p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#D4AF37]/20 bg-[#0F3D2E]">
            <div>
              <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold rounded-full border border-[#D4AF37]/30 uppercase tracking-wider mb-3">
                {item.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#D4AF37] mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{item.description}</p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-semibold">Capacity:</span>
                  <span>{BUSINESS_INFO.capacity}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0F3D2E] font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Inquire Venue for Event</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
