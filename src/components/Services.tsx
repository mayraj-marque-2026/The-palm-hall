import React from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Utensils,
  Calendar,
  Briefcase,
  BookOpen,
  Flower2,
  Lightbulb,
  UserCheck,
  DollarSign,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Layers
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO, ServiceItem } from '../data/businessData';

interface ServicesProps {
  onOpenInquiry: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry, onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" };
    switch (iconName) {
      case 'Heart': return <Heart {...iconProps} />;
      case 'Utensils': return <Utensils {...iconProps} />;
      case 'Calendar': return <Calendar {...iconProps} />;
      case 'Briefcase': return <Briefcase {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'Flower2': return <Flower2 {...iconProps} />;
      case 'Lightbulb': return <Lightbulb {...iconProps} />;
      case 'UserCheck': return <UserCheck {...iconProps} />;
      case 'DollarSign': return <DollarSign {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0F3D2E] text-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] gold-text font-bold mb-3">
            World-Class Amenities
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Services & Event Planning
          </h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Click on any service below to explore detailed descriptions, custom package tiers, included features, and pricing guidelines for events at The Palm Hall.
          </p>
        </div>

        {/* Services Grid (9 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-[#09261D]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-3xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between group relative"
            >
              {/* Card Image Banner */}
              <div
                onClick={() => onSelectService(service)}
                className="relative h-48 overflow-hidden cursor-pointer"
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09261D] via-[#09261D]/40 to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-[#0F3D2E]/90 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center shadow-lg group-hover:bg-[#D4AF37]/20 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Package Counter Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-[#D4AF37] flex items-center gap-1.5 uppercase tracking-wider">
                  <Layers className="w-3 h-3" />
                  <span>{service.packages.length} Packages</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3
                    onClick={() => onSelectService(service)}
                    className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#F3E5AB] transition-colors cursor-pointer"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Action Link & Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-4 bg-[#0F3D2E] hover:bg-[#D4AF37] text-white hover:text-[#0F3D2E] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>View Packages</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent(`Hello, I would like to inquire about ${service.title} at The Palm Hall.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[#25D366] text-[#D4AF37] hover:text-white transition-colors border border-white/10"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                    title="Inquire on WhatsApp"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#D4AF37]/20 via-[#09261D] to-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-3xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left max-w-xl">
            <h4 className="font-serif text-2xl font-bold text-[#F3E5AB]">Custom Event Package Required?</h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Contact our cooperative management staff to build a tailored package for your guest list and decor choices.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry()}
            className="shrink-0 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0F3D2E] font-bold text-sm rounded-full shadow-lg transition-all hover:scale-105"
          >
            Customize Event Package
          </button>
        </div>

      </div>
    </section>
  );
};

