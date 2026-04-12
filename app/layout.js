import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://kesarinandan-kitchen.com'),
  title: {
    default: "KESARINANDAN Kitchen Appliances | Premium Modular Kitchen Dealer in Amravati",
    template: "%s | KESARINANDAN Kitchen Appliances"
  },
  description: "Best kitchen chimney, hob, cooktop, modular kitchen, plywood, laminate & modular furniture dealer in Amravati. Luxury kitchen solutions at affordable prices.",
  keywords: ["kitchen chimneys", "hobs", "cooktops", "modular kitchens", "plywood", "laminate", "modular furniture", "kitchen appliances Amravati", "KESARINANDAN"],
  authors: [{ name: "KESARINANDAN Kitchen Appliances" }],
  openGraph: {
    title: "KESARINANDAN Kitchen Appliances",
    description: "Premium kitchen solutions for modern homes",
    url: "https://kesarinandan-kitchen.com",
    siteName: "KESARINANDAN Kitchen Appliances",
    images: [
      {
        url: "/logo/Kesarinandan logo.png",
        width: 1200,
        height: 630,
        alt: "KESARINANDAN Kitchen Appliances Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KESARINANDAN Kitchen Appliances",
    description: "Premium kitchen solutions for modern homes",
    images: ["/logo/Kesarinandan logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo/Kesarinandan icon.png",
    shortcut: "/logo/Kesarinandan icon.png",
    apple: "/logo/Kesarinandan icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}