'use client'
import ProjectBody from "../../../components/ProjectBody";
import Link from "next/link";
import Image from "next/image";
import jsimageone from "/public/images/JS-imac.jpg";
import mobileone from "/public/images/js-mobile-3.png";
import mobiletwo from "/public/images/js-mobile-2.png";
import mobilethree from "/public/images/js-mobile-1.png";
import p3climac from "/public/images/p3cl-imacpro.jpg";
import p3clmacbooktable from "/public/images/p3cl-macbook-table.jpg";
import Rounded from '/common/RoundedButton';

export default function ProjectOne({}) {
    return (
      <main className="bg-slate-300">
       <div className="flex-col w-full">
       
        <div className="flex flex-col mt-0 p-2 pt-20 pb-40 bg-green-950">
          <div className="flex justify-between">
          <h1 className="font-semibold text-6xl text-white">JACK SOLOMONS</h1>
          <a className="text-white transition-all hover:font-bold" href="www.jacksolomons.com">LIVE PROJECT</a>
          </div>
          </div>

          <div className="flex px-2 justify-start content-start w-full py-10 bg-green-950">
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
      
<div className="overflow-hidden flex-col align-top">
<video muted autoPlay loop style={{ width: '100vw', height: 'auto' }}>
<source src="/video/js-macbook-2.mp4" type="video/mp4"/>
      </video>
</div>

<div className="h-[130vh] flex">
<div className="w-1/2 p-2  py-20">
<Image 
  src={p3clmacbooktable}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={1200}
  sizes="100vw"
  />

</div>
<div className="w-1/2 p-2 h-full items-end flex flex-col justify-end">
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
<div className="w-1/3 p-2 flex justify-start">
<Image 
  src={mobileone}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={700}
  sizes="100vw"
  />

</div>
<div className="w-1/3 p-2 flex justify-center">
<Image 
  src={mobiletwo}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={700}
  sizes="100vw"
  />

</div>
<div className="w-1/3 p-2 flex justify-end drop-shadow-md">
<Image 
  src={mobilethree}
  className="object-cover block"
  placeholder="blur"
  quality={100}
  height={700}
  sizes="100vw"
  />

</div>
</div>
<a href="/projects/two">
<div className="flex justify-center p-10">
<Rounded>
                            <p>view next project</p>
                        </Rounded>
                        </div>
                        </a>
        
      </main>
    )
  }