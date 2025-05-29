import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Isaiah Aganon | Isaiah's Webpage",
  description: "Portfolio and projects by Isaiah Aganon, Computer Science student at Carleton University.",
  icons: {
    icon: "/images/en.png"
  },
  openGraph: {
    title: "Isaiah Aganon | Isaiah's Webpage",
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

// Add this separate viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Isaiah Aganon | Isaiah's Webpage</title>
        <meta name="description" content="Portfolio and projects by Isaiah Aganon, Computer Science student at Carleton University." />
        <meta name="keywords" content="Isaiah Aganon, Isaiah, Aganon, Carleton University, Computer Science, Portfolio" />
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
      </head>
      <body>
        <header>
          <h1>Isaiah Aganon</h1>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}