import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cabinet ABAQ - Maîtrise d'œuvre et BET Thermique",
  description: "Cabinet ABAQ - Expertise en Maîtrise d'œuvre et Études Thermiques. Certifié OPQIBI, RGE et Amiante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}