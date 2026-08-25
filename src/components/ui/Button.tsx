import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../assets/icons/Icon";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: "md" | "lg";
  icon?: boolean;
  /** Which side the arrow renders on. "start" flips it to point back/left -
   * for a "back to X" button. Default "end" is the usual forward arrow. */
  iconPosition?: "start" | "end";
  type?: "button" | "submit";
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  onDark: "btn-on-dark",
};

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  iconPosition = "end",
  type = "button",
  className = "",
}: ButtonProps) {
  const cls = `btn ${variantClass[variant]} ${size === "lg" ? "btn-lg" : ""} ${className}`.trim();
  // icon stays a direct child of .btn, not nested in the text span
  const arrow = icon && (
    <Icon name="arrowRight" size={18} style={iconPosition === "start" ? { transform: "rotate(180deg)" } : undefined} />
  );
  const content = (
    <>
      {iconPosition === "start" && arrow}
      <span>{children}</span>
      {iconPosition === "end" && arrow}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
