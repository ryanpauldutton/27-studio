'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { TestMove } from "./CustomAni";

const Navbar = () => (
    <nav className="fixed z-50 bg-blend-difference mix-blend-difference w-full flex justify-between p-2 text-white">

        <Link href='/'><h2 className="font-bold leading-[30px] text-[20px]">27-STUDIO</h2></Link>
        <ul className="flex gap-4">
            <li>
           <TestMove className="px-2" text="WORK" />
            </li>
           
            <li> <TestMove className="px-2" text="CV" /></li>
            <li> <Link href="/projects" ><TestMove className="px-2" text="CONTACT" /></Link></li>
        </ul>

    </nav>
);

export default Navbar;
