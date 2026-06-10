import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "OPSORE | Secure, Intelligent, Affordable, and Easy Service Management",
  description:
    "OPSORE: The secure, intelligent, affordable, and easy-to-use platform for ITIL 4 Service Management, Asset Tracking, and Automated Compliance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 overflow-x-hidden">
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
