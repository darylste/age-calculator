import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './styles/globals.scss';

export const metadata: Metadata = {
  title: 'Age Calculator App',
  description: 'Age Calculator Application for Front-end Mentor Challenge',
};

const poppins = Poppins({
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={poppins.className}
    >
      <body>{children}</body>
    </html>
  );
}
