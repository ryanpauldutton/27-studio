'use client'
import ProjectBody from "../../../components/ProjectBody";
import Link from "next/link";
import Image from "next/image";
import img1 from "/public/images/logo.jpg"
import img2 from "/public/images/wall.jpg"
import img3 from "/public/images/bc.jpg"
import img4 from "/public/images/web.jpg"
import Rounded from '/common/RoundedButton';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';

export default function ProjectOne({ }) {

  useEffect(() => {
    hotjar.initialize(3747144, 6)
  }, [])

  return (
    <main className="bg-slate-300">
      <div className="flex-col w-full">

        <div className="flex w-full mt-0 p-2 pt-20 justify-between">

          <h1 className="font-semibold text-6xl text-slate-800">GPAA</h1>
          <a className=" transition-all underline hover:font-bold" href="https://globalperformingartsalliance.com/">VIEW LIVE PROJECT</a>

        </div>

        <div className="flex px-2 justify-start content-start w-full py-10 bg-slate-300">



          <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">

            <div className="flex place-content-start flex-col">

              <span className="font-medium  text-slate-400">INVOLVEMENT</span>
              <span className="text-slate-800 text-p">Branding<br /> UI/UX Design<br />Development</span>
            </div>

            <div className="flex flex-col">
              <h1 className="font-semibold text-6xl"></h1>
              <span className="font-medium text-slate-400">COMPANY OVERVIEW</span>
              <span className=" text-p text-slate-800">The Global Performance Arts Alliance is a visionary project led by Solange Urdang
                and an accomplished team boasting extensive expertise in dance, theatre, and performing
                arts education. Our aim is to harness creativity and innovation on a global scale, as we
                endeavor to bring the finest West End training to the world.
              </span>

              <div className="flex flex-col pt-8">
                <span className="font-medium text-slate-400">RESULTS</span>

                <span className="text-p text-slate-800">We aimed to attract a younger demographic
                  and ensure the identity's longevity. Additionally, we overhauled the website's
                  UX/UI using WordPress Elementor. The result is a dynamic brand identity that blends
                  London's prestige with global appeal, accompanied by a user-friendly website ready to
                  engage a worldwide audience, positioning our institution for a thriving future in the
                  performance and dance industry.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="m-screen h-screen w-screen overflow-hidden">
        <Image
          src={img1}
          className="object-cover block"
          quality={100}
          height={1920}

          sizes="100vw"
        />
      </div>

      <div className="min-h-[130vh] p-2 grid grid-cols-2">
        <div className="p-2">
          <Image
            src={img2}
            className="object-cover block"
            placeholder="blur"
            quality={100}
            height={1200}

            sizes="100vw"
          />

        </div>
        <div className="p-2 h-full flex flex-col-reverse items-end">
          <Image
            src={img3}
            className="object-cover block "
            placeholder="blur"
            quality={100}
            height={600}
            width={600}
            sizes="100vw"
          />

        </div>
      </div>

      <div className="h-auto py-24 flex">


        <div className="m-screen h-auto w-screen overflow-hidden">
          <Image
            src={img4}
            className="object-cover block"
            placeholder="blur"
            quality={100}
            height={2000}
            sizes="100vw"
          />
        </div>


      </div>
      <a href="/projects/four">
        <div className="flex justify-center p-10">
          <Rounded>
            <p>view next project</p>
          </Rounded>
        </div>
      </a>
    </main>
  )
}