import React from 'react';
import { MessageCircle, MapPin, Zap, Tag, ShieldCheck, Clock, Medal, Heart, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Halo Yura Cell! Saya mau konsultasi / order layanan digital.');
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleScrollToMap = () => {
    const el = document.querySelector('#kontak');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-linear-to-r from-pink-50/50 via-white to-pink-50/30 min-h-137.5 lg:min-h-162.5 flex items-center">
      
      {/* Decorative background ambient glows for premium mesh gradient feel */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="w-full lg:w-[55%] text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-[#E60067] to-pink-500 text-white text-xs font-extrabold tracking-widest shadow-md shadow-pink-200">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              KONTER PULSA TERPERCAYA
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-slate-950 tracking-tight leading-none mb-4">
                YURA <span className="text-[#E60067]">CELL</span>
              </h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight leading-tight flex flex-col gap-1.5">
                <span>Semua Kebutuhan Digital & Keuangan</span>
                <span className="text-[#E60067] italic font-black text-3xl sm:text-4xl lg:text-5xl drop-shadow-xs">
                  dalam 1 Tempat!
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl">
              Pulsa, Voucher, Token, Pembayaran, Top Up, hingga Tarik Tunai & Transfer, semua bisa di Yura Cell. Cepat, mudah, aman, dan harga selalu bersahabat!
            </p>

            {/* 4 Feature Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-2xl">
              <div className="flex items-center gap-2.5 px-3.5 py-3 bg-white rounded-2xl border border-pink-100 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300">
                <div className="text-[#E60067] p-1.5 bg-pink-50 rounded-xl"><Zap className="w-5 h-5" /></div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">Transaksi<br/>Cepat</span>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-3 bg-white rounded-2xl border border-pink-100 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300">
                <div className="text-[#E60067] p-1.5 bg-pink-50 rounded-xl"><Tag className="w-5 h-5" /></div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">Harga<br/>Bersahabat</span>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-3 bg-white rounded-2xl border border-pink-100 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300">
                <div className="text-[#E60067] p-1.5 bg-pink-50 rounded-xl"><ShieldCheck className="w-5 h-5" /></div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">Aman &<br/>Terpercaya</span>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-3 bg-white rounded-2xl border border-pink-100 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300">
                <div className="text-[#E60067] p-1.5 bg-pink-50 rounded-xl"><Clock className="w-5 h-5" /></div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">24 Jam<br/>Siap Melayani</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-[#E60067] to-pink-600 hover:from-[#d0005b] hover:to-pink-700 text-white rounded-2xl shadow-lg shadow-pink-300 hover:shadow-xl hover:shadow-pink-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <div className="p-1 rounded-full border-2 border-white/40">
                   <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left leading-tight">
                  <div className="font-extrabold text-white text-base">Chat WhatsApp</div>
                  <div className="text-xs font-medium text-pink-100">Konsultasi & Order</div>
                </div>
              </button>

              <button
                onClick={handleScrollToMap}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#E60067] rounded-2xl border-2 border-pink-100 shadow-md hover:shadow-lg hover:border-pink-200 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <div className="p-1 rounded-full border-2 border-pink-100">
                   <MapPin className="w-6 h-6 text-[#E60067]" />
                </div>
                <div className="text-left leading-tight">
                  <div className="font-extrabold text-slate-800 text-base">Lihat Lokasi</div>
                  <div className="text-xs font-medium text-slate-500">Temukan Yura Cell</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage with Yura.png */}
          <div className="w-full lg:w-[40%] relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            
            {/* Glowing Auras */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/25 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-amber-300/15 rounded-full blur-3xl pointer-events-none z-0" />
            
            {/* Decorative Rotating Border Stage */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 rounded-full border-4 border-dashed border-pink-200/50 pointer-events-none z-0 animate-[spin_40s_linear_infinite]"
            />
            
            {/* Glassmorphic Backing Plate */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-linear-to-tr from-pink-100/40 via-white/50 to-pink-50/20 backdrop-blur-md border border-white/60 shadow-inner z-0 pointer-events-none" />

            {/* Yura.png Character */}
            <div className="relative z-10 max-w-90 lg:max-w-105 w-full transform hover:scale-[1.03] transition-transform duration-300">
               <img 
                 src="/images/Yura.png" 
                 alt="Yura Cell Character" 
                 className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(230,0,103,0.22)]" 
               />
            </div>

            {/* Speech Bubble (Mudah, Cepat, Hemat!) */}
            <div className="absolute top-6 lg:top-14 right-2 lg:-right-8 bg-white px-5 py-3.5 rounded-3xl rounded-br-none shadow-xl border-4 border-pink-200 z-20 animate-bounce" style={{ animationDuration: '3.5s' }}>
               <div className="text-base lg:text-lg font-black text-slate-800 leading-tight text-center">
                 Mudah,<br/>Cepat,<br/><span className="text-[#E60067] uppercase font-black">Hemat!</span>
               </div>
               {/* Small tail for bubble */}
               <div className="absolute -bottom-3 right-0 w-6 h-6 bg-white border-b-4 border-r-4 border-pink-200 transform rotate-45 rounded-sm" />
               <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#E60067] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                 <Heart className="w-4 h-4 fill-white text-white" />
               </div>
            </div>

            {/* Floating Trust Badge (100+ Transaksi Sukses) */}
            <div className="absolute top-1/2 -left-6 lg:-left-12 bg-white/95 backdrop-blur-xs px-4 py-3 rounded-2xl shadow-xl border border-pink-100 z-20 flex items-center gap-2 animate-[bounce_4s_infinite_1.5s]">
              <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-amber-500">
                <Sparkles className="w-5 h-5 fill-amber-400" />
              </div>
              <div className="text-left leading-none">
                <p className="text-[11px] font-black text-slate-800">100+ Transaksi</p>
                <p className="text-[9px] font-semibold text-slate-500 mt-0.5">Sukses Hari Ini</p>
              </div>
            </div>

            {/* Bottom Medal Badge (Harga Hemat Pelayanan Hebat!) */}
            <div className="absolute bottom-5 right-2 lg:-right-6 bg-white p-4 rounded-2xl shadow-xl border-2 border-pink-100 z-20 flex flex-col items-center">
               <div className="text-xs font-black text-[#E60067] mb-1">Harga Hemat<br/>Pelayanan Hebat!</div>
               <div className="text-[10px] font-bold text-slate-500">Kepuasan No. 1</div>
               <div className="absolute -bottom-6 -right-4 bg-amber-400 p-2 rounded-full shadow-lg border-4 border-white animate-pulse">
                 <Medal className="w-7 h-7 text-white fill-amber-500" />
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
