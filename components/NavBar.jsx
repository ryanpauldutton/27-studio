'use client'
import Link from "next/link";

const Navbar = () => (
    <nav className="fixed bg-blend-difference mix-blend-difference w-full flex justify-between p-2 text-white">
        
        <Link href='/'><h2 className="font-extrabold leading-[30px] text-[24px]">27-STUDIO</h2></Link>
        <ul className="flex gap-4">
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
        </ul>
      
    </nav>
  );
  
  export default Navbar;
  