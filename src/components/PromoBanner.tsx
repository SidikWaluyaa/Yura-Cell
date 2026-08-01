import React from 'react';
import { Gift, ArrowRight, Sparkles, Coins, Flame } from 'lucide-react';

interface PromoBannerProps {
  onOpenPromoModal: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenPromoModal }) => {
  return (
    <section id="promo" className="py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#E60067] via-pink-600 to-rose-600 text-white p-6 sm:p-10 shadow-2xl shadow-pink-300/60 border-2 border-pink-300">
          
          {/* Background Ambient FX */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Gift Box Visual Illustration */}
            <div className="md:col-span-3 flex justify-center">
              <div className="relative group">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-inner transform group-hover:scale-105 transition-transform duration-300">
                  
                  {/* Gift Icon */}
                  <div className="relative">
                    <Gift className="w-16 h-16 sm:w-20 sm:h-20 text-white fill-white/30 animate-pulse" />
                    
                    {/* Floating Gold Coin Badge */}
                    <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-950 p-2 rounded-full font-black text-xs shadow-md border-2 border-white flex items-center justify-center">
                      <Coins className="w-4 h-4 fill-amber-950" />
                    </div>
                  </div>

                </div>

                {/* Cashback Tag Pill */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider whitespace-nowrap border-2 border-white shadow-md">
                  Cashback & Diskon
                </div>
              </div>
            </div>

            {/* Middle Column: Promo Headline & Text */}
            <div className="md:col-span-6 text-center md:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Hari Ini Sahaja!</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                PROMO SPESIAL HARI INI!
              </h2>

              <p className="text-sm sm:text-base text-pink-100 font-medium max-w-xl">
                Dapatkan harga spesial dan cashback menarik untuk setiap transaksi di Yura Cell!
              </p>
            </div>

            {/* Right Column: CTA Button */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <button
                onClick={onOpenPromoModal}
                className="group relative flex items-center gap-3 px-6 py-4 bg-white hover:bg-pink-50 text-[#E60067] font-extrabold text-xs sm:text-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="text-left">
                  <div className="font-black text-[#E60067] uppercase tracking-wide">CEK PROMO SEKARANG!</div>
                  <div className="text-[10px] font-bold text-slate-500">Jangan sampai ketinggalan</div>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#E60067] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
