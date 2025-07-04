'use client'

import Image from 'next/image'
import { ProjectCardWrapperProps } from '@/@types/wrapper'
import CustomButton from '../Form/Button/CustomButton'
import { IoLogoGithub } from 'react-icons/io'
import { RiShareBoxFill } from 'react-icons/ri'
import { HiViewGridAdd } from 'react-icons/hi'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'

function ProjectCardWrapper({
  id,
  title,
  image,
  width,
  height,
  className,
  github_link,
  demo,
  technos
}: ProjectCardWrapperProps) {
  const router = useRouter()

  const handleGithubClick = () => window.open(github_link, '_blank')
  const handleDemoClick = () => window.open(demo, '_blank')
  const handleDetailsClick = () => router.push(`/projects/${id}`)

  return (
    <div className="flex flex-col xl:w-[26rem] xl:h-[32rem] lg:w-[26rem] lg:h-[35rem] md:w-[39rem] md:h-[35rem] xs:w-[22rem] bg-[var(--surface-secondary)] rounded-lg shadow-lg cursor-pointer border border-transparent hover:border-[var(--secondary-color)]">
      {/* Image Wrapper */}
      <div className="w-full h-full overflow-hidden box-border">
        <Image
          src={image as StaticImageData}
          alt={title as string}
          width={width}
          height={height}
          className={`${className} w-full h-full`}
        />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col px-4 py-4.5">
        <h3 className="text-lg font-semibold text-[var(--text-base)] mb-3">
          {title}
        </h3>
        <h3 className="text-base font-medium text-[var(--text-base)] mb-3">
          Technologies :
        </h3>
        <div className="flex md:flex-row xs:flex-wrap  justify-start items-center gap-2 mb-2">
          {technos?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-[var(--surface-primary)] text-[var(--text-base)] text-sm px-3 py-2 rounded-lg"
            >
              {tech}
            </span>
          ))}
          {technos && technos.length > 3 && (
            <span className="text-sm text-[var(--text-base)] md:ml-2 xs:ml-1">
              +{technos.length - 3} more
            </span>
          )}
        </div>
        <hr className="my-2 border-t border-[var(--text-base)]" />
        <div className="flex md:flex-row xs:flex-wrap gap-4 mt-2">
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
          <CustomButton
            text="Details"
            color="violet"
            type="button"
            icon={<HiViewGridAdd className="ml-2 w-5" />}
            customCss="!w-[6.5rem] !h-[2.5rem]"
            onClick={handleDetailsClick}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCardWrapper
