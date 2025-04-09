'use client'
import { usePathname } from 'next/navigation'
import { menuItems } from './MenuItems'
import MenuLinks from './MenuLinks/MenuLinks'
import { isFocusPage } from '@/utils/utils'
import { ModeToggle } from '../ui/ModeToggle/ModeToggle'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/image/logo.svg'
import MenuMobile from './MenuMobile/MenuMobile'

function Header() {
  const pathname = usePathname()

  return (
    <header className="flex flex-row md:justify-around xs:justify-between  md:px-0 xs:px-6 items-center h-[3.5rem] mb-4 overflow-hidden border-b border-transparent shadow-[var(--shadow-custom)]">
      <Link href="/">
        <Image
          src={logo}
          alt="image logo"
          width={70}
          height={70}
          className="sm:w-[70px] sm:h-[28px] md:w-[70px] md:h-[70px]"
        />
      </Link>

      
      <div className="flex flex-row justify-end items-center gap-4">
      <MenuMobile className="sm:flex xs:flex md:hidden" />
        <nav className="flex flex-row justify-end items-center gap-4 md:flex xs:hidden">
          {menuItems.map(item => (
            <MenuLinks
              key={item.name}
              path={item.path}
              name={item.name}
              pathname={pathname}
              id={item.id}
              focus={isFocusPage(pathname, item.id)}
            />
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
