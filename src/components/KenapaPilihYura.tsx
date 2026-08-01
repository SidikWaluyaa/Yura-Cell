import React from 'react';
import { Zap, ShieldCheck, Tag, HeartHandshake, Clock, Sparkles } from 'lucide-react';

export const KenapaPilihYura: React.FC = () => {
  const reasons = [
    {
      title: 'Proses Cepat',
      subtitle: 'Tanpa menunggu lama',
      icon: Zap,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Aman & Terjamin',
      subtitle: 'Data & transaksi terjaga',
      icon: ShieldCheck,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Harga Terbaik',
      subtitle: 'Lebih hemat setiap hari',
      icon: Tag,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Layanan Ramah',
      subtitle: 'Siap bantu setiap saat',
      icon: HeartHandshake,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Transaksi 24 Jam',
      subtitle: 'Kapan pun kamu butuh',
      icon: Clock,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white via-pink-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#E60067] font-bold text-xs uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keunggulan Utama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            KENAPA PILIH YURA CELL?
          </h2>
        </div>

        {/* 5 Circular Badge Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-5 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300"
              >
                {/* Red/Pink Circle Icon Badge */}
                <div className="w-16 h-16 rounded-full bg-[#E60067] text-white flex items-center justify-center mb-4 shadow-md shadow-pink-200">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
