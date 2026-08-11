'use client';

import Link from 'next/link';
import { useInViewOnce } from '@/lib/useInViewOnce';
import { ContactIcon } from './ContactIcon';
import { ContactSparkleBurst } from './ContactSparkleBurst';
import styles from './ContactCTA.module.css';

const contactLinks = [
  { label: 'Email', href: 'mailto:you@email.com' },
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
];

export function ContactCTA() {
  const { ref, inView } = useInViewOnce<HTMLElement>(0.2);

  return (
    <section ref={ref} className={styles.panel}>
      <div className={`container ${styles.row}`}>
        <div className={styles.iconWrap}>
          <ContactSparkleBurst active={inView} />
          <ContactIcon active={inView} />
        </div>

        <div className={styles.text}>
          <h2>Let&apos;s work together</h2>
          <p>Open to full-time roles and collaborations. Reach out anytime.</p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.button}>
              Get in touch
            </Link>
          </div>

          <div className={styles.chips}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.chip}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}