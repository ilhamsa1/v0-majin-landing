import type React from "react"
import "./globals.css"
import { Josefin_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
})

export const metadata = {
  title: "Majin - Technology & Design Studio",
  description: "Bespoke software solutions for web, mobile, and blockchain",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
