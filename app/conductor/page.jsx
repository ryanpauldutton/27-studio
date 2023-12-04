'use client'
import Image from "next/image";
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
                            <h1 className="font-semibold text-6xl ">CONDUCTOR CONCEPT</h1>
                        </div>
                    </div>

                    <div className="grid p-2 grid-cols-1 gap-8 pb-8 md:grid-cols-2">

                        <div className="flex place-content-start flex-col">

                            <span className="font-medium  text-slate-400">INVOLVEMENT</span>
                            <span className="text-slate-800 text-p"> UI/UX Design<br />After Effects<br />Figma</span>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="font-semibold text-6xl"></h1>
                            <span className="font-medium text-slate-400">PROJECT OVERVIEW</span>
                            <span className=" text-p text-slate-800">Embarking on a self-initiated venture to showcase my skills for the Conductor position, I opted to reimagine the Trek Project One bike configuration website design. Being a Trek owner and admirer of their bike design and manufacturing, I identified areas for enhancement in their configuration website.
                            </span>

                            <div className="flex flex-col pt-8">
                                <span className="font-medium text-slate-400">RESULTS</span>

                                <span className="text-p text-slate-800">I delivered a contemporary and captivating UX/UI Design, complemented by an After Effects prototype for dynamic motion design—a potential evolution for the site.
                                </span>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="overflow-hidden flex-col align-top">
                    <video muted autoPlay loop style={{ width: '100vw', height: 'auto' }}>
                        <source src="/video/treksix.mp4" type="video/mp4" />
                    </video>
                </div>



            </div>


        </main>
    )
}