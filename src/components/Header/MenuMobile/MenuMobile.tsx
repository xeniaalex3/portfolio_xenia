'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai'
import { menuItems } from '../MenuItems'
import MenuLinks from '@/components/Header/MenuLinks/MenuLinks'
import { isFocusPage } from '@/utils/utils'
import { IoCloseOutline } from 'react-icons/io5'

interface MenuMobileProps {
  className?: string
}

function MenuMobile({ className }: MenuMobileProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <div className={`flex mt-2 md:hidden ${className}`}>
      <div
        className="text-[var(--color-text)] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu className="text-base" />
      </div>
      {open && (
        <header className="fixed top-0 left-0 w-screen h-screen bg-slate-50 flex flex-col pl-16 z-[10000]">
          <span
            onClick={() => setOpen(false)}
            className="absolute top-6 right-24 flex justify-end"
          >
            <IoCloseOutline className="w-[3rem] h-[3rem] text-[var(--color-text)]" />
          </span>

          <nav className="flex flex-col justify-center items-start mt-32">
            <ul>
              {menuItems.map(item => (
                <MenuLinks
                  key={item.name}
                  path={item.path}
                  name={item.name}
                  focus={isFocusPage(pathname, item.id)}
                  isOpen={open}
                  pathname={pathname}
                  id={item.id}
                  onClose={handleClose}
                />
              ))}
            </ul>
          </nav>
        </header>
      )}
    </div>
  )
}

export default MenuMobile
