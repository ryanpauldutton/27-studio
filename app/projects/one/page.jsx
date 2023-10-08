'use client'
import ProjectBody from "../../../components/ProjectBody";
import Link from "next/link";
import Image from "next/image";
import mobileone from "/public/images/js-mobile-3.png";
import mobiletwo from "/public/images/js-mobile-2.png";
import mobilethree from "/public/images/js-mobile-1.png";
import img2 from "/public/images/jsmacbook1200.jpg";
import img3 from "/public/images/jsimac800.jpg";
import Rounded from '/common/RoundedButton';

export default function ProjectOne({}) {
    return (
      <main className="bg-slate-300">
       <div className="flex-col w-full">
       
        <div className="flex flex-col mt-0 p-2 pt-20 pb-40 ">
          <div className="flex justify-between">
          <h1 className="font-semibold text-6xl text-green-950">JACK SOLOMONS</h1>
          <a className="transition-all underline hover:font-bold" href="https://jacksolomons.com/">VIEW LIVE PROJECT</a>
          </div>
          </div>

          <div className="flex px-2 justify-start content-start w-full py-10 bg-slate-300">
        <div className="flex place-content-start flex-col w-1/4">
          <h1 className="font-semibold text-6xl"></h1>
          <span className="font-medium text-slate-500">INVOLVEMENT</span>
          <span >Development <br></br> UI/UX Design</span></div>

        <div className="flex flex-col">
          <h1 className="font-semibold text-6xl"></h1>
          
          <span className="font-medium ">COMPANY OVERVIEW</span>

        <span className="max-w-[500px] ">Jack Solomons is the epitome of timeless sophistication in the world of nightlife, located in the heart of London. The establishment offers a classic and stylish speakeasy experience like no other, where meticulously crafted cocktails and delectable small plates are served in an artfully decorated space that exudes an air of mystery and sophistication. At Jack Solomons, they celebrate the traditions of the speakeasy with a modern twist, inviting you to unwind, indulge, and create unforgettable moments.
          </span>
          </div>
          <div className="flex flex-col px-6">
          <span className="font-medium ">RESULTS</span>

        <span className="max-w-[500px] ">We aimed at crafting a modern accompanied chic website for Jack Solomons. One of the standout features of the website was the implementation of captivating scroll animations. Leveraging this dynamic design technique, I created an immersive digital experience that perfectly mirrored the speakeasy's ambience. As visitors scrolled through the site, elements gracefully revealed themselves, seamlessly weaving together the venue's history, cocktails, and atmosphere.
          </span>
          </div>
          </div>
          
       </div>
      
<div className="overflow-hidden flex-col align-top">
<video muted autoPlay loop style={{ width: '100vw', height: 'auto' }}>
<source src="/video/js-macbook-2.mp4" type="video/mp4"/>
      </video>
</div>

<div className="h-[130vh] pb-20 flex">
<div className="w-1/2 p-2  py-20">
<Image 
  src={img2}
  className="object-cover block drop-shadow-md"
  placeholder="blur"
  quality={100}
  height={1200}
  sizes="100vw"
  />

</div>
<div className="w-1/2 p-2 h-full items-end flex flex-col justify-end">
<Image 
  src={img3}
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