"use client";

import Image from "next/image";
import { ProjectCardWrapperProps } from "@/@types/wrapper";
import CustomButton from "../Form/Button/CustomButton";
import { IoLogoGithub } from "react-icons/io";
import { RiShareBoxFill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { StaticImageData } from 'next/image'
import { useRouter } from "next/navigation";

function ProjectCardWrapper({
  id,
  title,
  image,
  width,
  height,
  className,
  github_link,
  demo,
}: ProjectCardWrapperProps) {
  const router = useRouter();

  const handleGithubClick = () => window.open(github_link, "_blank");
  const handleDemoClick = () => window.open(demo, "_blank");
  const handleDetailsClick = () => router.push(`/projects/${id}`);

  return (
    <div className="flex flex-col w-[26rem] h-[25rem] bg-[var(--surface-secondary)] rounded-lg shadow-lg cursor-pointer">
      {/* Image Wrapper */}
      <div className="w-full h-[18rem] overflow-hidden box-border">
        <Image
          src={image as StaticImageData}
          alt={title as string}
          width={width}
          height={height}
          className={`w-full h-full object-fill ${className}`}
        />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col px-4 py-4.5">
        <h3 className="text-lg font-semibold text-[var(--text-base)] mb-3">{title}</h3>
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
  );
}

export default ProjectCardWrapper;
