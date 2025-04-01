'use client'

import CustomButton from '@/components/ui/Form/Button/CustomButton'
import { ProjectDetailsData } from '@/data/projects_data'
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { IoLogoGithub } from 'react-icons/io'
import { RiShareBoxFill } from 'react-icons/ri'

export interface DetailsProjectProps {
  project: string
}

function DetailsProject({ project }: DetailsProjectProps) {
  const router = useRouter()

  const selectedProject = ProjectDetailsData.find(
    item => item.id === Number(project)
  )

  const handelBackClick = () => {
    router.back()
  }

  if (!selectedProject) {
    return <p className="text-center text-red-500">Project not found</p>
  }

  const handleGithubClick = () => selectedProject?.github_link && window.open(selectedProject.github_link, '_blank')
const handleDemoClick = () => selectedProject?.demo && window.open(selectedProject.demo, '_blank')


  return (
    <section className="flex flex-col mx-auto w-[75rem]">
      <CustomButton
        type="button"
        text="Back"
        icon={<FaArrowLeft className="ml-2 w-5" />}
        color="violet"
        onClick={handelBackClick}
        customCss="!w-[6rem] !text-sm !font-normal"
      />

      <div key={selectedProject.id} className="mt-[7rem]">
        <div className="w-[50%] h-[30%] overflow-hidden box-border mb-6">
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            width={100}
            height={100}
            className="w-full h-full object-fill"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          {selectedProject.title}
        </h2>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Description :</h3>
        <p className='text-base font-medium text-[var(--text-secondary)] w-[60%] mb-4'>{selectedProject.description}</p>
        <div>
          <h3 className='text-lg font-semibold text-[var(--text-primary)] mb-4'>Technologies used :</h3>
          <ul className='mb-4'>
            {selectedProject.technos.map(tech => (
              <li key={tech} className='ml-4'>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-4">
          <CustomButton
            text="Github"
            color="violet"
            type="button"
            icon={<IoLogoGithub className="ml-2 w-5" />}
            customCss="!w-[6.5rem] !h-[2.5rem]"
            onClick={handleGithubClick}
          />
          <CustomButton
            text="Live"
            color="violet"
            type="button"
            icon={<RiShareBoxFill className="ml-2 w-5" />}
            onClick={handleDemoClick}
            customCss="!w-[6.5rem] !h-[2.5rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default DetailsProject
