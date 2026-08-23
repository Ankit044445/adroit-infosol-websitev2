import { useEffect, useState } from "react";
import { Icon } from "../../assets/icons/Icon";
import styles from "./ScrollToTop.module.scss";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisible() {
      setVisible(window.scrollY > 380);
    }
    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <Icon name="arrowUp" size={20} />
    </button>
  );
}
