import React from 'react';
import {
  Smartphone,
  Zap,
  Wifi,
  Receipt,
  FileText,
  Wallet,
  Gamepad2,
  PenTool,
  ShoppingBag,
  Percent,
  Send,
  Globe,
  PhoneCall,
  Clock,
  Plane,
  Ticket,
  Tv,
  Film,
  Coins,
  ArrowLeftRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  Phone,
  Gift,
  HelpCircle,
  LucideProps
} from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
}

export const IconRenderer: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Smartphone':
      return <Smartphone {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'Wifi':
      return <Wifi {...props} />;
    case 'Receipt':
      return <Receipt {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'Wallet':
      return <Wallet {...props} />;
    case 'Gamepad2':
      return <Gamepad2 {...props} />;
    case 'PenTool':
      return <PenTool {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'Percent':
      return <Percent {...props} />;
    case 'Send':
      return <Send {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'PhoneCall':
      return <PhoneCall {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    case 'Plane':
      return <Plane {...props} />;
    case 'Ticket':
      return <Ticket {...props} />;
    case 'Tv':
      return <Tv {...props} />;
    case 'Film':
      return <Film {...props} />;
    case 'Coins':
      return <Coins {...props} />;
    case 'ArrowLeftRight':
      return <ArrowLeftRight {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'Phone':
      return <Phone {...props} />;
    case 'Gift':
      return <Gift {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};
