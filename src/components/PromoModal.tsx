import React, { useState } from 'react';
import { X, Tag, Copy, Check, Sparkles, MessageCircle, Flame } from 'lucide-react';
import { PROMO_DEALS, CONTACT_INFO } from '../data/servicesData';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleUsePromoWA = (code: string) => {
    const text = encodeURIComponent(`Halo Yura Cell, saya ingin klaim promo voucher kode *${code}*!`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-pink-200 shadow-2xl relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-pink-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#E60067] font-black text-xs uppercase mb-2">
            <Flame className="w-4 h-4 fill-[#E60067]" />
            <span>Kupon & Diskon Spesial</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900">Promo Hari Ini di Yura Cell</h3>
          <p className="text-xs font-semibold text-slate-500">Gunakan kode voucher saat pesan via Admin WhatsApp</p>
        </div>

        {/* Promo Voucher Cards List */}
        <div className="space-y-4 mb-6">
          {PROMO_DEALS.map((promo) => (
            <div
              key={promo.id}
              className="p-4 rounded-2xl bg-gradient-to-r from-pink-50/80 to-rose-50/80 border-2 border-dashed border-pink-300 relative flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-[#E60067] text-white font-extrabold text-[10px] uppercase mb-1">
                    {promo.tag}
                  </span>
                  <h4 className="text-base font-black text-slate-900">{promo.title}</h4>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">{promo.description}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 inline-block">
                    {promo.discount}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-pink-200/60 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500">Kode:</span>
                  <code className="px-2.5 py-1 bg-white border border-pink-200 rounded-lg text-xs font-black text-[#E60067] tracking-wider">
                    {promo.code}
                  </code>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopyCode(promo.code)}
                    className="px-3 py-1.5 bg-white hover:bg-pink-100 text-slate-700 rounded-xl text-xs font-bold border border-pink-200 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleUsePromoWA(promo.code)}
                    className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Gunakan</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-slate-500 font-medium bg-slate-50 p-3 rounded-2xl border border-slate-200">
          <span className="font-bold text-[#E60067]">Catatan:</span> Voucher berlaku selama persediaan kuota promo masih tersedia.
        </div>

      </div>
    </div>
  );
};
