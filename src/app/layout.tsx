import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Welcome to My Next.js App</h1>
        </header>
        {children} {/* The dynamic content */}
        <footer>
          <p>© 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
