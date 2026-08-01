import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [hasBadge, setHasBadge] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tampilkan bubble sambutan setelah 3 detik
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowBubble(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowBubble(false);
    setHasBadge(false);
  };

  const handleTemplateClick = (text: string) => {
    setMessage(text);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank');
    
    // Reset message field
    setMessage('');
    setIsOpen(false);
  };

  const templates = [
    { label: '📱 Beli Pulsa', text: 'Halo Admin Yura Cell, saya mau beli pulsa/paket kuota data.' },
    { label: '⚡ Token PLN', text: 'Halo Admin Yura Cell, mau tanya daftar harga token listrik PLN.' },
    { label: '🎮 Top Up Game', text: 'Halo Admin Yura Cell, saya mau top up saldo game.' },
    { label: '💸 Tarik Tunai / Transfer', text: 'Halo Admin Yura Cell, saya mau melakukan tarik tunai / transfer uang.' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      
      {/* Welcome Speech Bubble */}
      {showBubble && !isOpen && (
        <div className="mb-3 mr-1 bg-white border border-pink-100 shadow-xl rounded-2xl p-3.5 max-w-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button 
            onClick={() => setShowBubble(false)}
            className="absolute top-1.5 right-1.5 p-0.5 text-slate-400 hover:text-[#E60067] transition-colors rounded-full"
            title="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="pr-4">
            <p className="text-xs font-black text-[#E60067] mb-0.5">Yura Cell Support</p>
            <p className="text-[11px] font-semibold text-slate-600 leading-snug">
              Ada yang bisa dibantu hari ini, Kak? Tanya harga atau transaksi langsung di sini! 👋
            </p>
          </div>
          {/* Segitiga Bubble */}
          <div className="absolute -bottom-1.5 right-6 w-3.5 h-3.5 bg-white border-r border-b border-pink-100 rotate-45" />
        </div>
      )}

      {/* Main Chat Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-90 bg-white/95 backdrop-blur-md border border-pink-100/50 shadow-2xl rounded-3xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#E60067] p-4 flex items-center justify-between text-white relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/images/Logo.png" 
                  alt="Yura Cell CS" 
                  className="w-10 h-10 object-contain rounded-xl bg-white border border-white/20 p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#E60067] rounded-full animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-black tracking-wide leading-tight">Yura Cell Support</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[9px] font-bold text-pink-100 uppercase tracking-wider">Biasanya membalas cepat</span>
                </div>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="p-1.5 hover:bg-white/10 rounded-xl transition-colors"
              title="Tutup Chat"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Operational Hours Info */}
          <div className="bg-pink-50/70 border-b border-pink-100/50 px-4 py-2 text-[10px] text-slate-500 font-bold text-center tracking-wide uppercase">
            Jam Operasional: {CONTACT_INFO.operationalHours}
          </div>

          {/* Chat Area (Simulated Message) */}
          <div className="flex-1 p-4 max-h-60 overflow-y-auto space-y-3.5 bg-slate-50/60">
            <div className="flex items-start gap-2.5">
              <img 
                src="/images/Logo.png" 
                alt="CS Avatar" 
                className="w-7 h-7 object-contain rounded-lg bg-white border border-slate-100"
              />
              <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-xs max-w-[85%] text-left">
                <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                  Halo Kak! Selamat datang di Yura Cell. Ada yang bisa kami bantu? Silakan pilih opsi cepat di bawah atau ketik langsung pesan Kakak ya.
                </p>
              </div>
            </div>
            <div ref={chatEndRef} />
          </div>

          {/* Shortcut Template Chips */}
          <div className="p-3 bg-white border-t border-slate-100 flex flex-wrap gap-1.5">
            {templates.map((tpl, i) => (
              <button
                key={i}
                onClick={() => handleTemplateClick(tpl.text)}
                className="text-[10px] font-extrabold text-slate-600 bg-slate-100 hover:bg-pink-50 hover:text-[#E60067] hover:border-pink-200/60 px-2.5 py-1.5 rounded-full border border-transparent transition-all cursor-pointer"
              >
                {tpl.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pesan Anda..."
              rows={1}
              className="chat-input"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all duration-300 ${
                message.trim() 
                  ? 'bg-[#E60067] hover:bg-[#c40056] text-white shadow-md shadow-pink-100 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              title="Kirim ke WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Button Trigger */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white relative shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer z-50 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-emerald-500 hover:bg-emerald-600'
        }`}
        title={isOpen ? 'Tutup Chat' : 'Chat WhatsApp'}
      >
        {/* Pulsing ring behind the button */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        )}
        
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        )}

        {/* Badge Notification */}
        {hasBadge && !isOpen && (
          <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[10px] font-black text-white animate-bounce shadow-md">
            1
          </span>
        )}
      </button>

    </div>
  );
};
