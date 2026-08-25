import { useState, type FormEvent } from "react";
import { Icon } from "../../assets/icons/Icon";
import { contactInfo } from "../../data/content";
import styles from "./ContactForm.module.scss";

interface FormState {
  name: string;
  email: string;
  interest: string;
  timeline: string;
  message: string;
}

const interests = [
  "Mobile App (iOS/Android)",
  "Custom Web Platform",
  "Cloud & DevOps",
  "LimeSurvey Customization",
  "IoT Solution",
  "UI/UX Design",
  "Other",
];

const initialState: FormState = { name: "", email: "", interest: "", timeline: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleInterest(item: string) {
    setForm((prev) => ({
      ...prev,
      interest: prev.interest === item ? "" : item,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and project details.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);

    const subject = encodeURIComponent(`Project inquiry from ${form.name}${form.interest ? ` [${form.interest}]` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Interest: ${form.interest || "General"}\nTimeline: ${form.timeline || "Not specified"}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Full Name *</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </label>
        <label className={styles.field}>
          <span>Email Address *</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </label>
      </div>

      <div className={styles.field}>
        <span>I am interested in</span>
        <div className={styles.pillRow}>
          {interests.map((item) => (
            <button
              type="button"
              key={item}
              className={`${styles.interestPill} ${form.interest === item ? styles.activePill : ""}`}
              onClick={() => toggleInterest(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <label className={styles.field}>
        <span>Preferred Timeline</span>
        <select value={form.timeline} onChange={(e) => update("timeline", e.target.value)}>
          <option value="">When would you like to start? (optional)</option>
          <option value="As soon as possible">As soon as possible</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="1-3 months">1-3 months</option>
          <option value="Just exploring">Just exploring</option>
        </select>
      </label>

      <label className={styles.field}>
        <span>Tell us about your project *</span>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="What are you looking to build?"
        />
      </label>

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      {sent && !error && (
        <p className={styles.success} role="status">
          Your email client should now be open with your message pre-filled. Hit send to reach us.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-lg btn-block">
        <span>Schedule a Free Consultation</span>
        <Icon name="arrowRight" size={18} />
      </button>
    </form>
  );
}

