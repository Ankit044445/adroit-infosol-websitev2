import { Icon } from "../../assets/icons/Icon";
import { useTheme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.scss";

interface Props {
  className?: string;
}

export function ThemeToggle({ className = "" }: Props) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`${styles.themeButton} ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className={`${styles.iconSlot} ${isDark ? styles.isDark : styles.isLight}`} aria-hidden="true">
        <span className={styles.sunIcon}>
          <Icon name="sun" size={17} />
        </span>
        <span className={styles.moonIcon}>
          <Icon name="moon" size={17} />
        </span>
      </span>
    </button>
  );
}
