
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './componenets/navbar/Navbar'
import Modal from './componenets/modals/Modal'
import RegisterModal from './componenets/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './componenets/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './componenets/modals/RentModal'




export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}
const nunito = Nunito({subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (

    <html lang="en">
      
      <body className={nunito.className} suppressHydrationWarning={true}>
        <ToasterProvider />
        <Navbar currentUser = {currentUser}/>
        <RegisterModal/>
        <LoginModal/>
        <RentModal/>
        
        {children}
      </body>
    </html>
  )
}
