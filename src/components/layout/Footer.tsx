import Link from 'next/link';
import styles from './Footer.module.css';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/myusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/myusername' },
  { label: 'Resume', href: '/resume.pdf' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Tess Ellis
        </p>
        <ul className={styles.links}>
          {socialLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={styles.link}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}