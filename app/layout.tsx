import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Asif - AI/ML Engineer & Data Scientist",
  description:
    "Professional portfolio of an AI/ML Engineer and Data Scientist showcasing innovative projects and technical expertise",
  keywords: ["AI", "Machine Learning", "Data Science", "Portfolio", "Engineer"],
  authors: [{ name: "Asif" }],
  creator: "Asif",
  openGraph: {
    title: "Asif - AI/ML Engineer & Data Scientist",
    description: "Professional portfolio showcasing AI/ML projects and data science expertise",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif - AI/ML Engineer & Data Scientist",
    description: "Professional portfolio showcasing AI/ML projects and data science expertise",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
