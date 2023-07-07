import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flight Track.er",
  description:
    "Track your flights from anywhere in the world, see schedules and routes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-surface h-full`}>{children}</body>
    </html>
  );
}
