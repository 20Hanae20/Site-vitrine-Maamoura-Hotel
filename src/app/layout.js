import { Playfair_Display, Montserrat, Cairo } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://maamoura.luxtech.ma"),
  title: "Hôtel Maamoura | Hôtel de Luxe Traditionnel Casablanca",
  description: "Découvrez l'Hôtel Maamoura, un havre de calme et de tradition inspiré de La Mamounia au cœur de Casablanca. Suites familiales, chauffeurs privés et services d'élite.",
  keywords: "Hôtel Maamoura, Casablanca, Riad de luxe, Suite familiale Casablanca, Chauffeur privé Maroc, Transfert aéroport Casablanca, La Mamounia style",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
