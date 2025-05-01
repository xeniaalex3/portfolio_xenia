import { SkillsDataFrontJson } from '@/data/skills_data';
import { SkillsDataBackJson } from '@/data/skills_data';
import { SkillsDataToolsJson } from '@/data/skills_data';
import CardWrapper from '../ui/Cards/CardWrapper/CardWrapper';

function Skills() {
  return (
    <section className="flex flex-col justify-center items-center 2xl:w-[83rem] xl:w-[70rem] lg:w-[58rem] mx-auto mb-[8rem] md:w-[39rem] sm:w-[23rem] xs:w-[22rem]" id="skills">
      <h2 className="text-[var(--secondary-color)] font-semibold text-3xl mb-18">
        Skills
      </h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 2xl:gap-x-26 xl:gap-x-15 lg:gap-x-18 md:grid-cols-1 xl:gap-y-0 lg:gap-y-9 md:gap-y-16 xs:gap-y-14">
        <div className='flex flex-col justify-center items-center'>
          <h3 className="text-[var(--secondary-color)] font-medium text-[1.17rem] mb-6">
            Front-end
          </h3>
          <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-y-4 xs:grid-cols-2 xs:gap-x-10 xs:gap-y-7">
            {SkillsDataFrontJson.map(skill => {
              return (
                <CardWrapper
                  key={skill.title}
                  imageSrc={skill.imageLink}
                  text={skill.title}
                  width={50}
                  height={50}
                />
              )
            })}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h3 className="text-[var(--secondary-color)] font-medium text-[1.17rem] mb-6">
            Back-end
          </h3>
          <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-y-4 xs:grid-cols-2 xs:gap-x-10 xs:gap-y-7">
            {SkillsDataBackJson.map(skill => {
              return (
                <CardWrapper
                  key={skill.title}
                  imageSrc={skill.imageLink}
                  text={skill.title}
                  width={50}
                  height={50}
                  className="!text-[var(--text-primary)]"
                />
              )
            })}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h3 className="text-[var(--secondary-color)] font-medium text-[1.17rem] mb-6">Tools</h3>
          <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-y-4 xs:grid-cols-2 xs:gap-x-10 xs:gap-y-7">
            {SkillsDataToolsJson.map(skill => {
              return (
                <CardWrapper
                  key={skill.title}
                  imageSrc={skill.imageLink}
                  text={skill.title}
                  width={50}
                  height={50}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
