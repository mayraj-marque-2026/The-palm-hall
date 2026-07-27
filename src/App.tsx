import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GalleryItem, GALLERY_ITEMS, ServiceItem } from './data/businessData';

export default function App() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    setInquiryModalOpen(true);
  };

  const handlePrevImage = () => {
    if (!selectedGalleryItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedGalleryItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedGalleryItem(GALLERY_ITEMS[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedGalleryItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedGalleryItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedGalleryItem(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-[#0F3D2E] relative">
      {/* Header Navigation */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenInquiry={() => handleOpenInquiry()} />
        <About onOpenInquiry={() => handleOpenInquiry()} />
        <Services
          onOpenInquiry={(svc) => handleOpenInquiry(svc)}
          onSelectService={(service) => setSelectedService(service)}
        />
        <Gallery onSelectItem={(item) => setSelectedGalleryItem(item)} />
        <Reviews />
        <Booking onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Dedicated Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenInquiry={(svc) => handleOpenInquiry(svc)}
      />

      {/* Lightbox Modal for Gallery Images */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* Direct WhatsApp Quick Inquiry Modal */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}

