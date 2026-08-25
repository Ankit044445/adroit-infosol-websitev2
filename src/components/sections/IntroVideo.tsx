import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../../assets/icons/Icon";
import styles from "./IntroVideo.module.scss";

export function IntroVideo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.thumb}
        onClick={() => setOpen(true)}
        aria-label="Play video: Meet Adroit Infosol"
      >
        <img src="/images/contact-intro-thumbnail.webp" alt="Adroit Infosol - Building Digital Solutions That Drive Growth" loading="lazy" />
        <span className={styles.playBtn} aria-hidden="true">
          <Icon name="play" size={22} />
        </span>
      </button>

      {/* portal to body so the modal isn't clipped by an ancestor's transform */}
      {open &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button type="button" className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close video">
                <Icon name="close" size={20} />
              </button>
              <video
                src="/videos/adroit-infosol-intro.mp4"
                poster="/images/contact-intro-thumbnail.webp"
                controls
                autoPlay
                className={styles.video}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
