import type { Metadata } from 'next';
import { Inter, Bungee } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SparkleField } from '@/components/layout/SparkleField';
import '@/styles/global.css';
import '@/styles/typography.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: 'Tess Ellis — Full Stack Developer',
    template: '%s | Tess Ellis',
  },
  description: 'Full stack developer and UX engineer based in Portland, OR.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bungee.variable}`}>
        <div className="page-grain" />
        <ThemeProvider>
          <div className="site-wrapper">
            <SparkleField />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}