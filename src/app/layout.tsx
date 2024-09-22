import type { Metadata } from "next"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import Link from 'next/link'
import { ModeToggle } from "@/components/ModeToggle"
import { Footer } from '@/components/Footer'

const sourceSansPro = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" })
const sourceSerifPro = Source_Serif_4({ subsets: ["latin"], weight: "300", variable: "--font-serif" })

export const metadata: Metadata = {
  title: "System: You",
  description: "Curated resources and profile-sharing for your self-development journey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSansPro.variable} ${sourceSerifPro.variable} font-sans dotted-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen text-foreground">
            <header className="bg-background/50">
              <div className="container mx-auto px-4 py-8 max-w-[1200px]">
                <nav className="flex justify-between items-center">
                  <Link href="/" className="text-2xl font-bold font-serif">
                    System: You
                  </Link>
                  <div className="flex items-center space-x-6">
                    <Link href="/resources" className="hover:underline">Resources</Link>
                    <Link href="/login" className="hover:underline">Log in</Link>
                    <ModeToggle />
                  </div>
                </nav>
              </div>
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
