import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김희진 | Developer Portfolio Blog",
  description: "김희진의 개발자 포트폴리오와 기술 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}