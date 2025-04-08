"use client";

import { useState } from 'react'
import Image from 'next/image'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io'
import photo from '@/assets/image/photo.jpg'
import Link from 'next/link'
import TextInput from '../ui/Form/TextInput/TextInput'
import Textarea from '../ui/Form/Textarea/Textarea'
import CustomButton from '../ui/Form/Button/CustomButton'
import { BsArrowRight } from 'react-icons/bs'
import { toast } from 'react-toastify'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmitSendMessage = (event: React.FormEvent) => {
    event.preventDefault()

    if (!name || !email || !message) {
      toast.error('Please fill in all fields.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email.')
      return
    }

    toast.success('Message sent successfully!')

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section
      className="lg:w-[83rem] lg:h-[26rem] md:w-[39rem] md:h-[52rem] bg-[var(--surface-primary)] mx-auto mt-[13rem] mb-[7rem] flex items-center lg:justify-between md:justify-evenly md:flex-col shadow-lg rounded-lg gap-9"
      id="contact"
    >
      <div className="flex flex-col gap-4 lg:w-2/5 px-10 md:w-[76%]">
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
      <div className="lg:w-[47%] md:w-[76%] flex flex-col gap-2">
        <form onSubmit={handleSubmitSendMessage} className="px-10">
          <TextInput
            id="firstname"
            placeholder="Name"
            type="text"
            value={name}
            setValue={handleName}
          />
          <TextInput
            id="email"
            placeholder="E-mail"
            type="text"
            value={email}
            setValue={handleEmail}
          />
          <Textarea
            name="message"
            rows={5}
            cols={30}
            placeholder="Your message"
            value={message}
            setValue={handleMessage}
            customCss='mb-5'
          />
          <CustomButton
            type="submit"
            text="Send me a message"
            icon={<BsArrowRight className='ml-2 w-5'/>}
            color="violet"
            onSubmit={handleSubmitSendMessage}
            customCss='!w-[13rem] !text-sm !font-normal'
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
