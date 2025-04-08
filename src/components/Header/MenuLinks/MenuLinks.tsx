import Link from 'next/link'
import { MenuLinksProps } from '@/@types/menuLinks'

function MenuLinks({ path, name, pathname, id, focus, isOpen, onClose }: MenuLinksProps) {
  const newFocus = !!(pathname?.split("/")?.[1] === id);
  return (
    <div className="flex flex-row">
      <Link href={path} onClick={onClose}>
        <li className={`flex hover:text-[var(--primary-color)] text-[var(--text-secondary)] ${focus || newFocus ? "text-[var(--primary-color)]" : ""}`}>
          <p className={`transition duration-300 ease-in-out text-base font-medium ${focus || newFocus ? "text-[var(--primary-color)]" : ""} ${
              isOpen ? "block" : "hidden"
            } `}>{name}</p>
        </li>
      </Link>
    </div>
  )
}

export default MenuLinks
