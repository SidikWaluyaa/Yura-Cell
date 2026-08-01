import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight, Check, Copy, Zap } from 'lucide-react';
import { CONTACT_INFO, MAIN_SERVICES, PRABAYAR_SERVICES, KEUANGAN_SERVICES } from '../data/servicesData';

interface QuickOrderModalProps {
  isOpen: boolean;
  initialServiceId?: string;
  onClose: () => void;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  isOpen,
  initialServiceId,
  onClose
}) => {
  const [targetNumber, setTargetNumber] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [serviceName, setServiceName] = useState<string>('Layanan Yura Cell');

  // Cari nama layanan berdasarkan initialServiceId yang dilempar dari Card
  useEffect(() => {
    if (initialServiceId) {
      const allServices = [...MAIN_SERVICES, ...PRABAYAR_SERVICES, ...KEUANGAN_SERVICES];
      const found = allServices.find((s) => s.id === initialServiceId);
      
      if (found) {
        setServiceName(found.title);
      } else {
        setServiceName('Layanan Yura Cell');
      }
    } else {
      setServiceName('Layanan Yura Cell');
    }
  }, [initialServiceId]);

  // Reset nomor ketika modal dibuka ulang atau ganti layanan
  useEffect(() => {
    if (isOpen) {
      setTargetNumber('');
      setCopied(false);
    }
  }, [isOpen, initialServiceId]);

  if (!isOpen) return null;

  const isGame = initialServiceId?.includes('game') || initialServiceId?.includes('ml') || initialServiceId?.includes('ff') || initialServiceId?.includes('pubg');
  const placeholderText = isGame ? 'Contoh ID Game: 12345678 (2001)' : 'Contoh: 081234567890';

  const generateWAMessage = () => {
    const numberText = targetNumber ? targetNumber : '(Nomor/ID Tujuan)';
    return `Halo Admin Yura Cell,\nSaya ingin order *${serviceName}*.\n- No. Tujuan/ID: ${numberText}\n\nMohon info pilihan paket dan harganya, terima kasih!`;
  };

  const handleSendWA = () => {
    const msg = encodeURIComponent(generateWAMessage());
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWAMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full border-2 border-pink-200 shadow-2xl relative p-6 sm:p-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-pink-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-[#E60067] font-black text-xs uppercase mb-2">
            <Zap className="w-4 h-4 fill-[#E60067]" />
            <span>Order Layanan Cepat</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">{serviceName}</h3>
          <p className="text-xs font-semibold text-slate-500">Masukkan nomor HP/ID untuk diinfokan daftar paket</p>
        </div>

        {/* Target Number Input */}
        <div className="mb-6">
          <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide mb-2">
            Nomor HP / ID Pelanggan
          </label>
          <input
            type="text"
            placeholder={placeholderText}
            value={targetNumber}
            onChange={(e) => setTargetNumber(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-pink-200 focus:ring-2 focus:ring-pink-200 outline-none text-sm font-semibold text-slate-900"
          />
        </div>

        {/* Copy Text Button */}
        <div className="flex justify-end mb-4">
           <button
             onClick={handleCopyMessage}
             className="text-[11px] font-bold text-slate-400 hover:text-[#E60067] flex items-center gap-1 transition-colors cursor-pointer"
           >
             {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
             <span>{copied ? 'Format Tersalin' : 'Salin Format Pesan'}</span>
           </button>
        </div>

        {/* Action Button: Send WhatsApp Order */}
        <button
          onClick={handleSendWA}
          className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-2xl text-base shadow-lg shadow-emerald-200 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span>Lanjut ke WhatsApp</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
