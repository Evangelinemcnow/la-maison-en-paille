import './globals.css'
import { Fredericka_the_Great } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const fredericka = Fredericka_the_Great({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredericka',
})

export const metadata = {
  title: {
    default: 'La Maison en Paille — Formations : Paille Terre Chaux / Poêle de masse',
    template: '%s | La Maison en Paille',
  },
  description: 'Formations en construction naturelle animées par André de Bouter depuis 25 ans. Charente (16).',
  metadataBase: new URL('https://www.lamaisonenpaille.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={fredericka.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}