import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script" // Import Script from next/script

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SUSMANGA.COM Waifu Ranking",
  description: "Top Waifu rankings by Susmanga readers.",
  generator: "susmanga.com",
  openGraph: {
    title: "SUSMANGA.COM Waifu Ranking",
    description: "Discover the Top 51 Waifu voted by Susmanga.com Readers!",
    url: "https://susmanga.com", // Replace with your actual domain
    siteName: "SUSMANGA.COM",
    images: [
      {
        url: "https://cdn.susmanga.com/waifu/52.jpg?height=630&width=1200", // Placeholder for your OG image
        width: 1200,
        height: 630,
        alt: "SUSMANGA.COM Waifu Ranking",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Add Client Hints for ExoClick ads
  other: {
    "Delegate-CH":
      "Sec-CH-UA https://s.magsrv.com; Sec-CH-UA-Mobile https://s.magsrv.com; Sec-CH-UA-Arch https://s.magsrv.com; Sec-CH-UA-Model https://s.magsrv.com; Sec-CH-UA-Platform https://s.magsrv.com; Sec-CH-UA-Platform-Version https://s.magsrv.com; Sec-CH-UA-Bitness https://s.magsrv.com; Sec-CH-UA-Full-Version-List https://s.magsrv.com; Sec-CH-UA-Full-Version https://s.magsrv.com;",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KT8S50J7ZK"}`}
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KT8S50J7ZK"}');
            `,
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Force dark theme
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
