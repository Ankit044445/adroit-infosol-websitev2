import { useState } from "react";
import { Icon } from "../../assets/icons/Icon";
import { contactInfo } from "../../data/content";
import styles from "./CopyEmailButton.module.scss";

interface Props {
  className?: string;
  variant?: "inline" | "pill";
}

export function CopyEmailButton({ className = "", variant = "inline" }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  }

  return (
    <button
      type="button"
      className={`${styles.copyBtn} ${styles[variant]} ${className}`}
      onClick={handleCopy}
      aria-label="Copy email address"
      title="Copy email to clipboard"
    >
      <Icon name={copied ? "check" : "copy"} size={14} className={copied ? styles.checkIcon : ""} />
      <span>{copied ? "Copied to clipboard!" : "Copy Email"}</span>
    </button>
  );
}
