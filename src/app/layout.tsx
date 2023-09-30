import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MenuMobile from './components/menuMobile/MenuMobile'
import './globals.css'
import { Cairo, Koulen } from 'next/font/google'

const cairo = Cairo({
  variable: '--font-cairo',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const koulen = Koulen({
  weight: '400',
  variable: '--font-koulen',
  subsets: ['latin'],
  style: ['normal'],
})

export const metadata = {
  title: 'Provider',
  description: 'Provider for software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cairo.variable} ${koulen.variable}`}>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
