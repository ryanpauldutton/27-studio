'use client'

import Image from 'next/image.js'
import Link from 'next/link.js'
import Card from '../components/Card'
import ThreeDType from '../components/ThreeDType'
import { motion } from 'framer-motion'
import { TypingText, TitleText, TextMove, TestMove } from '../components/CustomAni'
import ProjectScroll from '../section/ProjectScroll'
import ScrollType from '../components/ScrollType'
import styles from './page.module.css'
import { useState } from 'react';
import Projects from '../components/Projects';
import Modal from '../components/modal'
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';




export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})  
  return (

    <main className="flex flex-col relative bg-slate-300">
<div className='absolute w-full h-screen z-30 flex flex-col-reverse p-2 z'>
        <ScrollType />
        </div>

      <ThreeDType />

      <Description />
      <Projects />
      <SlidingImages />
<Contact />
    </main>
    
   
  )
}
