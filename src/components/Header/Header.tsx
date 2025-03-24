'use client'
import { usePathname } from 'next/navigation'
import { menuItems } from './MenuItems'
import MenuLinks from './MenuLinks/MenuLinks'
import { isFocusPage } from '@/utils/utils'
import { ModeToggle } from '../ui/ModeToggle/ModeToggle'

function Header() {
  const pathname = usePathname()

  return (
    <header className="flex flex-row justify-around items-center h-[3.5rem] mb-4 overflow-hidden border-b border-transparent shadow-[var(--shadow-custom)]">
      <h2 className="flex justify-center items-center">XeniaDev</h2>
      <nav className="flex flex-row justify-end items-center gap-4">
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

        <ModeToggle />
      </nav>
    </header>
  )
}

export default Header
