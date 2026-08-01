import React from 'react';
import { Heart, Phone, MapPin, Clock, Facebook, Instagram, Youtube, ExternalLink, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

export const Footer: React.FC = () => {
  const handleWhatsApp = (phone: string) => {
    const cleanNum = phone.replace(/[^0-9]/g, '');
    const num = cleanNum.startsWith('0') ? '62' + cleanNum.substring(1) : cleanNum;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent('Halo Yura Cell, saya ingin bertanya tentang lokasi & layanan.')}`, '_blank');
  };

  return (
    <footer id="kontak" className="bg-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: TENTANG YURA CELL */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/images/Logo.png" 
                alt="Yura Cell Logo" 
                className="w-10 h-10 object-contain rounded-xl"
              />
              <div>
                <span className="text-xl font-black text-[#E60067]">YURA </span>
                <span className="text-xl font-black text-white">CELL</span>
              </div>
            </div>

            <h3 className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
              TENTANG YURA CELL
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
              Yura Cell adalah konter pulsa dan payment point terpercaya yang siap memenuhi semua kebutuhan digital dan keuangan Anda setiap hari.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#E60067] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Facebook Yura Cell"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#E60067] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram Yura Cell"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#E60067] text-slate-300 hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                title="TikTok Yura Cell"
              >
                ♪
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#E60067] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="YouTube Yura Cell"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: HUBUNGI KAMI */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
              HUBUNGI KAMI
            </h3>

            <div className="space-y-3">
              <button
                onClick={() => handleWhatsApp(CONTACT_INFO.phone1)}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-left transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">{CONTACT_INFO.phone1}</p>
                  <p className="text-[10px] text-emerald-400 font-semibold">Klik untuk Chat Admin</p>
                </div>
              </button>

              <a
                href={CONTACT_INFO.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-left transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white leading-tight">{CONTACT_INFO.address}</p>
                  <p className="text-[10px] text-pink-400 font-semibold mt-0.5">Klik untuk Google Maps</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: JAM OPERASIONAL */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
              JAM OPERASIONAL
            </h3>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">Senin - Minggu</p>
                  <p className="text-xs font-bold text-pink-400">07.00 - 21.00 WIB</p>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#E60067] text-white font-black text-[11px] uppercase tracking-wider shadow-xs">
                Buka Setiap Hari
              </div>
            </div>
          </div>

          {/* Column 4: KUNJUNGI KAMI (Google Maps Widget) */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
              KUNJUNGI KAMI
            </h3>

            <p className="text-xs text-slate-400 font-medium">
              Temukan kami dengan mudah di Google Maps:
            </p>

            {/* Google Maps Preview Card */}
            <div className="rounded-2xl border-2 border-pink-500/40 overflow-hidden bg-slate-800 p-2 space-y-2">
              <div className="h-28 rounded-xl overflow-hidden relative bg-slate-700 flex items-center justify-center">
                
                {/* Embedded Map Visual Frame */}
                <iframe
                  title="Google Maps Location Yura Cell"
                  src={CONTACT_INFO.gmapsEmbedUrl}
                  className="w-full h-full border-0 filter opacity-90 hover:opacity-100 transition-opacity pointer-events-none"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-full bg-[#E60067] text-white font-black text-xs shadow-lg flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>YURA CELL</span>
                  </div>
                </div>
              </div>

              <a
                href={CONTACT_INFO.gmapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 bg-pink-600 hover:bg-[#E60067] text-white text-xs font-extrabold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar Trust Ribbon (Matches Poster) */}
        <div className="pt-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5 text-pink-400 font-black">
              <CheckCircle2 className="w-4 h-4 text-pink-500" /> 100% AMAN & TERPERCAYA
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Transaksi Terjamin</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Harga Bersahabat</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Layanan Profesional</span>
          </div>

          <p className="text-[11px] font-medium text-slate-500 mt-4">
            © {new Date().getFullYear()} YURA CELL. Solusi Kebutuhan Digital & Keuangan Anda.
          </p>
        </div>

      </div>
    </footer>
  );
};
