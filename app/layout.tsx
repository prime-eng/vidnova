import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "VIDNOVA",
  description: "Create. Customize. Stream.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <PageTransition />

        {children}
      </body>
    </html>
  );
}