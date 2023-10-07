'use client'
import ProjectBody from "../../../components/ProjectBody";
import Link from "next/link";
import Image from "next/image";
import jsimageone from "/public/images/JS-imac.jpg";
import p3clmobileone from "/public/images/p3cl-screen-one.png";
import p3clmobiletwo from "/public/images/p3cl-screen-two.png";
import p3clmobilethree from "/public/images/p3cl-screen-three.png";
import p3climac from "/public/images/p3cl-imacpro.jpg";
import p3clmacbooktable from "/public/images/p3cl-macbook-table.jpg";

export default function ProjectOne({}) {
    return (
      <main>
       <div className="flex-col w-full">
       
        <div className="flex flex-col mt-0 p-2 pt-20">
          <div>
          <h1 className="font-semibold text-6xl">JACK SOLOMONS</h1>
          </div>
          </div>

          <div className="flex px-2 justify-start content-start w-full py-10">
        <div className="flex place-content-start flex-col w-1/4">
          <h1 className="font-semibold text-6xl"></h1>
          <span className="font-medium text-slate-500">INVOLVEMENT</span>
          <span>Branding <br></br> UI/UX Design</span></div>

        <div className="flex flex-col">
          <h1 className="font-semibold text-6xl"></h1>
          
          <span className="font-medium text-slate-500">COMPANY OVERVIEW</span>

        <span className="max-w-[500px]">The Global Performance Arts Alliance is a visionary project led by Solange Urdang 
          and an accomplished team boasting extensive expertise in dance, theatre, and performing 
          arts education. Our aim is to harness creativity and innovation on a global scale, as we 
          endeavor to bring the finest West End training to the world.
          </span>
          </div>
          <div className="flex flex-col px-6">
          <span className="font-medium text-slate-500">RESULTS</span>

        <span className="max-w-[500px]">We aimed to attract a younger demographic 
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
  src={jsimageone}
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
  src={p3clmacbooktable}
  className="object-cover block"
  placeholder="blur"
  quality={100}
  height={1200}
  sizes="100vw"
  />

</div>
<div className="w-1/2 p-12 h-full flex flex-col-reverse">
<Image 
  src={p3climac}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={600}
  sizes="100vw"
  />

</div>
</div>

<div className="h-auto py-24 flex">
<div className="w-1/3 p-12 flex justify-center">
<Image 
  src={p3clmobileone}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={700}
  sizes="100vw"
  />

</div>
<div className="w-1/3 p-12 flex justify-center">
<Image 
  src={p3clmobiletwo}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={700}
  sizes="100vw"
  />

</div>
<div className="w-1/3 p-12 flex justify-center drop-shadow-md">
<Image 
  src={p3clmobilethree}
  className="object-cover block"
  placeholder="blur"
  quality={100}
  height={700}
  sizes="100vw"
  />

</div>
</div>
        
      </main>
    )
  }