import React, { useState, useEffect } from 'react';
import { LIVE_TRANSACTIONS } from '../data/servicesData';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export const LiveTransactionsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_TRANSACTIONS.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const tx = LIVE_TRANSACTIONS[currentIndex];

  return (
    <div className="fixed bottom-4 left-4 z-30 max-w-xs w-full hidden sm:block">
      <div
        className={`bg-slate-900/90 backdrop-blur-md text-white p-3.5 rounded-2xl border border-pink-500/40 shadow-2xl transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-white">{tx.customerName}</span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {tx.status}
                </span>
              </div>
              <p className="text-[11px] font-medium text-pink-300 leading-tight">
                {tx.serviceName} ({tx.amount})
              </p>
              <p className="text-[9px] text-slate-400 mt-0.5">{tx.timeAgo}</p>
            </div>
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white p-1"
            title="Tutup Notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
