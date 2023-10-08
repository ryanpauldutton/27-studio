
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/NavBar.jsx'
import Preloader from '../components/preloader'
import Side from '../components/Side'
import SmoothScroll from '../components/SmoothScroll'
import Link from 'next/link'
import Contact from '../components/Contact';
import SlidingImages from '../components/SlidingImages';
import CustomCursor from '../components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: '27-Studio',
  description: 'A creative design & development studio based in london.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Preloader /> */}
      
      
      
        <Navbar />
        {/* <Preloader /> */}
        {/* <SmoothScroll> */}
        {children}
        
    
        
        {/* </SmoothScroll> */}
        <CustomCursor/>
        <SlidingImages />
        <Contact />
      </body>
    </html>
  )
}