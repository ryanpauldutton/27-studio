import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/NavBar.jsx'
import Preloader from '../components/preloader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '27-Studio',
  description: 'A creative design & development studio based in london.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  )
}