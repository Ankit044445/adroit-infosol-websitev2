import { Icon } from "../../assets/icons/Icon";
import { useTheme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.scss";

interface Props {
  className?: string;
}

export function ThemeToggle({ className = "" }: Props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`${styles.toggle} ${theme === "dark" ? styles.isDark : styles.isLight} ${className}`}
      onClick={toggleTheme}
      aria-label={`Current mode is ${theme}. Click to switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className={styles.slider} aria-hidden="true" />
      <span className={`${styles.iconWrap} ${styles.sunWrap}`} aria-hidden="true">
        <Icon name="sun" size={16} />
      </span>
      <span className={`${styles.iconWrap} ${styles.moonWrap}`} aria-hidden="true">
        <Icon name="moon" size={16} />
      </span>
    </button>
  );
}
