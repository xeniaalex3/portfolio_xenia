"use client";
import { OrbitingCircles } from "../ui/orbiting-circules";
import { BiLogoTypescript } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import {
  FaNode,
  FaReact,
} from "react-icons/fa6";
import { RiJavascriptFill, RiHtml5Fill } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss, SiMui, SiNestjs } from "react-icons/si";

function Home(){
  return(
    <section className="flex flex-row justify-center items-center gap-[25rem] mt-14">
      <div className="">
        <h1 className="text-2xl font-[var(--font-secondary)] bg-linear-65 from-[var(--primary-color)] to-[var(--secondary-color)] inline-block text-transparent bg-clip-text">Hi, I&apos;m Xenia</h1>
      </div>
      <div className="relative flex px-20 lg:h-[500px] h-[330px] w-[400px]  flex-col items-center justify-center overflow-hidden ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center lg:text-5xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
              Skills
            </span>

            <OrbitingCircles iconSize={40}>
              <BiLogoTypescript className="text-sky-600 lg:text-8xl text-3xl" />
              <FaNode className="text-lime-500 lg:text-8xl text-3xl" />
              <FaReact className="text-sky-500 lg:text-8xl text-3xl" />
              <SiNestjs className="dark:text-red-500 text-red-500 lg:text-8xl text-3xl" />
              <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
              <SiNextdotjs className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
              <SiMui className="text-sky-600 lg:text-8xl text-3xl" />
              <RiJavascriptFill className="text-yellow-500 lg:text-8xl text-3xl" />
            </OrbitingCircles>

            <OrbitingCircles iconSize={30} radius={100} reverse={true} speed={2}>
              <FaReact className="text-sky-500 lg:text-8xl text-3xl" />
              <RiHtml5Fill className="text-orange-500 lg:text-8xl text-3xl" />
              <BiLogoTypescript className="text-sky-600 lg:text-8xl text-3xl" />
              <RiJavascriptFill className="text-yellow-500 lg:text-8xl text-3xl" />
              <FaNode className="text-lime-500 lg:text-8xl text-3xl" />
              <DiCss3 className="dark:text-sky-500 text-sky-500 lg:text-8xl text-3xl" />
              <SiNextdotjs className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
              <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
            </OrbitingCircles>
          </div>
          
    </section>
  )
}

export default Home;