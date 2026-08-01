import React from 'react';
import { Star, Heart, Sparkles, Award } from 'lucide-react';

export const YuraGirlModel: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer Glow & Card Shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-[#E60067] rounded-3xl blur-lg opacity-40 animate-pulse" />

      {/* Main Container Card */}
      <div className="relative bg-gradient-to-b from-pink-100/90 via-white to-pink-50 rounded-3xl p-5 border-2 border-pink-200 shadow-2xl overflow-hidden">
        
        {/* Soft Store Interior Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#e60067_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        {/* Top Right Speech Bubble ("Mudah, Cepat, Hemat!") */}
        <div className="relative z-20 flex justify-end mb-2">
          <div className="bg-white px-4 py-2.5 rounded-2xl rounded-tr-none border-2 border-pink-300 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm text-[#E60067]">
              <span>Mudah, Cepat, Hemat!</span>
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Character Illustration Stage */}
        <div className="relative z-10 flex flex-col items-center justify-center my-2">
          
          {/* SVG & Styled Girl Graphic Representation */}
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 flex items-center justify-center">
            
            {/* Background Halo Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E60067] via-pink-400 to-amber-200 p-1.5 shadow-xl animate-spin-slow">
              <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-xs" />
            </div>

            {/* Character Visual */}
            <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-b from-pink-50 to-pink-100 overflow-hidden border-4 border-white shadow-inner flex flex-col items-center justify-end">
              
              {/* Cute Hair & Face Graphic */}
              <div className="absolute top-4 flex flex-col items-center">
                
                {/* Pigtails */}
                <div className="absolute -top-1 -left-12 w-10 h-16 bg-slate-900 rounded-full transform -rotate-45" />
                <div className="absolute -top-1 -right-12 w-10 h-16 bg-slate-900 rounded-full transform rotate-45" />
                
                {/* Hair Ribbon Clips */}
                <div className="absolute top-1 -left-10 w-3 h-3 bg-pink-500 rounded-full border border-white" />
                <div className="absolute top-1 -right-10 w-3 h-3 bg-pink-500 rounded-full border border-white" />

                {/* Head / Face */}
                <div className="w-28 h-28 bg-[#fcd5ce] rounded-full relative flex flex-col items-center justify-center shadow-xs border border-pink-200">
                  {/* Eyes */}
                  <div className="flex gap-6 mt-1">
                    <div className="w-3.5 h-4 bg-slate-900 rounded-full relative">
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 right-0.5" />
                    </div>
                    <div className="w-3.5 h-4 bg-slate-900 rounded-full relative">
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 right-0.5" />
                    </div>
                  </div>

                  {/* Rosy Cheeks */}
                  <div className="flex gap-10 absolute top-14">
                    <div className="w-4 h-2 bg-pink-300/80 rounded-full blur-xs" />
                    <div className="w-4 h-2 bg-pink-300/80 rounded-full blur-xs" />
                  </div>

                  {/* Cute Smile */}
                  <div className="w-6 h-3 border-b-2 border-pink-600 rounded-full mt-2" />
                </div>
              </div>

              {/* Victory Peace Sign Hand Floating */}
              <div className="absolute top-12 left-6 z-30 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-pink-300 shadow-md transform -rotate-12">
                <span className="text-xl">✌️</span>
              </div>

              {/* Pink T-Shirt with YURA CELL Bubble Logo */}
              <div className="w-48 h-32 bg-gradient-to-t from-[#d0005b] to-[#E60067] rounded-t-3xl mt-24 relative flex flex-col items-center justify-center p-2 shadow-lg border-t-2 border-pink-300">
                
                {/* Collar */}
                <div className="w-16 h-4 bg-pink-300/50 rounded-b-full absolute -top-1" />

                {/* Printed Logo on Shirt */}
                <div className="text-center transform -translate-y-1">
                  <div className="inline-flex items-center gap-1 mb-0.5">
                    <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                    <span className="text-xs font-black text-white tracking-widest uppercase drop-shadow-md">
                      YURA
                    </span>
                    <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-xs px-3 py-0.5 rounded-full shadow-xs">
                    <span className="text-[11px] font-black text-[#E60067] tracking-wider">
                      CELL
                    </span>
                  </div>
                </div>

                {/* Sparkle Details on T-Shirt */}
                <Star className="w-3 h-3 text-amber-300 fill-amber-300 absolute top-2 left-3" />
                <Heart className="w-3 h-3 text-pink-200 fill-pink-200 absolute bottom-2 right-3" />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Award Ribbon Badge (Exact copy from Poster) */}
        <div className="relative z-20 mt-3 bg-white p-3.5 rounded-2xl border-2 border-pink-200 flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-sm flex-shrink-0 border border-amber-300">
              <Award className="w-6 h-6 fill-amber-900 text-amber-900" />
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                Harga Hemat Pelayanan Hebat!
              </p>
              <p className="text-[11px] font-extrabold text-[#E60067] flex items-center gap-1">
                <span>Kepuasan No. 1</span>
                <span className="text-amber-500">⭐⭐⭐⭐⭐</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
