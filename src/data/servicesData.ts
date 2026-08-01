import { ServiceItem, ProviderOption, PromoItem, LiveTransaction } from '../types';

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: 'voucher',
    title: 'Voucher',
    subtitle: 'Game & Aplikasi',
    category: 'main',
    icon: 'Percent',
    badge: 'Hemat',
    description: 'Voucher Google Play, Steam, PlayStation, Spotify, Netflix & Voucher Game favorite.'
  },
  {
    id: 'pulsa',
    title: 'Pulsa',
    subtitle: 'All Operator',
    category: 'main',
    icon: 'Smartphone',
    badge: 'Terlaris',
    description: 'Isi ulang pulsa reguler & transfer Telkomsel, Indosat, XL, Tri, Smartfren, Axis.'
  },
  {
    id: 'token-listrik',
    title: 'Token Listrik',
    subtitle: 'PLN Prabayar',
    category: 'main',
    icon: 'Zap',
    badge: '24 Jam',
    description: 'Beli token PLN prabayar mulai Rp 20.000 instant masuk ke meteran listrik.'
  },
  {
    id: 'bayar-wifi',
    title: 'Bayar WiFi',
    subtitle: 'Internet Bulanan',
    category: 'main',
    icon: 'Wifi',
    badge: 'Cepat',
    description: 'Pembayaran tagihan Indihome, Biznet, First Media, XL Satu, MyRepublic, dll.'
  },
  {
    id: 'bayar-listrik',
    title: 'Bayar Listrik',
    subtitle: 'Pascabayar',
    category: 'main',
    icon: 'Receipt',
    description: 'Cek & bayar tagihan listrik PLN pascabayar bulanan tanpa antri.'
  },
  {
    id: 'bayar-tagihan',
    title: 'Bayar Tagihan',
    subtitle: 'BPJS, PDAM, TV, DLL',
    category: 'main',
    icon: 'FileText',
    badge: 'Lengkap',
    description: 'Layanan bayar BPJS Kesehatan, PDAM Air Minum, TV Berlangganan & Angsuran Kredit.'
  },
  {
    id: 'topup-ewallet',
    title: 'Top Up E-Wallet',
    subtitle: 'OVO, DANA, GoPay, ShopeePay & Lainnya',
    category: 'main',
    icon: 'Wallet',
    badge: 'Populer',
    description: 'Isi saldo DANA, OVO, GoPay, ShopeePay, LinkAja, Maxim Driver/Penumpang.'
  },
  {
    id: 'topup-game',
    title: 'Top Up Game',
    subtitle: 'Diamond, UC, ML, FF, AOV, Roblox & Lainnya',
    category: 'main',
    icon: 'Gamepad2',
    badge: 'Instant',
    description: 'Top up Diamond Mobile Legends, Free Fire, UC PUBG, Roblox, Genshin Impact.'
  },
  {
    id: 'alat-tulis',
    title: 'Alat Tulis Sekolah',
    subtitle: 'Lengkap & Berkualitas',
    category: 'main',
    icon: 'PenTool',
    description: 'Sedia buku, pena, pensil, amplop, map, materai 10.000, fotokopi & perlengkapan sekolah.'
  },
  {
    id: 'produk-digital',
    title: 'Produk Digital',
    subtitle: 'Streaming, Musik, Aplikasi & Lainnya',
    category: 'main',
    icon: 'ShoppingBag',
    description: 'Akun premium Youtube, Canva Pro, Spotify, Vidio Premium, WeTV, Disney+.'
  }
];

export const PRABAYAR_SERVICES: ServiceItem[] = [
  { id: 'p-pulsa-reguler', title: 'Pulsa Reguler', subtitle: 'Semua Operator', category: 'prabayar', icon: 'Smartphone' },
  { id: 'p-pulsa-transfer', title: 'Pulsa Transfer', subtitle: 'Lebih Hemat', category: 'prabayar', icon: 'Send' },
  { id: 'p-paket-internet', title: 'Paket Internet', subtitle: 'Harian / Bulanan', category: 'prabayar', icon: 'Globe' },
  { id: 'p-paket-tlp-sms', title: 'Paket Telepon & SMS', subtitle: 'Semua Operator', category: 'prabayar', icon: 'PhoneCall' },
  { id: 'p-masa-aktif', title: 'Masa Aktif Kartu', subtitle: 'Perpanjang Kartu', category: 'prabayar', icon: 'Clock' },
  { id: 'p-roaming', title: 'Produk Roaming', subtitle: 'Luar Negeri', category: 'prabayar', icon: 'Plane' },
  { id: 'p-voucher-data', title: 'Voucher Internet', subtitle: 'Fisik & Gesek', category: 'prabayar', icon: 'Ticket' },
  { id: 'p-token-pln', title: 'Token PLN', subtitle: 'Prabayar Instant', category: 'prabayar', icon: 'Zap' },
  { id: 'p-topup-hiburan', title: 'Top Up Hiburan', subtitle: 'Game & Streaming', category: 'prabayar', icon: 'Tv' },
  { id: 'p-tv-streaming', title: 'Produk TV / Streaming', subtitle: 'Voucher & Paket', category: 'prabayar', icon: 'Film' }
];

export const KEUANGAN_SERVICES: ServiceItem[] = [
  { id: 'k-tarik-tunai', title: 'Tarik Tunai', subtitle: 'E-Wallet / Transfer', category: 'keuangan', icon: 'Coins', badge: 'Terfavorit' },
  { id: 'k-transfer-bank', title: 'Transfer Antar Bank', subtitle: 'BCA, BRI, Mandiri, BNI, dll', category: 'keuangan', icon: 'ArrowLeftRight', badge: 'Instan' },
  { id: 'k-topup-ewallet', title: 'Top Up E-Wallet', subtitle: 'OVO, DANA, GoPay, ShopeePay & Lainnya', category: 'keuangan', icon: 'Wallet' },
  { id: 'k-bayar-listrik', title: 'Bayar Listrik (PLN)', subtitle: 'Pascabayar', category: 'keuangan', icon: 'Zap' },
  { id: 'k-bayar-wifi', title: 'Bayar WiFi / Internet', subtitle: 'Bulanan', category: 'keuangan', icon: 'Wifi' },
  { id: 'k-bayar-tagihan-lengkap', title: 'Bayar Tagihan Lengkap', subtitle: 'BPJS, PDAM, Multifinance', category: 'keuangan', icon: 'FileText' }
];

export const PROVIDER_DATA: Record<string, ProviderOption[]> = {
  pulsa: [
    {
      id: 'telkomsel',
      name: 'Telkomsel',
      logo: '🔴',
      color: 'from-red-500 to-red-700',
      packages: [
        { id: 'tsel-5', name: 'Pulsa 5.000', nominal: 'Rp 5.000', price: 7000 },
        { id: 'tsel-10', name: 'Pulsa 10.000', nominal: 'Rp 10.000', price: 12000 },
        { id: 'tsel-20', name: 'Pulsa 20.000', nominal: 'Rp 20.000', price: 21500 },
        { id: 'tsel-50', name: 'Pulsa 50.000', nominal: 'Rp 50.000', price: 51000 },
        { id: 'tsel-100', name: 'Pulsa 100.000', nominal: 'Rp 100.000', price: 100000 }
      ]
    },
    {
      id: 'indosat',
      name: 'Indosat IM3',
      logo: '🟡',
      color: 'from-yellow-400 to-amber-600',
      packages: [
        { id: 'isat-5', name: 'Pulsa 5.000', nominal: 'Rp 5.000', price: 6500 },
        { id: 'isat-10', name: 'Pulsa 10.000', nominal: 'Rp 10.000', price: 11500 },
        { id: 'isat-25', name: 'Pulsa 25.000', nominal: 'Rp 25.000', price: 26000 },
        { id: 'isat-50', name: 'Pulsa 50.000', nominal: 'Rp 50.000', price: 50500 },
        { id: 'isat-100', name: 'Pulsa 100.000', nominal: 'Rp 100.000', price: 99500 }
      ]
    },
    {
      id: 'xl',
      name: 'XL Axiata',
      logo: '🔵',
      color: 'from-blue-500 to-indigo-700',
      packages: [
        { id: 'xl-10', name: 'Pulsa 10.000', nominal: 'Rp 10.000', price: 11500 },
        { id: 'xl-25', name: 'Pulsa 25.000', nominal: 'Rp 25.000', price: 26000 },
        { id: 'xl-50', name: 'Pulsa 50.000', nominal: 'Rp 50.000', price: 50500 },
        { id: 'xl-100', name: 'Pulsa 100.000', nominal: 'Rp 100.000', price: 100000 }
      ]
    },
    {
      id: 'tri',
      name: 'Tri (3)',
      logo: '🟣',
      color: 'from-purple-500 to-pink-600',
      packages: [
        { id: 'tri-5', name: 'Pulsa 5.000', nominal: 'Rp 5.000', price: 6500 },
        { id: 'tri-10', name: 'Pulsa 10.000', nominal: 'Rp 10.000', price: 11500 },
        { id: 'tri-20', name: 'Pulsa 20.000', nominal: 'Rp 20.000', price: 21000 },
        { id: 'tri-50', name: 'Pulsa 50.000', nominal: 'Rp 50.000', price: 50000 }
      ]
    }
  ],
  ewallet: [
    {
      id: 'dana',
      name: 'DANA',
      logo: '🔹',
      color: 'from-sky-500 to-blue-600',
      packages: [
        { id: 'dana-20', name: 'Saldo DANA 20.000', nominal: 'Rp 20.000', price: 21000 },
        { id: 'dana-50', name: 'Saldo DANA 50.000', nominal: 'Rp 50.000', price: 51000 },
        { id: 'dana-100', name: 'Saldo DANA 100.000', nominal: 'Rp 100.000', price: 101000 },
        { id: 'dana-200', name: 'Saldo DANA 200.000', nominal: 'Rp 200.000', price: 201500 }
      ]
    },
    {
      id: 'ovo',
      name: 'OVO',
      logo: '💜',
      color: 'from-purple-600 to-indigo-800',
      packages: [
        { id: 'ovo-20', name: 'Saldo OVO 20.000', nominal: 'Rp 20.000', price: 21000 },
        { id: 'ovo-50', name: 'Saldo OVO 50.000', nominal: 'Rp 50.000', price: 51000 },
        { id: 'ovo-100', name: 'Saldo OVO 100.000', nominal: 'Rp 100.000', price: 101000 }
      ]
    },
    {
      id: 'gopay',
      name: 'GoPay',
      logo: '🟢',
      color: 'from-emerald-500 to-teal-700',
      packages: [
        { id: 'gopay-20', name: 'Saldo GoPay 20.000', nominal: 'Rp 20.000', price: 21000 },
        { id: 'gopay-50', name: 'Saldo GoPay 50.000', nominal: 'Rp 50.000', price: 51000 },
        { id: 'gopay-100', name: 'Saldo GoPay 100.000', nominal: 'Rp 100.000', price: 101000 }
      ]
    },
    {
      id: 'shopeepay',
      name: 'ShopeePay',
      logo: '🟠',
      color: 'from-orange-500 to-red-600',
      packages: [
        { id: 'spay-20', name: 'Saldo ShopeePay 20.000', nominal: 'Rp 20.000', price: 21000 },
        { id: 'spay-50', name: 'Saldo ShopeePay 50.000', nominal: 'Rp 50.000', price: 51000 },
        { id: 'spay-100', name: 'Saldo ShopeePay 100.000', nominal: 'Rp 100.000', price: 101000 }
      ]
    }
  ],
  game: [
    {
      id: 'mlbb',
      name: 'Mobile Legends',
      logo: '⚔️',
      color: 'from-amber-500 to-yellow-600',
      packages: [
        { id: 'ml-86', name: '86 Diamonds (77 + 9 Bonus)', nominal: '86 Diamonds', price: 21500 },
        { id: 'ml-172', name: '172 Diamonds (154 + 18 Bonus)', nominal: '172 Diamonds', price: 43000 },
        { id: 'ml-257', name: '257 Diamonds (231 + 26 Bonus)', nominal: '257 Diamonds', price: 64500 },
        { id: 'ml-weekly', name: 'Weekly Diamond Pass', nominal: '1 Pass', price: 28000 }
      ]
    },
    {
      id: 'ff',
      name: 'Free Fire',
      logo: '🔥',
      color: 'from-orange-600 to-red-700',
      packages: [
        { id: 'ff-140', name: '140 Diamonds', nominal: '140 Diamonds', price: 20000 },
        { id: 'ff-355', name: '355 Diamonds', nominal: '355 Diamonds', price: 50000 },
        { id: 'ff-720', name: '720 Diamonds', nominal: '720 Diamonds', price: 100000 }
      ]
    },
    {
      id: 'pubg',
      name: 'PUBG Mobile',
      logo: '🪂',
      color: 'from-yellow-600 to-stone-800',
      packages: [
        { id: 'pubg-60', name: '60 UC', nominal: '60 UC', price: 15000 },
        { id: 'pubg-325', name: '325 UC', nominal: '325 UC', price: 75000 },
        { id: 'pubg-660', name: '660 UC', nominal: '660 UC', price: 150000 }
      ]
    }
  ]
};

export const PROMO_DEALS: PromoItem[] = [
  {
    id: 'p1',
    title: 'Cashback Top Up E-Wallet 5%',
    code: 'YURADANA5',
    discount: 'Diskon Rp 2.000',
    description: 'Khusus top up saldo DANA & OVO minimal transaksi Rp 50.000 di Yura Cell.',
    validUntil: '31 Agustus 2026',
    tag: 'E-Wallet'
  },
  {
    id: 'p2',
    title: 'Bonus Pulsa All Operator Hari Ini',
    code: 'YURAPULSA',
    discount: 'Harga Spesial',
    description: 'Beli pulsa 100rb cuma bayar Rp 99.500 langsung via admin WhatsApp!',
    validUntil: 'Hari Ini',
    tag: 'Pulsa'
  },
  {
    id: 'p3',
    title: 'Diskon Token Listrik PLN 2.000',
    code: 'PLNHEMAT',
    discount: 'Hemat Biaya Admin',
    description: 'Beli token PLN Rp 100.000 & Rp 200.000 dengan biaya admin termurah.',
    validUntil: 'Selamanya',
    tag: 'Token PLN'
  }
];

export const LIVE_TRANSACTIONS: LiveTransaction[] = [
  { id: 't1', customerName: 'Rina S.', serviceName: 'Top Up DANA 100rb', amount: 'Rp 101.000', timeAgo: '1 menit yang lalu', status: 'Sukses' },
  { id: 't2', customerName: 'Budi W.', serviceName: 'Pulsa Telkomsel 50rb', amount: 'Rp 51.000', timeAgo: '3 menit yang lalu', status: 'Sukses' },
  { id: 't3', customerName: 'Dina A.', serviceName: 'Token Listrik 200rb', amount: 'Rp 202.000', timeAgo: '5 menit yang lalu', status: 'Sukses' },
  { id: 't4', customerName: 'Agus P.', serviceName: 'MLBB 86 Diamonds', amount: 'Rp 21.500', timeAgo: '7 menit yang lalu', status: 'Sukses' },
  { id: 't5', customerName: 'Siti K.', serviceName: 'Tarik Tunai DANA', amount: 'Rp 300.000', timeAgo: '10 menit yang lalu', status: 'Sukses' }
];

export const CONTACT_INFO = {
  phone1: '0888-2242-373',
  phone2: '0888-2242-373',
  whatsappNumber: '628882242373', // Clean digits for wa.me link
  address: 'XHM8+VWH, Bojong Kunci-Sukamukti, Bojongkunci, Kec. Pameungpeuk, Kabupaten Bandung, Jawa Barat 40376',
  gmapsUrl: 'https://maps.app.goo.gl/DTfMtwmDDjNaXSk58',
  gmapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.827!3d-6.175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzAuMCJTIDEwNsKwNDknMzcuMiJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid',
  operationalHours: 'Senin - Minggu (07.00 - 21.00 WIB)',
  isOpenNow: true
};
