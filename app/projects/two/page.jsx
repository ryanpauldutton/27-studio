'use client'
import ProjectBody from "../../../components/ProjectBody"
import Link from "next/link"

export default function ProjectOne({}) {
    return (
      <main>
       <div className=" flex">
       
        <div className="flex flex-col mt-20 p-6 w-1/4"><div className="h-24">
          <h1 className="font-semibold text-6xl">GPAA</h1>
          </div><span className="font-medium text-slate-500">CLIENT</span><span>GPAA</span></div>
        <div className="flex flex-col mt-20 p-6 w-1/4">
          <div className="h-24"><h1 className="font-semibold text-6xl"></h1></div>
          <span className="font-medium text-slate-500">INVOLVEMENT</span>
          <span>Branding <br></br> UI/UX Design</span></div>

        <div className="flex flex-col mt-20 p-6 w-1/2">
          <div className="h-24"><h1 className="font-semibold text-6xl"></h1>
          </div><span className="font-medium text-slate-500">RESULTS</span>

        <span>We developed a Identity that spoke to the international market, that also fit in with the other brands
          that belong to the Dang company group
          </span></div>
          
       </div>
       <div className="h-screen flex flex-col w-1/2 p-6"><span>Some writing notes</span><br />
       <span>noomo agency example <br /><br />
      By leveraging the capabilities of Webflow and incorporating smooth on-scroll 3D animations,
      we have transformed the OrCAD website into an immersive and interactive experience.
      The revamped website now offers a visually appealing design and seamless functionality,
      resulting in improved user engagement and satisfaction.</span><br /><span>Unseen Studio</span><br />
      <span>We reimagined the True Staging branding completely, working with them on their strategy
         and transforming their visual identity across print and digital</span>
         
         <br /><br />
<span>
         We created a contemporary new look for Lewa House, while carefully preserving its rustic and authentic charm
         </span>
         <br /><br />
         <span>
         The full scope of this project involved a total rethink of the Lewa House identity and online presence.
         We worked closely with the Lewa House team to evolve their brand,
         maintaining the essence of what makes Lewa so special, whilst giving it a more contemporary
         feel in order to appeal to a wider audience.
         </span>
        <br />
        <span>
        Along with creating a new logo mark and introducing a more refined suite of typography,
        we carefully selected a new set of brand colours featuring warm and earthy tones,
        inspired by the vibrant Lewa landscape. This was supported by hand drawn elements
        to add to the rugged charm of the brand, which aimed to emulate the unique
        experience they offer as a travel destination.
        </span>
        
        </div>

        
      </main>
    )
  }