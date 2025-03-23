'use client'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import CustomButton from '../Form/Button/CustomButton'
import { PiMoonThin } from "react-icons/pi";
import { PiSunThin } from "react-icons/pi";
import { clsx } from 'clsx'

export const ModeToggle = () => {
  const { theme } = useContext(ThemeContext)
  const { toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      theme === 'dark'
        ? document.documentElement.setAttribute('class', 'dark')
        : document.documentElement.setAttribute('class', 'light')
    }
  }, [theme])

  return (
    <div>
      <CustomButton
        type="button"
        onClick={toggleTheme}
        icon={
          theme === 'dark' ? (
            <PiMoonThin className={clsx('fill-slate-50', 'w-6 h-6')} />
          ) : (
            <PiSunThin  className={clsx('fill-slate-50', 'w-6 h-6')} />
          )
        }
        color="gray"
        customCss="h-[2rem] !w-[2rem] !p-0"
      />
    </div>
  )
}
