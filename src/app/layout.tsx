import type { Metadata } from "next"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { UserProvider } from '@/contexts/UserContext'
import { Menu } from '@/components/Menu'

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${sourceSansPro.variable} ${sourceSerifPro.variable} font-sans`}>
        <ThemeProvider
          attribute="className"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <Menu />
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
