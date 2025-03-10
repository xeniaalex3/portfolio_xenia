import Link from "next/link";
import { MenuLinksProps } from "@/@types/menuLinks";

function MenuLinks({ path, name, focus, isOpen, pathname, id }: MenuLinksProps) {
  const newFocus = !!(!isOpen && pathname?.split("/")?.[1] === id);

  return (
    <div className="relative group/edit z-[1000]">
      <Link href={path}>
        <li
          className={`flex items-center py-2 my-2 hover:text-persian-blue-700 text-manatee-600 mb-[0.5rem] ${
            focus || newFocus ? "text-persian-blue-700" : ""
          }`}
        >
          <p
            className={`transition duration-300 ease-in-out text-sm ${
              focus || newFocus ? "text-persian-blue-700" : ""
            } ${isOpen ? "ml-2" : "w-0 hidden"}`}
          >
            {name}
          </p>
          {(focus || newFocus) && (
            <div
              className={`absolute top-2 w-0.5 h-6 bg-persian-blue-700 rounded-full transition duration-300 ease-in-out sm:hidden ${
                isOpen ? "right-[-17px]" : "right-[-16px]"
              }`}
            ></div>
          )}
        </li>
      </Link>


    </div>
  );
}

export default MenuLinks;