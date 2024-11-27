import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ToasterContext from "./context/ToasterContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Convo",
  description: "Fastest conversationaa app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className} antialiased`}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
