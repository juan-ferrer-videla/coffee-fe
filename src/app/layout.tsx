import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { TikTok } from "@/components/icons/tiktok";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { MobileDrawer } from "@/components/mobile-drawer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`,
          "font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="container sticky top-0 z-50 mb-6 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-between border-b py-4">
              <Link href={"/"}>Coffee</Link>
              <Nav className="hidden md:block" />
              <div className="flex items-center space-x-3">
                <ModeToggle />
                <MobileDrawer />
              </div>
            </div>
          </header>
          <main className="container grow">{children}</main>
          <footer className="container mt-6 md:mt-12 lg:mt-16">
            
            <div className="border-t" />
            <div className="my-6 flex flex-col items-center justify-around gap-6 text-center md:my-10 md:flex-row md:text-start lg:my-14">
              <div>
                <h3 className="mb-2 scroll-m-20 text-xl font-semibold tracking-tight md:mb-3">
                  Follow us
                </h3>
                <nav>
                  <ul className="flex items-center justify-center space-x-3 md:justify-start">
                    <li>
                      <a
                        href="https://www.facebook.com/universo.coffe?_rdc=1&_rdr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="stroke-muted-foreground transition-colors hover:stroke-foreground" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/universo.coffeeok"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="stroke-muted-foreground transition-colors hover:stroke-foreground" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@Universo.Coffee"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="stroke-muted-foreground transition-colors hover:stroke-foreground" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@universo.coffee"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TikTok className="stroke-muted-foreground transition-colors hover:stroke-foreground" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <h3 className="mb-1 scroll-m-20 text-xl font-semibold tracking-tight md:mb-3">
                  Address
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thames 2326 Palermo Caba.
                </p>
                <p className="text-sm text-muted-foreground">
                  Buenos Aires – Argentina.
                </p>
              </div>
              <div>
                <h3 className="mb-1 scroll-m-20 text-xl font-semibold tracking-tight md:mb-3">
                  Contact
                </h3>
                <p className="text-sm text-muted-foreground">universo.coffee@gmail.com</p>
                <p className="text-sm text-muted-foreground">
                   +54 11-1234-5678
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
