import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const heading = Fraunces({ subsets: ["latin", "latin-ext"], variable: "--font-heading", axes: ["SOFT"] });

export const metadata: Metadata = {
  title: "Bazla Nettoyage · Lavage auto à Cotonou",
  description: "Nettoyage intérieur et extérieur de votre voiture à Cotonou. Discutez avec nous sur WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf5ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1430" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sans.variable} ${heading.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
