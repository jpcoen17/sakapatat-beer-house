import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Sakapatat Beer House & Resto — True Belgian Bar, Yogyakarta",
  description: "Sakapatat Beer House & Resto — True Belgian Bar 🍺 in Yogyakarta. Enjoy craft beers, cocktails, and great food in an outdoor beer garden atmosphere. Opens daily 5PM onwards.",
  keywords: ["sakapatat","beer house","yogyakarta","belgian bar","taman bir","craft beer","resto","outdoor bar"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sakapatat Beer House & Resto",
    description: "True Belgian Bar in Yogyakarta. Opens daily 5PM onwards.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
