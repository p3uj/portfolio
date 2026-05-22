import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./../styles/tailwind-colors.css";
import { TooltipProvider } from "@/components/ui/tooltip/tooltip";
import { Providers } from "@/components/providers/providers";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bengie Villesco | Portfolio",
  description: "Bengie Villesco's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, bebasNeue.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Providers>
          <TooltipProvider>{children}</TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
