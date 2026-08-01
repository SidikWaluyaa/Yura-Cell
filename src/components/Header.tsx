import React, { useState } from 'react';
import { Heart, MessageCircle, Menu, X, Home, LayoutGrid, Package, Settings } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

interface HeaderProps {
  onOpenOrderModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('beranda');

  const navItems = [
    { id: 'beranda', label: 'BERANDA', icon: Home, href: '#beranda' },
    { id: 'layanan', label: 'LAYANAN', icon: LayoutGrid, href: '#layanan' },
    { id: 'paket', label: 'PAKET', icon: Package, href: '#paket' },
    { id: 'kontak', label: 'KONTAK', icon: Settings, href: '#kontak' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('Halo Admin Yura Cell, saya mau tanya/transaksi layanan digital.');
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-100/50 shadow-xs py-1.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Tagline */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <img 
              src="/images/Logo.png" 
              alt="Yura Cell Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-xl"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#E60067] transition-colors duration-300 uppercase">
                  YURA<span className="text-[#E60067] group-hover:text-slate-900 transition-colors">CELL</span>
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-wider mt-0.5 uppercase">
                Solusi Digital Anda
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className="flex flex-col items-center justify-center gap-1 group cursor-pointer py-1 px-2.5 rounded-xl hover:bg-pink-50/40 transition-colors duration-200"
                >
                  <Icon className={`w-5 h-5 transition-transform duration-250 group-hover:scale-110 ${isActive ? 'text-[#E60067]' : 'text-slate-400 group-hover:text-[#E60067]'}`} />
                  <div className="relative">
                    <span className={`text-[10px] sm:text-xs font-black tracking-wider transition-colors ${isActive ? 'text-[#E60067]' : 'text-slate-500 group-hover:text-[#E60067]'}`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#E60067] rounded-full" />
                    )}
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Right Action Button (WhatsApp CTA) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3.5 px-6 py-2.5 bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl shadow-md hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <div className="p-1 rounded-xl bg-white/15">
                <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
              </div>
              <div className="text-left leading-none">
                <div className="text-xs font-black tracking-wide text-white">Chat WhatsApp</div>
                <div className="text-[9px] text-emerald-100 font-bold mt-1 uppercase tracking-wider">Fast Response!</div>
              </div>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="p-2.5 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-xs"
              title="Chat WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-[#E60067] hover:bg-pink-50/50 rounded-xl transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 animate-in spin-in-90 duration-200" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-5 duration-200 shadow-xl absolute w-full left-0 right-0 border-b border-pink-100/50">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-extrabold text-left transition-all ${
                    isActive
                      ? 'bg-pink-50 text-[#E60067] border border-pink-100'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#E60067]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
