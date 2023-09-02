import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baptistearno.com"),
  title: "Baptiste Arnaud",
  description:
    "Software Engineer building Typebot, an open source chatbot builder. I share what I learn along the way.",
  openGraph: {
    title: "Baptiste Arnaud",
    description:
      "Software Engineer building Typebot, an open source chatbot builder. I share what I learn along the way.",
    url: "https://baptistearno.com",
    siteName: "Baptiste Arnaud",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Baptiste Arnaud",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-[#FEFEFA] dark:text-white dark:bg-[#111010]",
        inter.className
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
