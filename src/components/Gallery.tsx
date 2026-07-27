import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/businessData';

interface GalleryProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hall Interior', 'Stage Setup', 'Dining & Catering', 'Entrance & Aisle', 'VIP Lounge', 'Exterior'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.5em] gold-text font-bold mb-3">
            Real Venue Showcase
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F3D2E] tracking-tight">
            The Palm Hall Gallery
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explore authentic photos of our hall decorations, grand bridal stages, dining setups, mirror aisle walkways, and VIP lounges at University Rd, Tehkal, Peshawar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <div className="flex items-center gap-1 text-xs text-gray-500 mr-2 hidden sm:flex">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0F3D2E] text-[#D4AF37] border border-[#D4AF37] shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-900 ${
                  idx % 3 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => onSelectItem(item)}
              >
                {/* Image */}
                <div className="w-full h-full min-h-[260px] sm:min-h-[320px] overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#0F3D2E]/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Lightbox Icon */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2.5 rounded-full bg-[#D4AF37] text-[#0F3D2E] shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#F3E5AB] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#D4AF37]">
                      <span>Click to enlarge photo</span>
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Subtle Gold Frame Highlight */}
                <div className="absolute inset-0 border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 rounded-2xl transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
