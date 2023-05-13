'use client'
import Link from "next/link"
import { motion } from "framer-motion"

export default function Card({ bgimg, title }) {
    return(
        <>
         <Link className='text-3xl relative h-[50vh] w-full overflow-hidden' href='/projects/one'>
        <motion.div 
        whileHover={{ scale: 1.1 }}
        className= {`${bgimg} bg-no-repeat bg-cover bg-center w-full h-full flex flex-col justify-end items-center p-2`}>
            <div className="bg-slate-50 rounded-full">
            <h1 className="text-slate-900 text-base text-center py-2 px-4">{title}</h1>
            </div>
            </motion.div>
            </Link>
            </>
    )
}