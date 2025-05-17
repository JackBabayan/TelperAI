'use client';

import React, { useState } from 'react';
import styles from '@/styles/sections/Contact.module.scss';

const countryCodes = [
  { code: 'US', label: 'US', value: '+1' },
  { code: 'GB', label: 'UK', value: '+44' },
  { code: 'RU', label: 'RU', value: '+7' },
  { code: 'DE', label: 'DE', value: '+49' },
  { code: 'FR', label: 'FR', value: '+33' },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'US',
    phone: '',
    message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contactUs" className={styles.contactSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Contact us</span>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <p className={styles.sectionDescription}>We'd love to hear from you. Please fill out this form.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone number</label>
            <div className={styles.phoneRow}>
              <select name="country" value={form.country} onChange={handleChange} className={styles.countrySelect}>
                {countryCodes.map((c) => (
                  <option value={c.code} key={c.code}>{c.label}</option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={countryCodes.find(c => c.code === form.country)?.value + ' (555) 000-0000'}
                value={form.phone}
                onChange={handleChange}
                required
                className={styles.phoneInput}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} required />
          </div>
          <div className={styles.checkboxRow}>
            <input type="checkbox" id="agree" name="agree" checked={form.agree} onChange={handleChange} required />
            <label htmlFor="agree">
              You agree to our friendly <a href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
            </label>
          </div>
          <button type="submit" className={styles.submitButton} disabled={submitted}>
            {submitted ? 'Thank you!' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 