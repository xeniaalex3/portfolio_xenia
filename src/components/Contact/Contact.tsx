'use client'

import Image from 'next/image'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io'
import photo from '@/assets/image/photo.jpg'
import Link from 'next/link'
import CustomButton from '../ui/Form/Button/CustomButton'
import { BsArrowRight } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { formSchema } from '@/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { send } from '@/utils/email'

type createMessageContactData = z.infer<typeof formSchema>

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<createMessageContactData>({
    resolver: zodResolver(formSchema)
  })

  const sendMessageForm = async (data: createMessageContactData) => {
    try {
      send(data);

      await new Promise(resolve => setTimeout(resolve, 1000))

      toast.success('Message sent successfully!')

      reset()
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error)
      toast.error('An error occurred while sending the message. Please try again.')
    }
  }

  return (
    <section
      className="2xl:w-[83rem] xl:w-[70rem] lg:w-[55rem] lg:h-[26rem] md:w-[39rem] md:h-[52rem] xs:h-[48rem] sm:w-[23rem] xs:w-[23rem] bg-[var(--surface-primary)] mx-auto mt-[13rem] mb-[7rem] flex items-center lg:justify-between md:justify-evenly lg:flex-row md:flex-col xs:flex-col shadow-lg rounded-lg gap-9"
      id="contact"
    >
      <div className="flex flex-col gap-4 lg:w-2/5 px-10 md:w-[76%] md:mt-0 xs:mt-[2rem]">
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
            className="p-2 bg-[var(--surface-secondary)] border border-transparent hover:border-[var(--secondary-color)] rounded-lg w-[3.8rem] h-[2.5rem] flex flex-row justify-center items-center"
            target="_blank"
          >
            <IoLogoLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/xeniaalex3"
            className="p-2 bg-[var(--surface-secondary)] border border-transparent hover:border-[var(--secondary-color)] rounded-lg w-[3.8rem] h-[2.5rem] flex flex-row justify-center items-center"
            target="_blank"
          >
            <IoLogoGithub size={24} />
          </Link>
        </div>
      </div>
      <div className="lg:w-[47%] md:w-[76%] xs:w-[100%] flex flex-col gap-2">
        <form
          onSubmit={handleSubmit(sendMessageForm)}
          className="px-10 flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <input
              type="text"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-[var(--text-base)] shadow-md placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset ring-[var(--text-base)] focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 focus:outline-none bg-[var(--surface-secondary)]"
              placeholder="Name"
              {...register('name')}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-[var(--text-base)] shadow-md placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset ring-[var(--text-base)] focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 focus:outline-none bg-[var(--surface-secondary)]"
              placeholder="E-mail"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="flex flex-col">
            <textarea
              rows={5}
              cols={30}
              placeholder="Your message"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-[var(--text-base)] shadow-md placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset ring-[var(--text-base)] focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 focus:outline-none bg-[var(--surface-secondary)]"
              {...register('message')}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>

          <CustomButton
            type="submit"
            text="Send me a message"
            icon={<BsArrowRight className="ml-2 w-5" />}
            color="violet"
            customCss="!w-[13rem] !text-sm !font-normal"
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
