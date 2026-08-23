import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/Logo";
import { Icon } from "../../assets/icons/Icon";
import { CopyEmailButton } from "../ui/CopyEmailButton";
import { navLinks, contactInfo, services } from "../../data/content";
import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container-custom ${styles.top}`}>
        <div className={styles.brandCol}>
          <Logo size={40} />
          <p className={styles.tagline}>
            Enterprise IT solutions and product development company based in Vadodara, India, building reliable,
            scalable digital solutions since 2013.
          </p>
          <div className={styles.socials}>
            {contactInfo.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className={styles.socialLink}>
                <Icon name={s.icon as "linkedin"} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.linkCol}>
          <h3>Company</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h3>Services</h3>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/services" className={styles.viewAll}>
                View All Services
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h3>Get in Touch</h3>
          <ul className={styles.contactList}>
            <li>
              <Icon name="mail" size={17} />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <Icon name="mapPin" size={17} />
              <span>{contactInfo.location}</span>
            </li>
          </ul>
          <CopyEmailButton variant="pill" />
        </div>
      </div>

      <div className={`container-custom ${styles.bottom}`}>
        <p>© {year} Adroit Infosol. All rights reserved.</p>
        <p className={styles.madeWith}>Designed &amp; engineered with care in Vadodara, India.</p>
      </div>
    </footer>
  );
}
