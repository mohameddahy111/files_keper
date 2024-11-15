import type { Metadata } from "next";
import "./globals.css";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});


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
      <body
        className={`${exo2.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
