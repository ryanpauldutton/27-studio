'use client'


export default function ProjectOne() {
    return (
      <main className="flex flex-col f-screen bg-slate-200 w-full align-middle min-h-screen">
        <img className="w-full object-cover h-1/4" src="/gpaa-main.jpg"/>
        <div className="flex px-4 py-12">
          <div className="flex flex-col w-1/2 justify-between">
            <div>
   <p className="text-sm font-semibold text-gray-400">CLIENT</p>
   <h1 className="relative font-medium text-3xl">Global Performing Arts Alliance
   </h1>
   </div>
   <div>
   <p className="text-sm font-semibold text-gray-400 mt-4">DISIPLINES</p>
   <ul className="relative font-normal text-lg py-0">
    <li>Branding</li>
    <li>Web Design</li>
    <li>Social Media</li>
   </ul>
   </div>
   </div>
   <div className="relative w-1/2">
   <p className="text-sm font-semibold text-gray-400">OVERVIEW</p>
   <h2 className="relative">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
   </div>
   </div>
   <div className="bg-gradient-to-r bg-stone-800 h-screen"></div>
      </main>
    )
  }