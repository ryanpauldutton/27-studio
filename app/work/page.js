import {BsFillMoonStarsFill} from 'react-icons/bs'


export default function Work() {
  return (
    
    <main className='bg-blue-700 px-10 text-white'>
      <section className='min-h-screen'>
        <nav className='py-5 px-5 flex justify-between'>
          <h1 className='text-xl font-Lora'><a href='/'>27 studio</a></h1>
          <ul className='flex items-center'>
            <li className='px-4'><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li> <a href='/'>Work</a> </li>
          </ul>
        </nav>
      <hr />
      <h1 className='text-center text-red-600'>Work </h1>
      </section>
      
    </main>
    
  )
}
