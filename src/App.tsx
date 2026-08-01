import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LayananKamiGrid } from './components/LayananKamiGrid';
import { DualCategoryShowcase } from './components/DualCategoryShowcase';
import { KenapaPilihYura } from './components/KenapaPilihYura';
import { Footer } from './components/Footer';
import { QuickOrderModal } from './components/QuickOrderModal';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenOrder = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 bg-dot-grid font-sans text-slate-800 selection:bg-pink-500 selection:text-white relative">
      {/* Premium Noise Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none bg-texture-noise opacity-[0.015]" />

      {/* Header */}
      <Header
        onOpenOrderModal={() => handleOpenOrder()}
      />

      {/* Main Content */}
      <main>
        {/* Hero Area */}
        <HeroSection onOpenOrderModal={() => handleOpenOrder()} />

        {/* Layanan Kami Grid (10 Main Cards) */}
        <LayananKamiGrid onSelectService={(id) => handleOpenOrder(id)} />

        {/* Dual Category Showcase (Prabayar & Keuangan) */}
        <DualCategoryShowcase onSelectService={(id) => handleOpenOrder(id)} />

        {/* Kenapa Pilih Yura Cell */}
        <KenapaPilihYura />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Order Calculator Modal */}
      <QuickOrderModal
        isOpen={orderModalOpen}
        initialServiceId={selectedServiceId}
        onClose={() => setOrderModalOpen(false)}
      />
    </div>
  );
}
