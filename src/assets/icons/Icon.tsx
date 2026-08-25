import type { SVGProps } from "react";
import {
  AndroidLogo,
  AppleLogo,
  DeviceMobile,
  Browser,
  ClipboardText,
  Cloud,
  Cpu,
  PenNib,
  Target,
  Compass,
  Stack,
  TrendUp,
  ShieldCheck,
  CheckCircle,
  Heart,
  Wallet,
  Smiley,
  Calendar,
  Clock,
  Globe,
  BookOpen,
  Sparkle,
  ArrowRight,
  ArrowUpRight,
  List,
  X,
  Sun,
  Moon,
  EnvelopeSimple,
  MapPin,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  Quotes,
  Star,
  Phone,
  CaretDown,
  Users,
  Briefcase,
  Code,
  ShareNetwork,
  Copy,
  Check,
  ArrowUp,
  Play,
  Pause,
  User,
  CaretLeft,
  CaretRight,
  ImageSquare,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";

export type IconName =
  | "android"
  | "ios"
  | "crossplatform"
  | "web"
  | "survey"
  | "cloud"
  | "iot"
  | "uiux"
  | "target"
  | "compass"
  | "layers"
  | "trendingUp"
  | "shield"
  | "checkCircle"
  | "heart"
  | "wallet"
  | "smile"
  | "calendar"
  | "clock"
  | "globe"
  | "bookOpen"
  | "sparkles"
  | "arrowRight"
  | "arrowUpRight"
  | "menu"
  | "close"
  | "sun"
  | "moon"
  | "mail"
  | "mapPin"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "quote"
  | "star"
  | "phone"
  | "chevronDown"
  | "users"
  | "briefcase"
  | "code"
  | "share"
  | "copy"
  | "check"
  | "arrowUp"
  | "play"
  | "pause"
  | "user"
  | "chevronLeft"
  | "chevronRight"
  | "image";

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  weight?: "regular" | "fill" | "bold" | "light" | "thin" | "duotone";
};

const registry: Record<IconName, PhosphorIcon> = {
  android: AndroidLogo,
  ios: AppleLogo,
  crossplatform: DeviceMobile,
  web: Browser,
  survey: ClipboardText,
  cloud: Cloud,
  iot: Cpu,
  uiux: PenNib,
  target: Target,
  compass: Compass,
  layers: Stack,
  trendingUp: TrendUp,
  shield: ShieldCheck,
  checkCircle: CheckCircle,
  heart: Heart,
  wallet: Wallet,
  smile: Smiley,
  calendar: Calendar,
  clock: Clock,
  globe: Globe,
  bookOpen: BookOpen,
  sparkles: Sparkle,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  menu: List,
  close: X,
  sun: Sun,
  moon: Moon,
  mail: EnvelopeSimple,
  mapPin: MapPin,
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  quote: Quotes,
  star: Star,
  phone: Phone,
  chevronDown: CaretDown,
  users: Users,
  briefcase: Briefcase,
  code: Code,
  share: ShareNetwork,
  copy: Copy,
  check: Check,
  arrowUp: ArrowUp,
  play: Play,
  pause: Pause,
  user: User,
  chevronLeft: CaretLeft,
  chevronRight: CaretRight,
  image: ImageSquare,
};

export function Icon({ name, size = 24, weight = "regular", ...rest }: Props) {
  const Glyph = registry[name];
  return <Glyph size={size} weight={weight} aria-hidden="true" focusable="false" {...rest} />;
}
