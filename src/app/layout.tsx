import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/globals.css';

const galmuri = localFont({
  src: [
    {
      path: 'fonts/Galmuri11.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Galmuri11-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hello, I'm Nalsae!",
  description: '안녕하세요, 프론트엔드 개발자 날새입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={galmuri.className}>{children}</body>
    </html>
  );
}
