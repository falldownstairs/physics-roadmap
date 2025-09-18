import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50 scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full min-h-screen bg-gray-50 text-gray-900" suppressHydrationWarning={true}>
        <Navbar />
        <main className="pt-10 container bg-gray-50 height-100">{children}</main>
      </body>
    </html>
  );
}
