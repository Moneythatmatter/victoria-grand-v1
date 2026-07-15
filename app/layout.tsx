import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const playfair = Playfair_Display({
   subsets: ["latin"],
   variable: "--font-serif",
   display: "swap",
});

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-sans",
   display: "swap",
});

export const metadata: Metadata = {
   title: "Best boutique hotel in puri | Hotel Victoria Grand",
   description:
      "Stay at the best boutique hotel in Puri near Jagannath Temple and sea beach. Enjoy luxury rooms, swimming pool, and a top place to stay in Puri, Odisha.",
   keywords: [
      "best boutique hotel in puri",
      "hotels near jagganath temple",
      "Hotels with swimming pool in puri",
      "hotel near puri sea beach",
      "best places to stay in puri",
      "luxury hotels in puri",
      "best hotel in puri odisha",
      "top hotels in puri",
   ],
   verification: {
      google: "u52w-DU7S1rxO_28yW0k0gjVOCw0bzD_r3e12QG8BMg",
   },
   icons: {
      icon: [
         {
            url: "/icon-light-32x32.png",
            media: "(prefers-color-scheme: light)",
         },
         {
            url: "/icon-dark-32x32.png",
            media: "(prefers-color-scheme: dark)",
         },
         {
            url: "/icon.svg",
            type: "image/svg+xml",
         },
      ],
      apple: "/apple-icon.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "hotelvictoriagrand",
      url: "https://www.hotelvictoriagrand.com/",
      potentialAction: {
         "@type": "SearchAction",
         target: "https://www.hotelvictoriagrand.com/{search_term_string}",
         "query-input": "required name=search_term_string",
      },
   };

   return (
      <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
         <head>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
         </head>
         <body className="font-sans antialiased">
            {children}
            <Analytics />
         </body>
         <GoogleAnalytics gaId="G-94KBDMY7K0" />
      </html>
   );
}
