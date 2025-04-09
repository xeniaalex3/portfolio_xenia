'use client'

import { Suspense } from 'react'
import CustomButton from '@/components/ui/Form/Button/CustomButton'
import { ProjectDetailsData } from '@/data/projects_data'
import { FaArrowLeft } from 'react-icons/fa'
import Image from 'next/image'
import { IoLogoGithub } from 'react-icons/io'
import { RiShareBoxFill } from 'react-icons/ri'
import MagicButton from '@/components/ui/Form/MagicButton'
import { useParams, useRouter } from "next/navigation";

function DetailsProject() {
  const { projectId } = useParams();
  const router = useRouter()

  const selectedProject = ProjectDetailsData.find(
    item => item.id === Number(projectId)
  )

  const handelBackClick = () => {
    router.back()
  }

  if (!selectedProject) {
    return <p className="text-center text-red-500">Project not found</p>
  }

  const handleGithubClick = () =>
    selectedProject?.github_link &&
    window.open(selectedProject.github_link, '_blank')
  const handleDemoClick = () =>
    selectedProject?.demo && window.open(selectedProject.demo, '_blank')

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex flex-col mx-auto xl:w-[75rem] md:w-[35rem] lg:w-[50rem] sm:w-[25rem] sm:mx-auto">
        <CustomButton
          type="button"
          text="Back"
          icon={<FaArrowLeft className="ml-2 w-5" />}
          color="violet"
          onClick={handelBackClick}
          customCss="md:!w-[6rem] !text-sm !font-normal mt-4 sm:w-[5rem] sm:text-xs sm:font-light"
        />

        <div key={selectedProject.id} className="mt-[6rem]">
          <div className=" lg:max-w-[40%] md:max-w-[80%] sm:w-[95%] h-auto overflow-hidden rounded-lg shadow-lg box-border mb-6">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={700}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">
            {selectedProject.title}
          </h2>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Description :
          </h3>
          <p className="text-base font-medium text-[var(--text-secondary)] xl:w-[60%] lg:w-[60%] md:w-[70%] sm:w-[90%] mb-6">
            {selectedProject.description}
          </p>

          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 sm:mb-4">
            Technologies used :
          </h3>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-2 sm:place-items-center sm:gap-4">
            {selectedProject.technos.map(tech => (
              <MagicButton key={tech} title={tech} />
            ))}
          </div>
          <hr className="my-10 border-t border-[var(--text-secondary)]" />
          <div className="flex md:flex-row md:justify-start gap-4 mt-8 mb-8 sm:flex sm:flex-row sm:justify-center sm:items-center">
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
    </Suspense>
  )
}

export default DetailsProject
