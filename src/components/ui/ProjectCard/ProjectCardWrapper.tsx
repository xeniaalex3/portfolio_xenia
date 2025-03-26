import Image from "next/image";
import { ProjectCardWrapperProps } from "@/@types/wrapper";
import CustomButton from "../Form/Button/CustomButton";
import { StaticImageData } from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { RiShareBoxFill } from 'react-icons/ri'

function ProjectCardWrapper({ title, image, width, height, className}: ProjectCardWrapperProps){
  return(
    <div className="flex flex-col justify-self-start items-start w-[27rem] bg-[var(--surface-secondary)] gap-8">
    <Image src={image as StaticImageData} alt={title as string} width={width} height={height} className={className}/>
    <h3 className="text-lg font-semibold text-[var(--text-base)] ml-4">{title}</h3>
    <div className="flex flex-row gap-6 pl-4 pb-4">
    <CustomButton 
    text="Github"
    color="violet"
    type="button"
    icon={<IoLogoGithub className="ml-4 w-5"/>}
    customCss="!w-[8rem] !h-[3rem]"
    />
    <CustomButton 
    text="Live Demo"
    color="violet"
    type="button"
    icon={<RiShareBoxFill className="ml-4"/>}
    />
    </div>
   
    </div>
  )
}

export default ProjectCardWrapper;