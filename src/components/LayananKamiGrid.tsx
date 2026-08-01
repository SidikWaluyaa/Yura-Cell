import React from 'react';
import { MAIN_SERVICES } from '../data/servicesData';
import { IconRenderer } from './IconRenderer';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LayananKamiGridProps {
  onSelectService: (serviceId: string) => void;
}

export const LayananKamiGrid: React.FC<LayananKamiGridProps> = ({ onSelectService }) => {
  return (
    <section id="layanan" className="py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#E60067] font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kategori Utama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <span>LAYANAN KAMI</span>
          </h2>
          <p className="text-slate-500 font-semibold text-sm sm:text-base mt-1">
            Lengkap untuk semua kebutuhan harianmu!
          </p>
        </div>

        {/* 10 Services Grid (5 columns on desktop, 2-3 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {MAIN_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService(item.id)}
              className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-4 border border-pink-100/80 hover:border-pink-300 shadow-xs hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 cursor-pointer flex flex-col items-center text-center transform hover:-translate-y-1"
            >
              {/* Badge if exists */}
              {item.badge && (
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#E60067] text-white font-black text-[9px] uppercase tracking-wider shadow-2xs">
                  {item.badge}
                </div>
              )}

              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-100 to-pink-50 text-[#E60067] group-hover:bg-gradient-to-tr group-hover:from-[#E60067] group-hover:to-pink-500 group-hover:text-white flex items-center justify-center mb-3 transition-colors duration-300 shadow-inner">
                <IconRenderer name={item.icon} className="w-7 h-7" />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#E60067] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-[11px] font-semibold text-slate-500 mt-1 line-clamp-2">
                {item.subtitle}
              </p>

              {/* Hover CTA Indicator */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-bold text-[#E60067]">
                <span>Transaksikan</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
