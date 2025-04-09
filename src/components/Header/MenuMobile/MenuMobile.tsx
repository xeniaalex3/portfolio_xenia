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
    <div className={`flex flex-row justify-center items-center ${className}`}>
      <div
        className="text-[var(--text-primary)] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu className="w-[1.8rem] h-[1.8rem]" />
      </div>
      {open && (
        <header className="fixed top-0 left-0 w-full h-full bg-[var(--surface-tertiary)] flex flex-col pl-7 z-[10000]">
          <span
            onClick={handleClose}
            className="absolute top-2 right-6 flex justify-end"
          >
            <IoCloseOutline className="w-[2rem] h-[2rem] text-[var(--text-primary)]" />
          </span>

          <nav className="flex flex-col justify-center items-start mt-16">
            <ul>
              {menuItems.map(item => (
                <MenuLinks
                  key={item.name}
                  path={item.path}
                  name={item.name}
                  focus={isFocusPage(pathname, item.id)}
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
