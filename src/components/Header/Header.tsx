'use client'
import { usePathname } from "next/navigation";
import { menuItems } from './MenuItems';
import MenuLinks from './MenuLinks/MenuLinks';
import { isFocusPage } from "@/utils/utils";

function Header() {
  const pathname = usePathname();

  return (
    <header className="flex flex-row justify-around items-center h-[3.5rem] mb-4 overflow-hidden border-b border-[var(--surface-secondary)] shadow-lg">
      <h2 className="flex justify-center items-center">
        XeniaDev
      </h2>
      <nav className="flex flex-row justify-end items-center gap-4 flex-1 max-w-2">
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
    </header>
  )
}

export default Header;

