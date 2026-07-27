import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, CheckCircle, ThumbsUp, ShieldCheck } from 'lucide-react';
import { SAMPLE_REVIEWS, BUSINESS_INFO } from '../data/businessData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#F8F8F8] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] gold-text font-bold mb-3">
            Guest Testimonials
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F3D2E] tracking-tight">
            Guest Ratings & Reviews
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6 rounded-full" />
        </div>

        {/* Rating Overview Header Banner */}
        <div className="bg-[#0F3D2E] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl border border-[#D4AF37]/30 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0" />

          {/* Score Side */}
          <div className="flex items-center gap-6 z-10">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#09261D] border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-inner shrink-0">
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#D4AF37]">{BUSINESS_INFO.rating}</span>
              <span className="text-[10px] text-gray-300 font-medium uppercase tracking-wider mt-0.5">out of 5.0</span>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(BUSINESS_INFO.rating) ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-[#D4AF37]/50 fill-[#D4AF37]/30'}`}
                  />
                ))}
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Renowned Experience in Peshawar</h3>
              <p className="text-gray-300 text-sm mt-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Based on <strong className="text-[#D4AF37]">{BUSINESS_INFO.reviewCount.toLocaleString()} Verified Guest Reviews</strong>
              </p>
            </div>
          </div>

          {/* Highlight badges */}
          <div className="flex flex-wrap gap-3 z-10 justify-center lg:justify-end">
            <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-[#D4AF37]/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Cooperative Staff</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-[#D4AF37]/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-[#D4AF37]" />
              <span>Good Parking Space</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-[#D4AF37]/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>Spacious Halls (Up to 800)</span>
            </div>
          </div>
        </div>

        {/* Sample Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <MessageSquareQuote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm italic leading-relaxed mb-6 font-medium">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#0F3D2E]">{rev.author}</h4>
                  <span className="text-xs text-gray-400">{rev.date}</span>
                </div>
                <span className="px-2.5 py-1 bg-[#0F3D2E]/5 text-[#0F3D2E] text-[10px] font-semibold rounded-md border border-[#0F3D2E]/10 uppercase">
                  Verified Event
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
