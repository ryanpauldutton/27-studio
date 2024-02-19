'use client'
import ProjectBody from "../../../components/ProjectBody";
import Link from "next/link";
import Image from "next/image";
import mainimg from "public/images/P3CL-Web.jpg";
import sophiestwo from "/public/images/iphonesophies.webp";
import sophiesthree from "/public/images/sophiesweb.webp";
import sophiesone from "/public/images/sophiesmacbook.webp";
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';
import Rounded from '/common/RoundedButton';

export default function ProjectOne({ }) {

  useEffect(() => {
    hotjar.initialize(3747144, 6)
  }, [])

  return (
    <main>
      <div className="flex flex-col bg-slate-300">

        <div className="flex-col w-full">

          <div className="flex flex-col mt-0 p-2 pt-20 pb-20">
            <div className="flex justify-between">
              <h1 className="font-semibold text-6xl text-orange-950">SOPHIE'S</h1>
              <a className="transition-all underline hover:font-bold" href="https://www.sophiessteakhouse.com/">VIEW LIVE PROJECT</a>
            </div>
          </div>

          <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">

            <div className="flex place-content-start flex-col">

              <span className="font-medium  text-slate-400">INVOLVEMENT</span>
              <span className="text-slate-800 text-p"> UI/UX Design<br />Development<br />Wordpress</span>
            </div>

            <div className="flex flex-col">
              <h1 className="font-semibold text-6xl"></h1>
              <span className="font-medium text-slate-400">PROJECT OVERVIEW</span>
              <span className=" text-p text-slate-800">Sophie's Steakhouse, a distinguished eatery with locations in Soho and Chelsea, entrusted me with a comprehensive UX/UI project aimed at refreshing its online presence. The goal is to seamlessly integrate enhanced functionality with a visually compelling design, in keeping with Sophie's Steakhouse commitment to all-day dining and a refined industrial atmosphere.
              </span>


            </div>



          </div>

        </div>
        <div className="overflow-hidden flex-col align-top">
          <Image
            src={sophiesone}
            className="object-cover block"
            placeholder="blur"
            quality={100}
            height={1200}
            sizes="100vw"
          />
        </div>

        <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">


          <div className="flex flex-col px-8 py-20">
            <span className="font-medium text-slate-400">RESULTS</span>

            <span className="text-xl text-slate-800 ">The redesigned web appearance embodies a seamless blend of simplicity and editorial finesse. Navigational structures are being intuitively reorganized to ensure a smooth user journey, reflecting the effortless sophistication associated with dining at Sophie's Steakhouse. Drawing inspiration from the restaurant's industrial ambiance, my design choices incorporate sleek visuals and intuitive layouts that resonate with the brand's aesthetic.
            </span>
          </div>
        </div>



      </div>

      <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">
        <div className="p-2 py-20">
          <Image
            src={sophiestwo}
            className="object-cover block "
            placeholder="blur"
            quality={100}
            height={1200}
            sizes="100vw"
          />

        </div>
        <div className="p-2 h-full items-end flex flex-col justify-end">
          <Image
            src={sophiesthree}
            className="object-cover block "
            placeholder="blur"
            quality={100}
            height={800}
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