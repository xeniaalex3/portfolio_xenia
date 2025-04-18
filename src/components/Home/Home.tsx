'use client'
import { OrbitingCircles } from '../ui/Orbiting/Orbiting-circules'
import { BiLogoTypescript } from 'react-icons/bi'
import { DiCss3 } from 'react-icons/di'
import { FaNode, FaReact } from 'react-icons/fa6'
import { RiJavascriptFill, RiHtml5Fill } from 'react-icons/ri'
import { SiNextdotjs, SiTailwindcss, SiMui, SiNestjs } from 'react-icons/si'
import SparklesText from '@/components/ui/Sparkles/SparklesText'

function Home() {
  return (
    <section className="flex xl:flex-row justify-center items-center 2xl:gap-[21rem] xl:gap-[10rem] lg:gap-[1rem] lg:flex-row md:flex-col sm:flex-col xs:flex-col md:gap-[5rem] lg:mt-14 md:mt-20 xs:mt-5">
      <div className="lg:w-[35rem] md:w-[39rem] sm:w-[22rem] xs:w-[22rem]">
        <h1 className="font-semibold md:text-4xl sm:text-2xl xs:text-xl bg-linear-65 from-[var(--primary-color)] to-[var(--secondary-color)] inline-block text-transparent bg-clip-text mb-4">
          Hi, I&apos;m Xenia
        </h1>
        <h2 className="text-[var(--text-primary)] font-medium mb-4 text-lg">
          I&apos;m a{' '}
          <span className="text-[var(--primary-color)]">
            Front-End Developer
          </span>{' '}
          specializing in building modern, fast, and responsive web
          applications.
        </h2>
        <p className="text-[var(--text-secondary)] text-base font-normal">
          I work with React.js, TypeScript, Next.js, and Tailwind CSS to create
          sleek and user-friendly digital experiences.
        </p>
        <SparklesText
          className="text-[var(--text-secondary)] text-base font-normal mt-3"
          text="Let's build something amazing together !"
        />
      </div>
      <div className="relative lg:flex px-20 lg:h-[500px] h-[330px] w-[400px] flex-col items-center justify-center overflow-hidden md:hidden sm:hidden xs:hidden">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center lg:text-5xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Skills
        </span>

        <OrbitingCircles iconSize={40}>
          <BiLogoTypescript className="text-sky-600 lg:text-8xl text-3xl" />
          <FaNode className="text-lime-500 lg:text-8xl text-3xl" />
          <FaReact className="text-sky-500 lg:text-8xl text-3xl" />
          <SiNestjs className="dark:text-red-500 text-red-500 lg:text-8xl text-3xl" />
          <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
          <SiNextdotjs className="text-[var(--text-primary)] lg:text-8xl text-3xl" />
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
          <SiNextdotjs className="text-[var(--text-primary)] lg:text-8xl text-3xl" />
          <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
        </OrbitingCircles>
      </div>
    </section>
  )
}

export default Home
