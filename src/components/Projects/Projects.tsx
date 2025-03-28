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
      <div className="grid grid-cols-3 gap-x-10">
        {ProjectsData.map(item => {
          return (
            <ProjectCardWrapper
              key={item.title}
              title={item.title}
              image={item.image}
              width={500}
              height={600}
              className='h-[60%]'
              github_link={item.github_link}
              demo={item.demo}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
