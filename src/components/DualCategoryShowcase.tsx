import React from 'react';
import { PRABAYAR_SERVICES, KEUANGAN_SERVICES } from '../data/servicesData';
import { IconRenderer } from './IconRenderer';
import { Gift, Building2, CheckCircle, Zap } from 'lucide-react';

interface DualCategoryShowcaseProps {
  onSelectService: (serviceId: string) => void;
}

export const DualCategoryShowcase: React.FC<DualCategoryShowcaseProps> = ({ onSelectService }) => {
  return (
    <section id="paket" className="py-14 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: PAKET LAYANAN PRABAYAR */}
          <div className="bg-white rounded-3xl border-2 border-pink-200 overflow-hidden shadow-lg shadow-pink-100/50 flex flex-col justify-between">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#E60067] to-pink-500 p-5 text-white text-center relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase mb-1">
                <Gift className="w-4 h-4 text-white" />
                <span>Prabayar & Data</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight">PAKET LAYANAN PRABAYAR</h3>
              <p className="text-xs font-semibold text-pink-100 mt-1">
                Kebutuhan komunikasi kamu, kami sediakan!
              </p>
            </div>

            {/* Grid of Prabayar Services */}
            <div className="p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {PRABAYAR_SERVICES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectService(item.id)}
                  className="p-3 rounded-2xl bg-pink-50/50 hover:bg-pink-100/80 border border-pink-100 flex flex-col items-center text-center transition-all duration-200 hover:scale-105 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#E60067] shadow-xs flex items-center justify-center mb-2 group-hover:bg-[#E60067] group-hover:text-white transition-colors">
                    <IconRenderer name={item.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Footer Note */}
            <div className="px-6 pb-5 pt-2 flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-100 bg-slate-50/50">
              <span className="flex items-center gap-1 text-[#E60067]">
                <CheckCircle className="w-4 h-4" /> Proses Real-Time Direct Server
              </span>
              <span className="font-bold text-pink-600">Proses Detik itu Juga</span>
            </div>

          </div>

          {/* Right Column: LAYANAN KEUANGAN */}
          <div className="bg-white rounded-3xl border-2 border-indigo-200 overflow-hidden shadow-lg shadow-indigo-100/50 flex flex-col justify-between">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-5 text-white text-center relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase mb-1">
                <Building2 className="w-4 h-4 text-white" />
                <span>Financial & Banking</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight">LAYANAN KEUANGAN</h3>
              <p className="text-xs font-semibold text-indigo-100 mt-1">
                Transaksi keuangan aman, cepat, dan terpercaya!
              </p>
            </div>

            {/* Grid of Keuangan Services */}
            <div className="p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {KEUANGAN_SERVICES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectService(item.id)}
                  className="p-3.5 rounded-2xl bg-indigo-50/50 hover:bg-indigo-100/80 border border-indigo-100 flex flex-col items-center text-center transition-all duration-200 hover:scale-105 cursor-pointer group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white text-indigo-600 shadow-xs flex items-center justify-center mb-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <IconRenderer name={item.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Footer Note */}
            <div className="px-6 pb-5 pt-2 flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-100 bg-slate-50/50">
              <span className="flex items-center gap-1 text-indigo-600">
                <Zap className="w-4 h-4" /> Buka Setiap Hari Tanpa Libur
              </span>
              <span className="font-bold text-indigo-700">Tarik Tunai & Transfer Ready</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
