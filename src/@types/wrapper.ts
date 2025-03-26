import { StaticImageData } from "next/image";

export interface ProjectCardWrapperProps {
  image?: StaticImageData;
  title?: string;
  width?: number;
  height?: number;
  github_link?: string;
  demo?: string;
}

export interface CardWrapperProps {
  imageSrc?: string;
  text?: string;
  width?: number;
  height?: number;
  className?: string;
}