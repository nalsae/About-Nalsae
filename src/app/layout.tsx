import '@/styles/globals.css';
import type { Metadata } from 'next';

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
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
