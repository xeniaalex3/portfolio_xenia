import Image from 'next/image'

function About() {
  return (
    <section
      className="2xl:w-[83rem] xl:w-[70rem] lg:w-[58rem] xl:h-[27rem] lg:h-[31rem] md:w-[39rem] md:h-[52rem] sm:w-[23rem] xs:w-[22rem] sm:h-[63rem] xs:h-[50rem] bg-[var(--surface-primary)] mx-auto md:mt-[13rem] xs:mt-[10rem] mb-[7rem] flex items-center lg:justify-between md:justify-evenly shadow-lg rounded-lg md:flex-col-reverse lg:flex-row xl:flex-row sm:flex-col-reverse xs:flex-col-reverse"
      id="about"
    >
      <div className="flex justify-center w-2/5 md:mb-0 xs:mb-4 md:mt-0 xs:mt-2">
        <Image
          src="/image-about.svg"
          alt="image in section about"
          width={330}
          height={330}
        />
      </div>
      <div className="lg:w-[55%] md:w-[76%] flex flex-col justify-center md:pr-7.5 md:py-8  md:px-0 xs:px-5">
        <h2 className="text-[var(--secondary-color)] font-semibold text-2xl mb-6">
          About me
        </h2>
        <p className="text-[var(--text-base)] md:text-base font-medium mb-3">
          I am a front-end developer passionate about transforming ideas into
          seamless and engaging digital experiences. I work with React.js,
          Next.js, TypeScript, and Tailwind CSS to build modern, scalable, and
          high-performance applications. With Next.js, I ensure fast loading
          times and optimized SEO, while Tailwind CSS allows me to create
          elegant and responsive interfaces with agility. My focus is always on
          performance, usability, and clean code, ensuring that every project is
          intuitive and efficient.
        </p>
        <p className="text-[var(--text-base)] text-base font-medium mb-3">
          More than just writing code, I am driven by curiosity and innovation.
          I am constantly exploring new trends and tools, seeking to improve my
          skills and develop solutions that truly make a difference. Solving
          complex challenges and collaborating with other developers and
          designers to bring great ideas to life is what motivates me every day.
          🚀
        </p>
      </div>
    </section>
  )
}

export default About
