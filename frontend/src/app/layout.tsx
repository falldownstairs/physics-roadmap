import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import '../styles/mathquill-custom.css';
import { MathJaxContext } from 'better-react-mathjax';

interface RootLayoutProps {
  children: ReactNode;
}

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
      </head>
      <body className="h-full overflow-y-auto bg-gray-50 text-gray-900" suppressHydrationWarning={true}>
        <AuthProvider>
          <MathJaxContext config={mathJaxConfig}>
            <Navbar />
            <main className="bg-gray-50">{children}</main>
          </MathJaxContext>
        </AuthProvider>
      </body>
    </html>
  );
}
