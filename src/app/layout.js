import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

export const metadata = {
  title: "Isaiah's Webpage",
  description: "Portfolio and projects by Isaiah Aganon, Computer Science student at Carleton University.",
  icons: {
    icon: "/en.png"
  },
  openGraph: {
    title: "Isaiah's Webpage",
    description: "Portfolio and projects by Isaiah Aganon, Computer Science student at Carleton University.",
    url: "https://isaiahaganon.vercel.app/",
    siteName: "Isaiah Aganon Portfolio",
    images: [
      {
        url: "https://isaiahaganon.vercel.app/en.png",
        width: 1200,
        height: 630,
        alt: "Isaiah Aganon Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Isaiah Aganon",
              "url": "https://isaiahaganon.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/isaiah-aganon",
                "https://github.com/AganonIsaiah"
              ],
              "jobTitle": "Computer Science Student",
              "affiliation": {
                "@type": "CollegeOrUniversity",
                "name": "Carleton University"
              }
            }
          `}}
        />
      </Head>
      <body >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
