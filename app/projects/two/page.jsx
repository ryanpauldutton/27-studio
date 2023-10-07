'use client'
import ProjectBody from "../../../components/ProjectBody";
import Link from "next/link";
import Image from "next/image";
import gpaaweb from "public/images/gpaa-main.jpg";
import gpaalogo from "public/images/gpaa-logo.jpg";
import gpaabc from "public/images/gpaa-bc.jpg";
import gpaawall from "public/images/gpaa-wall.jpg";

export default function ProjectOne({}) {
    return (
      <main className="bg-gray-950">
      <div className="flex-col w-full">
       
       <div className="flex flex-col mt-0 p-2 pt-20">
         <div>
         <h1 className="font-semibold text-6xl text-white">GPAA</h1>
         </div>
         </div>

         <div className="flex px-2 justify-start content-start w-full py-10">
       <div className="flex place-content-start flex-col w-1/4">
         <h1 className="font-semibold text-6xl"></h1>
         <span className="font-medium text-slate-500">INVOLVEMENT</span>
         <span className="text-white">Branding <br></br> UI/UX Design</span></div>

       <div className="flex flex-col">
         <h1 className="font-semibold text-6xl"></h1>
         
         <span className="font-medium text-slate-500">COMPANY OVERVIEW</span>

       <span className="max-w-[500px] text-white">The Global Performance Arts Alliance is a visionary project led by Solange Urdang 
         and an accomplished team boasting extensive expertise in dance, theatre, and performing 
         arts education. Our aim is to harness creativity and innovation on a global scale, as we 
         endeavor to bring the finest West End training to the world.
         </span>
         </div>
         <div className="flex flex-col px-6">
         <span className="font-medium text-slate-500">RESULTS</span>

       <span className="max-w-[500px] text-white">We aimed to attract a younger demographic 
         and ensure the identity's longevity. Additionally, we overhauled the website's 
         UX/UI using WordPress Elementor. The result is a dynamic brand identity that blends 
         London's prestige with global appeal, accompanied by a user-friendly website ready to 
         engage a worldwide audience, positioning our institution for a thriving future in the 
         performance and dance industry.
         </span>
         </div>
         </div>
         
      </div>
      
<div className="m-screen h-screen w-screen overflow-hidden">
<Image 
  src={gpaalogo}
  className="object-cover block"
  placeholder="blur"
  quality={100}
  height={2000}
  sizes="100vw"
  />
</div>

<div className="h-[130vh] flex">
<div className="w-1/2 p-12">
<Image 
  src={gpaawall}
  className="object-cover block"
  placeholder="blur"
  quality={100}
  height={1200}
  sizes="100vw"
  />

</div>
<div className="w-1/2 p-12 h-full flex flex-col-reverse">
<Image 
  src={gpaabc}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={600}
  sizes="100vw"
  />

</div>
</div>

<div className="h-auto py-24 flex">


<div className="m-screen h-screen w-screen overflow-hidden">
<Image 
  src={gpaaweb}
  className="object-cover block"
  placeholder="blur"
  quality={100}
  height={2000}
  sizes="100vw"
  />
</div>


</div>
        
      </main>
    )
  }