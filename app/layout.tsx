import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SchemaOrg from "@/components/SchemaOrg";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["400", "500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://daisybeautysalonbydebby.com"),
  title: { default: `${BUSINESS.name} | Salon Jogja Seturan`, template: `%s | ${BUSINESS.name}` },
  description: BUSINESS.description,
  keywords: ["salon rambut Jogja", "salon kecantikan Sleman", "Daisy Beauty Salon Debby", "potong rambut wanita Jogja", "hair coloring Yogyakarta", "salon Seturan"],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://daisybeautysalonbydebby.com",
    title: `${BUSINESS.name} | Salon Jogja Seturan`,
    description: BUSINESS.description,
    siteName: BUSINESS.name,
    images: [{ url: "/hero.jpg", width: 1320, height: 738, alt: "Suasana hangat Daisy Beauty Salon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Salon Jogja Seturan`,
    description: BUSINESS.description,
    images: ["/hero.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF6B9D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <SchemaOrg />
        <Navigation />
        <main className="min-h-screen relative">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
