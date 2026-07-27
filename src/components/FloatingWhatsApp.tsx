import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Label */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#0F3D2E] text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-semibold rounded-full shadow-2xl"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>Chat with Management</span>
      </motion.div>

      {/* Pulsing Floating Button */}
      <motion.a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-[#D4AF37] shadow-emerald-900/50"
        aria-label="Chat on WhatsApp"
      >
        {/* Animated Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping group-hover:animate-none pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </motion.a>
    </div>
  );
};
