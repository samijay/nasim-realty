import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import { I18nWrapper } from "@/components/shared/i18n-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — East Bay Real Estate`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "East Bay realtor",
    "East Bay real estate",
    "Oakland realtor",
    "Oakland real estate",
    "Berkeley real estate",
    "Oakland homes for sale",
    "Berkeley homes for sale",
    "East Bay neighborhoods",
    "buy home Oakland",
    "buy home Berkeley",
    "sell home East Bay",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <I18nWrapper>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </I18nWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
