import { StaticImageData } from "next/image";

export interface ProjectCardWrapperProps {
  id: number;
  image?: StaticImageData;
  title?: string;
  width?: number;
  height?: number;
  github_link?: string;
  demo?: string;
  className?: string;
  technos: string[];
}

export interface CardWrapperProps {
  imageSrc?: string;
  text?: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface DetailProjectProps {
  id: number | string;
  title: string;
  description?: string;
  image: StaticImageData;
  technos: string[];
  github_link?: string;
  demo?: string;
  features: string[];
}