import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Mouse_Memoirs } from 'next/font/google'
import Footer from '@/components/footer'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400",
})

export const mouse_memoirs = Mouse_Memoirs({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `Joy's Travelog`,
  description: `A blog about all the cool places I've been to.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
