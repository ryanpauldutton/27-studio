import Image from 'next/image'
import { Inter,Lora } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main className='bg-blue-700 px-10 text-white'>
      <section className='min-h-screen'>
        <nav className='py-5 px-5 flex justify-between'>
          <h1 className='text-xl font-Lora'><a href='/'>27 studio</a></h1>
          <ul className='flex items-center'>
            <li className='px-4'><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li> <Link href="/work">Work</Link> </li>
          </ul>
        </nav>
      <hr />
      <h1 className='text-center text-red-600'>Hello</h1>
      </section>
      
    </main>
    
  )
}
