'use client'
import Link from "next/link"
import { motion } from "framer-motion"

export default function Card({ bgimg, title, colour }) {
    return(
        <>
         <Link className='text-3xl relative h-[70vh] w-full overflow-hidden rounded-lg' href='/projects/one'>
        <motion.div className="w-full h-full relative">
            <motion.div className="absolute bottom-4 left-8 py-2 px-4 z-50">
        <h1 className="text-white text-7xl relative text-center pb-4">{title}</h1>
        <h3 className={`text-lg relative ${colour}`}>DISCIPLINES</h3>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.1 }}
        className= {`${bgimg} bg-no-repeat bg-cover bg-center w-full h-full flex flex-col justify-end items-center p-2`}>
            <div className="bg-slate-50 rounded-full">
            
            </div>
            </motion.div>
            </motion.div>
            </Link>
            </>
    )
}