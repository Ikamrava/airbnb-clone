import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nunito } from 'next/font/google'



export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}
const nunito = Nunito({subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
