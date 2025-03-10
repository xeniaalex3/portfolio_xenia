import Link from 'next/link'
import { MenuLinksProps } from '@/@types/menuLinks'

function MenuLinks({ path, name, pathname, id, focus }: MenuLinksProps) {
  const newFocus = !!(pathname?.split("/")?.[1] === id);
  return (
    <div className="flex flex-row">
      <Link href={path}>
        <li className={`flex hover:text-[var(--text-primary)] text-[var(--text-secondary)] ${focus || newFocus ? "text-[var(--text-primary)]" : ""}`}>
          <p className={`transition duration-300 ease-in-out text-sm ${focus || newFocus ? "text-[var(--text-primary)]" : ""}`}>{name}</p>
        </li>
      </Link>
    </div>
  )
}

export default MenuLinks
