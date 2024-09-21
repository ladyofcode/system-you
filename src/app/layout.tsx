import type { Metadata } from "next"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import Link from 'next/link'
import { ModeToggle } from "@/components/ModeToggle"

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
      <body className={`${sourceSansPro.variable} ${sourceSerifPro.variable} font-sans min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex flex-col min-h-screen">
            <header className="bg-background/50 backdrop-blur-sm">
              <div className="container mx-auto flex justify-between items-center h-16">
                <Link href="/" className="font-serif font-light text-xl">System: You</Link>
                <nav className="flex items-center space-x-4">
                  <Link href="/resources" className="hover:underline">Resources</Link>
                  <Link href="/login" className="hover:underline">Log in</Link>
                  <ModeToggle />
                </nav>
              </div>
            </header>

            <main className="flex-grow container mx-auto py-8">
              {children}
            </main>

            <footer className="bg-footer">
              <div className="container mx-auto flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">built with ❤️ by</span>
                  <span className="text-sm">Tabs</span>
                  <span className="text-sm">James</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="/about" className="text-sm hover:underline">About</Link>
                  <Link href="/contact" className="text-sm hover:underline">Contact</Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
