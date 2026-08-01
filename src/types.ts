export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'main' | 'prabayar' | 'keuangan';
  icon: string;
  badge?: string;
  description?: string;
  popularItems?: string[];
}

export interface ProviderOption {
  id: string;
  name: string;
  logo: string;
  color: string;
  packages: {
    id: string;
    name: string;
    nominal: string;
    price: number;
    description?: string;
  }[];
}

export interface PromoItem {
  id: string;
  title: string;
  code: string;
  discount: string;
  description: string;
  validUntil: string;
  tag: string;
}

export interface LiveTransaction {
  id: string;
  customerName: string;
  serviceName: string;
  amount: string;
  timeAgo: string;
  status: 'Sukses' | 'Diproses';
}
