'use client'

import Image from "next/image";
import mainimg from "public/images/P3CL-Web.jpg";
import p3clmobileone from "/public/images/p3cl-screen-one.png";
import p3clmobiletwo from "/public/images/p3cl-screen-two.png";
import p3clmobilethree from "/public/images/p3cl-screen-three.png";
import p3climac from "/public/images/p3cl-imacpro.jpg";
import p3clmacbooktable from "/public/images/p3cl-macbook-table.jpg";
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';

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
              <h1 className="font-semibold text-6xl ">P3CL</h1>
              <a className=" transition-all underline hover:font-bold text-slate-800" href="https://p3cl.co.uk/">VIEW LIVE PROJECT</a>
            </div>
          </div>

          <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">

            <div className="flex place-content-start flex-col">

              <span className="font-medium  text-slate-400">INVOLVEMENT</span>
              <span className="text-slate-800 text-p"> UI/UX Design<br />Development<br />Wordpress</span>
            </div>

            <div className="flex flex-col">
              <h1 className="font-semibold text-6xl"></h1>
              <span className="font-medium text-slate-400">COMPANY OVERVIEW</span>
              <span className=" text-p text-slate-800">P3CL is a groundbreaking initiative spearheaded by industry trailblazers, a distinguished team with unparalleled expertise in construction, talent management, and women's leadership. There mission is to revolutionize the construction industry by unleashing talent potential, fostering virtual HR excellence, and empowering women in leadership roles.
              </span>


            </div>



          </div>





        </div>




      </div>
      <div className="m-screen h-auto w-screen overflow-hidden bg-slate-300">
        <Image
          src={mainimg}
          className="object-cover block"
          placeholder="blur"
          quality={100}
          height={2000}
          sizes="100vw"
        />
      </div>

      <div className="grid p-2 bg-slate-300 grid-cols-1 gap-8 pb-8 md:grid-cols-2">


        <div className="flex flex-col px-8 py-20">
          <span className="font-medium text-slate-400">RESULTS</span>

          <span className="text-xl text-slate-800 ">The website prioritizes a sleek, user-focused design, featuring intuitive navigation, mobile responsiveness, and high-quality visuals. Interaction and animation are key elements, ensuring an engaging user experience.
          </span>
        </div>
      </div>

      <div className="h-auto flex bg-slate-300">
        <div className="w-1/2 px-2">
          <Image
            src={p3clmacbooktable}
            className="object-cover block"
            placeholder="blur"
            quality={100}
            height={1200}
            sizes="100vw"
          />

        </div>
        <div className="w-1/2 px-2 h-100 flex flex-col flex-col-reverse">
          <div className="overflow-hidden flex-col align-top">
            <video autoPlay loop muted style={{ width: '100vw', height: 'auto' }}>
              <source src="/video/peoplecon.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </div>

    </main>
  )
}