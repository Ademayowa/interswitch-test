import './globals.css';
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'StarWars',
  description: 'Starhips|StarWars|Force Awakens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
