import Link from 'next/link'
import { MenuLinksProps } from '@/@types/menuLinks'

function MenuLinks({ path, name, pathname, id, focus }: MenuLinksProps) {
  const newFocus = !!(pathname?.split("/")?.[1] === id);
  return (
    <div className="flex flex-row">
      <Link href={path}>
        <li className={`flex hover:text-[var(--primary-color)] text-[var(--text-secondary)] ${focus || newFocus ? "text-[var(--primary-color)]" : ""}`}>
          <p className={`transition duration-300 ease-in-out text-base ${focus || newFocus ? "text-[var(--primary-color)]" : ""}`}>{name}</p>
        </li>
      </Link>
    </div>
  )
}

export default MenuLinks
