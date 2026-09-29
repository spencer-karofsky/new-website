import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spencer Karofsky",
  description: "Portfolio of Spencer Karofsky"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}