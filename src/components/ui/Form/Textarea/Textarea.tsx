import { TextareaProps } from '@/@types/form'
import { clsx } from 'clsx'

function Textarea({ name, rows, cols, placeholder, customCss, value, setValue }: TextareaProps) {
  return (
    <textarea
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      className={clsx(
        'block w-full rounded-md border-0 px-2 py-1.5 text-[var(--text-base)] shadow-md placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset ring-[var(--text-base)] focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 focus:outline-none bg-[var(--surface-secondary)]',
        customCss
      )}
      value={value}
      onChange={setValue}
    />
  )
}

export default Textarea
