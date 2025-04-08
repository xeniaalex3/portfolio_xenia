import { ProjectsData } from '@/data/projects_data'
import ProjectCardWrapper from '../ui/ProjectCard/ProjectCardWrapper'

function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center lg:w-[83rem] md:w-[39rem] mx-auto mb-[7rem]"
      id="projects"
    >
      <h2 className="text-[var(--secondary-color)] font-semibold text-3xl mb-18">
        Projects
      </h2>
      <div className="grid lg:grid-cols-3 gap-x-10 md:grid-cols-1 lg:gap-y-0 md:gap-y-16">
        {ProjectsData.map(item => {
          return (
            <ProjectCardWrapper
              key={item.id}
              id={item.id}
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
