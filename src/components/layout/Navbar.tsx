import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Logo } from "../../assets/icons/Logo";
import { Icon, type IconName } from "../../assets/icons/Icon";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { navLinks, services } from "../../data/content";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
    setIsMegaOpen(false);
    (document.activeElement as HTMLElement)?.blur();
  }, [location.pathname]);

  const closeAll = () => {
    setOpen(false);
    setMobileServicesOpen(false);
    setIsMegaOpen(false);
    (document.activeElement as HTMLElement)?.blur();
  };

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container-custom ${styles.inner}`}>
          <NavLink to="/" className={styles.brand} onClick={closeAll} aria-label="Adroit Infosol home">
            <Logo size={38} />
          </NavLink>

          <nav className={styles.desktopNav} aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>
              Home
            </NavLink>

            <div
              className={`${styles.navItem} ${isMegaOpen ? styles.megaOpen : ""}`}
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
              onFocus={() => setIsMegaOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsMegaOpen(false);
                }
              }}
            >
              <NavLink
                to="/services"
                onClick={closeAll}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                Services
                <Icon name="chevronDown" size={14} className={styles.navCaret} />
              </NavLink>
              <div className={`${styles.megaPanel} ${isMegaOpen ? styles.megaPanelOpen : ""}`}>
                <div className={styles.megaGrid}>
                  {services.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className={styles.megaItem} onClick={closeAll}>
                      <span className={styles.megaIcon}>
                        <Icon name={s.icon as IconName} size={18} />
                      </span>
                      <span>
                        <strong>{s.title}</strong>
                        <em>{s.short}</em>
                      </span>
                    </Link>
                  ))}
                </div>
                <Link to="/services" className={styles.megaAll} onClick={closeAll}>
                  View all services
                  <Icon name="arrowRight" size={15} />
                </Link>
              </div>
            </div>

            {navLinks
              .filter((l) => l.to !== "/" && l.to !== "/services")
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.label}
                </NavLink>
              ))}
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <div className={styles.ctaDesktop}>
              <Button to="/contact-us" size="md">
                Free Consultation
              </Button>
            </div>
            <button
              type="button"
              className={styles.menuBtn}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}>
          <div className={styles.mobileNavInner}>
          <nav aria-label="Mobile primary" className={styles.mobileNavList}>
            <NavLink to="/" end className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`} onClick={closeAll}>
              Home
              <Icon name="arrowUpRight" size={18} />
            </NavLink>

            <button
              type="button"
              className={styles.mobileLink}
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services"
            >
              Services
              <Icon name="chevronDown" size={18} className={mobileServicesOpen ? styles.rotated : ""} />
            </button>
            <div id="mobile-services" className={`${styles.mobileSub} ${mobileServicesOpen ? styles.mobileSubOpen : ""}`}>
              <div className={styles.mobileSubInner}>
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className={styles.mobileSubLink} onClick={closeAll}>
                    <Icon name={s.icon as IconName} size={16} />
                    {s.title}
                  </Link>
                ))}
                <Link to="/services" className={styles.mobileSubAll} onClick={closeAll}>
                  View all services
                </Link>
              </div>
            </div>

            {navLinks
              .filter((l) => l.to !== "/" && l.to !== "/services")
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`}
                  onClick={closeAll}
                >
                  {link.label}
                  <Icon name="arrowUpRight" size={18} />
                </NavLink>
              ))}
          </nav>
          <Button
            to="/contact-us"
            size="lg"
            className={`btn-block ${styles.mobileCta}`}
            onClick={closeAll}
          >
            Schedule a Free Consultation
          </Button>
          </div>
        </div>
      </header>
    </>
  );
}
