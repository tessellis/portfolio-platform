'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    // Placeholder — will wire to an API route later
    setTimeout(() => setStatus('sent'), 800);
  }

  if (status === 'sent') {
    return (
      <div className={styles.success}>
        <p>Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}