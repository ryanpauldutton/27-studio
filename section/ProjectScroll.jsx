import { GPAA, LaRosa, ProjectCard, ProjectFour, ProjectThree } from "../components/ProjectCard"
import { ProjectTitle } from "../components/projects/title"
import { projects } from '../constants/index.js'

export default function ProjectScroll() {
  return (
    <div className='flex w-full bg-slate-200-400 items-start p-4 gap-20 z-10'>
       <div className="flex py-[50vh] w-full min-h-fit">
        <ul>
          {projects.map((project) => (
            <li classname="" key={project.id}>
              <ProjectTitle id={project.id}>
                {project.title}
              </ProjectTitle>
              </li>
          ))}
          
        </ul>
        
        </div>
       <div className="sticky w-full flex w-full top-0 h-screen items-center">
        <div className='relative aspect-square w-full rounded-2xl'>
        {projects.map((project) => (
            <project.card id={project.id} key={project.id} />
          ))}
        </div>
       </div>
        </div>

  )
}
