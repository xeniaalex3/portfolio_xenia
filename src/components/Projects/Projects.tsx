import { ProjectsData } from '@/data/projects_data'
import ProjectCardWrapper from '../ui/ProjectCard/ProjectCardWrapper'

function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center 2xl:w-[83rem] xl:w-[70rem] lg:w-[55rem] md:w-[39rem] sm:w-[23rem] xs:w-[23rem] mx-auto mb-[7rem] "
      id="projects"
    >
      <h2 className="text-[var(--secondary-color)] font-semibold text-3xl mb-18">
        Projects
      </h2>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 gap-x-10 md:grid-cols-1 lg:gap-y-0 md:gap-y-16 sm:gap-y-16 xs:gap-y-16">
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
              technos={item.technos}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
