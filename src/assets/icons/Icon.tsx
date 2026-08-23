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

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

// Real, accurate Phosphor Icons brand/glyph marks - see /it-software-design
// and taste-skill audit: hand-rolled SVG icon paths are a known anti-slop
// tell, so the whole set was swapped to a maintained icon library instead
// of drawing shapes by hand. The `name` API is unchanged, so every call
// site (`<Icon name="..." />`) across the app needed zero edits.
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

export function Icon({ name, size = 24, ...rest }: Props) {
  const Glyph = registry[name];
  return <Glyph size={size} weight="regular" aria-hidden="true" focusable="false" {...rest} />;
}
