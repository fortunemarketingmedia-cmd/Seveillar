import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "Seveillar Clinical Supplies Services",
  description: "End-to-end clinical trial supply management, packaging, storage and global distribution from Pune, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
  <CustomCursor />
  {children}
</body>
    </html>
  );
}
