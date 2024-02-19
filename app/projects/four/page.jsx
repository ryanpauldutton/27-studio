'use client'
import ProjectBody from "../../../components/ProjectBody";
import Link from "next/link";
import Image from "next/image";
import mainimg from "/public/images/hc-main.jpg";
import img2 from "/public/images/hcphone.jpg";
import img3 from "/public/images/p3cl-screen-two.png";
import img4 from "/public/images/p3cl-screen-three.png";
import img5 from "/public/images/p3cl-imacpro.jpg";
import img6 from "/public/images/p3cl-macbook-table.jpg";
import Rounded from '/common/RoundedButton';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';

export default function ProjectOne({ }) {

  useEffect(() => {
    hotjar.initialize(3747144, 6)
  }, [])

  return (
    <main>
      <div className="bg-slate-300">
        <div className="flex flex-col bg-slate-300">

          <div className="flex-col w-full bg-slate-300">

            <div className="flex flex-col mt-0 p-2 pt-20 pb-20">
              <div className="flex justify-between">
                <h1 className="font-semibold text-6xl text-gray-700">HIGHER CAPITAL</h1>
                <a className=" transition-all underline hover:font-bold text-slate-800" href="https://highercapital.co.uk/">VIEW LIVE PROJECT</a>
              </div>
            </div>



            <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">

              <div className="flex place-content-start flex-col">

                <span className="font-medium  text-slate-400">INVOLVEMENT</span>
                <span className="text-slate-800 text-p"> UI/UX Design<br />Development</span>
              </div>

              <div className="flex flex-col">
                <h1 className="font-semibold text-6xl"></h1>
                <span className="font-medium text-slate-400">COMPANY OVERVIEW</span>
                <span className=" text-p text-slate-800">Higher Capital Consulting is a dynamic force in the realm of real estate recruitment, driven by a clear vision to consistently exceed client expectations. With a profound mastery of both recruitment and real estate, our team facilitates genuine collaboration, offers insightful consultation, and grants access to a reservoir of top-tier talent.
                </span>

               
              </div>



            </div>
          </div>



        </div>

        <div className="m-screen h-screen w-screen overflow-hidden bg-slate-300">
          <Image
            src={mainimg}
            className="object-cover block"
            placeholder="blur"
            quality={100}
            height={2000}
            sizes="100vw"
          />
        </div>

        <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">


          <div className="flex flex-col px-8 py-20">
            <span className="font-medium text-slate-400">RESULTS</span>

            <span className="text-xl text-slate-800 ">Working closely with Chris, the head of Higher Capital, I spearheaded a comprehensive overhaul of their online presence. The result is a cutting-edge and minimalist web design that not only reflects the company's forward-thinking approach but also enhances user engagement and navigation. This redesign involved meticulous attention to detail, from refining the user interface to optimizing the user experience. The end product is a visually striking and user-friendly website that effectively communicates Higher Capital's expertise in real estate recruitment.
                  
             </span>
            </div>
          </div>

        <div className="h-[130vh] flex bg-slate-300">
          <div className="w-1/2 p-12">
            <Image
              src={img2}
              className="object-cover block"
              placeholder="blur"
              quality={100}
              height={1200}
              sizes="100vw"
            />

          </div>
          <div className="w-1/2 p-12 h-full flex flex-col-reverse items-end">


            <div className="overflow-hidden flex-col align-top">
              <video muted autoPlay loop style={{ width: '100vw', height: 'auto' }}>
                <source src="/video/highercap.mp4" type="video/mp4" />
              </video>
            </div>



          </div>


        </div>
        <a href="/projects/five">
          <div className="flex justify-center p-10 bg-slate-300">
            <Rounded>
              <p>view next project</p>
            </Rounded>
          </div>
        </a>

      </div>
    </main>
  )
}