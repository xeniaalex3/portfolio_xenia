import Image from 'next/image'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io'
import photo from '@/assets/image/photo.jpg'
import Link from 'next/link'
import TextInput from '../ui/Form/TextInput/TextInput'
import Textarea from '../ui/Form/Textarea/Textarea'
import CustomButton from '../ui/Form/Button/CustomButton'
import { BsArrowRight } from 'react-icons/bs'
import { useToastContext } from '@/context/ToastProvider'

function Contact() {
  const { setToast } = useToastContext();

  


  

  return (
    <section
      className="w-[83rem] h-[26rem] bg-[var(--surface-primary)] mx-auto mt-[13rem] mb-[7rem] flex items-center justify-between shadow-lg rounded-lg"
      id="contact"
    >
      <div className="flex flex-col gap-4 w-2/5 px-10">
        <div className="w-23 h-23 rounded-full overflow-hidden border-2 border-white">
          <Image
            src={photo}
            alt="photo"
            width={67}
            height={67}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h2 className="text-[var(--secondary-color)] font-semibold text-2xl">
          Contact
        </h2>
        <h3 className="font-semibold text-xl text-[var(--text-base)]">
          Enjoyed my work ? Let&apos;s work together
        </h3>

        <p className="font-medium text-base text-[var(--text-base)]">
          I&apos;m always up for a chat. Pop me an email at{' '}
          <span className="text-[var(--secondary-color)]">
            xeniaalex2@gmail.com
          </span>{' '}
          or give me a shout on social media.
        </p>
        <div className="flex flex-row gap-2">
          <Link
            href="https://www.linkedin.com/in/xenia-onescu/"
            className="p-2 bg-[var(--surface-secondary)] rounded-lg w-[4rem] h-[2.5rem] flex flex-row justify-center items-center"
            target="_blank"
          >
            <IoLogoLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/xeniaalex3"
            className="p-2 bg-[var(--surface-secondary)] rounded-lg w-[4rem] h-[2.5rem] flex flex-row justify-center items-center"
            target="_blank"
          >
            <IoLogoGithub size={24} />
          </Link>
        </div>
      </div>
      <div className="w-[55%]">
        <form onSubmit={handleSubmit}>
          <TextInput
            id="firstname"
            placeholder="Name"
            type="text"
           
          />
          <TextInput
            id="email"
            placeholder="E-mail"
            type="text"
           
          />
          <Textarea
            name="message"
            rows={5}
            cols={30}
            placeholder="Your message"
            
          />
          <CustomButton
            type="submit"
            text="Send me a message"
            icon={<BsArrowRight />}
            color="violet"
            onSubmit={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
