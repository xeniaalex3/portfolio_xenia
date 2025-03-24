import Image from "next/image";

function About() {
  return (
    <section className="w-[83rem] h-[27rem] bg-[var(--surface-primary)] mx-auto mt-[13rem] mb-[7rem] flex items-center justify-between">
      <div className="flex justify-center w-2/5">
        <Image src="/image-about.svg" alt="image in section about" width={350} height={350}/>
      </div>
      <div className="w-[55%] flex flex-col justify-center pr-7.5 py-8">
      <h2 className="text-[var(--secondary-color)] font-semibold text-xl mb-6">
        About me
      </h2>
      <p className="text-[var(--text-base)] text-base font-normal mb-3">I am a dedicated front-end developer with a strong passion for crafting high-quality web applications. I primarily work with React.js and TypeScript to create scalable and maintainable user interfaces. My expertise includes developing modern web applications using Next.js for server-side rendering and static site generation, ensuring fast performance and great SEO.</p>
      <p className="text-[var(--text-base)] text-base font-normal mb-3">Tailwind CSS is my go-to for building responsive, customizable, and visually appealing designs. I believe in writing clean, efficient code while focusing on the user experience to make sure my applications are not only functional but also delightful to use. My goal is to combine the power of these technologies to create seamless and engaging digital solutions.</p>
      <p className="text-[var(--text-base)] text-base font-normal">Outside of coding, I enjoy staying updated with the latest web development trends and experimenting with new tools and frameworks. I’m always excited to learn new things, solve complex problems, and collaborate with other developers and designers to bring ideas to life.</p>
      </div>
    </section>
  )
}

export default About;
