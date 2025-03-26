import Image from 'next/image'
import { ProjectCardWrapperProps } from '@/@types/wrapper'
import CustomButton from '../Form/Button/CustomButton'
import { StaticImageData } from 'next/image'
import { IoLogoGithub } from 'react-icons/io'
import { RiShareBoxFill } from 'react-icons/ri'
import { HiViewGridAdd } from 'react-icons/hi'

function ProjectCardWrapper({
  title,
  image,
  width,
  height,
  className,
  github_link,
  demo
}: ProjectCardWrapperProps) {
  const handleGithubClick = () => {
    window.open(github_link, '_blank')
  }

  const handleDemoClick = () => {
    window.open(demo, '_blank')
  }

  return (
    <div className="flex flex-col justify-self-start items-start w-[27rem] h-[35rem] bg-[var(--surface-secondary)] gap-6">
      <Image
        src={image as StaticImageData}
        alt={title as string}
        width={width}
        height={height}
        className={className}
      />
      <h3 className="text-lg font-semibold text-[var(--text-base)] ml-4">
        {title}
      </h3>
      <div className="flex flex-row gap-4 pl-4 pb-4">
        <CustomButton
          text="Github"
          color="violet"
          type="button"
          icon={<IoLogoGithub className="ml-4 w-5" />}
          customCss="!w-[8rem] !h-[3rem]"
          onClick={handleGithubClick}
        />
        <CustomButton
          text="Live"
          color="violet"
          type="button"
          icon={<RiShareBoxFill className="ml-4" />}
          onClick={handleDemoClick}
        />
        <CustomButton
          text="Details"
          color="violet"
          type="button"
          icon={<HiViewGridAdd className="ml-4" />}
        />
      </div>
    </div>
  )
}

export default ProjectCardWrapper
