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
                            <span className=" text-p text-slate-800">A self initiated project in order to show my skill set for your position at Conductor. I choose to reimagine the Trek Project One bike configuration website design. As I own a Trek and really enjoy the design and manufacturing of there bikes and I felt that there configuration website has room for improvement.
                            </span>

                            <div className="flex flex-col pt-8">
                                <span className="font-medium text-slate-400">RESULTS</span>

                                <span className="text-p text-slate-800">I created a more modern and interesting UX/UI Design and used After Effects to create a prototype of the motion design that could be developed for the site.
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