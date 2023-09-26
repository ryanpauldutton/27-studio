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
import Project from '../components/project';
import Modal from '../components/modal'

const projects = [
  {
    title: "GPAA",
    src: "c2montreal.png",
    color: "#000000",
    link: "one",
  },
  {
    title: "Jack Solomons",
    src: "officestudio.png",
    color: "#8C8C8C",
    link: "two"
  },
  {
    title: "P3CL",
    src: "locomotive.png",
    color: "#EFE8D3",
    link: "three"
  },
  {
    title: "La Rosa",
    src: "silencio.png",
    color: "#706D63",
    link: "four"
  }
]


export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})  
  return (

    <main className="flex flex-col relative">
<div className='absolute w-full h-screen z-30 flex flex-col-reverse p-2 z'>
        <ScrollType />
        </div>

      <ThreeDType />


<main className={styles.main}>
  <div className={styles.body}>
    {
      projects.map( (project, index) => {
        return <Project link={project.link} index={index} title={project.title} setModal={setModal} key={index}/>
      })
    }
  </div>
  <Modal modal={modal} projects={projects}/>
</main>


      {/* <ProjectScroll/> */}
      {/* <div className='px-4 w-full relative'>
      <div className=' bg-gray-600  p-8 py-12 grid md:grid-cols-1 w-full relative gap-4 z-10 rounded-t-2xl'>
      <Card bgimg = "bg-gpaamain" title="GPAA" colour="text-cyan-200"/>
      <Card bgimg = "bg-larosa" title="Higher Capital" colour="text-green-200"/>
      <Card bgimg = "bg-larosa" title="La Rosa" colour="text-blue-200"/>

      </div>
      </div>
      <div class="bg" className=''></div> */}
    </main>
    
   
  )
}
