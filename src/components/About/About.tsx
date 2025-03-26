import Image from "next/image";

function About() {
  return (
    <section className="w-[83rem] h-[27rem] bg-[var(--surface-primary)] mx-auto mt-[13rem] mb-[7rem] flex items-center justify-between shadow-lg rounded-lg" id="about">
      <div className="flex justify-center w-2/5">
        <Image src="/image-about.svg" alt="image in section about" width={330} height={330}/>
      </div>
      <div className="w-[55%] flex flex-col justify-center pr-7.5 py-8">
      <h2 className="text-[var(--secondary-color)] font-semibold text-2xl mb-6">
        About me
      </h2>
      <p className="text-[var(--text-base)] text-base font-medium mb-3">I am a front-end developer passionate about transforming ideas into seamless and engaging digital experiences. I work with React.js, Next.js, TypeScript, and Tailwind CSS to build modern, scalable, and high-performance applications. With Next.js, I ensure fast loading times and optimized SEO, while Tailwind CSS allows me to create elegant and responsive interfaces with agility. My focus is always on performance, usability, and clean code, ensuring that every project is intuitive and efficient.</p>
      <p className="text-[var(--text-base)] text-base font-medium mb-3">More than just writing code, I am driven by curiosity and innovation. I am constantly exploring new trends and tools, seeking to improve my skills and develop solutions that truly make a difference. Solving complex challenges and collaborating with other developers and designers to bring great ideas to life is what motivates me every day. 🚀</p>
      
      </div>
    </section>
  )
}

export default About;
