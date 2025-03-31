import { TextareaProps } from '@/@types/form'
import { clsx } from 'clsx'

function Textarea({ name, rows, cols, placeholder, customCss }: TextareaProps) {
  return (
    <textarea
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      className={clsx(
        'block w-full rounded-md border-0 px-2 py-1.5 text-black-400 shadow-md placeholder:text-black-300 focus:ring-2 focus:ring-inset ring-black-500 focus:ring-persian-blue-500 sm:text-sm sm:leading-6 focus:outline-none bg-manatee-100',
        customCss
      )}
    ></textarea>
  )
}

export default Textarea
