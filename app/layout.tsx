import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

// --------------------
// THOSEM SITE CONFIG
// --------------------
const SITE_NAME = "Thosem";
const SITE_TAGLINE = "Websites & small web apps";
const SITE_DESCRIPTION =
  "Thosem builds clean, fast websites, landing pages, and small web apps for small businesses. Simple process. Practical results.";
const SITE_URL = "https://thosem.com";

// Social preview image (put in /public/og.png, 1200x630 recommended)
const OG_IMAGE = "/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: "Thosem", url: SITE_URL }],
  creator: "Thosem",
  publisher: "Thosem",
  category: "web development",

  keywords: [
    "web design",
    "web development",
    "small business websites",
    "landing pages",
    "web apps",
    "Next.js developer",
    "freelance web developer",
    "South Africa web developer",
    "international web developer",
    "business websites",
    "Thosem",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  themeColor: "#9C7627",

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_ZA",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Thosem — websites and small web apps",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${orbitron.variable}`}>
      <body className="antialiased">
        {/* SEO: Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Thosem",
              url: "https://thosem.com",
              logo: "https://thosem.com/icon.png",
              description:
                "Web studio building clean websites, landing pages, and small web apps for small businesses.",
              areaServed: [
                {
                  "@type": "Country",
                  name: "South Africa",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Worldwide",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "thobilesema@gmail.com",
                availableLanguage: ["English"],
              },
              sameAs: [
                // Add these later if you want (optional but powerful)
                // "https://www.linkedin.com/in/yourprofile",
                // "https://github.com/yourusername",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
