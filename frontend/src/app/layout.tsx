import { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import '../styles/mathquill-custom.css';
import { MathJaxContext } from 'better-react-mathjax';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://physicsroadmap.com'),
  title: {
    default: 'PhysicsRoadmap - Free AP Physics C Lessons & Practice',
    template: '%s | PhysicsRoadmap',
  },
  description: 'The best free resource for AP Physics C. Interactive lessons, video lectures, and practice questions for Mechanics and Electricity & Magnetism.',
  keywords: [
    'AP Physics C', 'AP Physics C Mechanics', 'AP Physics C Electricity and Magnetism',
    'physics lessons', 'free physics', 'AP exam prep', 'physics roadmap',
    'kinematics', 'Newton\'s laws', 'electrostatics', 'circuits', 'magnetism',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PhysicsRoadmap',
    title: 'PhysicsRoadmap - Free AP Physics C Lessons & Practice',
    description: 'The best free resource for AP Physics C. Interactive lessons, video lectures, and practice questions for Mechanics and Electricity & Magnetism.',
    url: 'https://physicsroadmap.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhysicsRoadmap - Free AP Physics C Lessons & Practice',
    description: 'The best free resource for AP Physics C. Interactive lessons, video lectures, and practice questions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PhysicsRoadmap',
  url: 'https://physicsroadmap.com',
  description: 'The best free resource for AP Physics C. Interactive lessons, video lectures, and practice questions for Mechanics and Electricity & Magnetism.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  const mathJaxConfig = {
    loader: { load: ["input/tex", "output/chtml"] },
    tex: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']]
    }
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="h-full overflow-y-auto bg-gray-50 text-gray-900" suppressHydrationWarning={true}>
        <AuthProvider>
          <MathJaxContext config={mathJaxConfig}>
            <Navbar />
            <main className="bg-gray-50">{children}</main>
          </MathJaxContext>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
