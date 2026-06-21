import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pally — Harcamaları kolayca böl",
  description: "Tatil, ev arkadaşı ve gruplar için harcama bölüşme uygulaması.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
