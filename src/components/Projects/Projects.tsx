import { ProjectsData } from '@/data/projects_data'
import ProjectCardWrapper from '../ui/ProjectCard/ProjectCardWrapper'

function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center w-[83rem] mx-auto mb-[7rem]"
      id="projects"
    >
      <h2 className="text-[var(--secondary-color)] font-semibold text-3xl mb-18">
        Projects
      </h2>
      <div className="grid grid-cols-3 gap-x-15">
        {ProjectsData.map(item => {
          return (
            <ProjectCardWrapper
              key={item.title}
              title={item.title}
              image={item.image}
              width={450}
              height={450}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
