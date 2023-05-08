'use client'
import Link from "next/link";

const Navbar = () => (
    <nav className="fixed bg-blend-difference mix-blend-difference w-full flex justify-between p-2 text-white">
        
        <Link href='/'><h2 className="font-medium leading-[30px] italic text-[20px]"><span className="text-[24px] font-serif">27</span>-STUDIO</h2></Link>
        <ul className="flex gap-4">
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
        </ul>
      
    </nav>
  );
  
  export default Navbar;
  