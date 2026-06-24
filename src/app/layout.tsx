import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeMa Footwear | Catálogo Premium",
  description: "Vitrine virtual premium de sneakers com atendimento pelo WhatsApp.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
