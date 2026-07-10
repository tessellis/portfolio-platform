import { ContactForm } from '@/components/sections/ContactForm';
import styles from './page.module.css';

const links = [
  { label: 'Email', value: 'you@email.com', href: 'mailto:you@email.com' },
  { label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: 'https://linkedin.com/in/yourusername' },
];

export default function Contact() {
  return (
    <section className={`${styles.page} section`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <h1>Get in touch</h1>
          <p>
            Open to full-time roles and interesting collaborations. The
            fastest way to reach me is email, but feel free to use whatever
            works for you.
          </p>
          <ul className={styles.linkList}>
            {links.map((link) => (
              <li key={link.label}>
                <span className={styles.linkLabel}>{link.label}</span>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}