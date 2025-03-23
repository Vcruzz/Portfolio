import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de projetos dev",
};

const fonte = Montserrat({
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body
        className={`${fonte.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
