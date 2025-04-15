import { clsx } from "clsx";
import { TextInputProps } from "@/@types/form";

function TextInput({ type = "text",
  placeholder,
  label,
  id,
  customCss,
  value,
  setValue,
 }:TextInputProps ){
  return(
    <div className="mb-4">
    {label && (
      <label htmlFor={id} className={clsx("block text-md font-medium leading-6 text-black-700 mt-4", customCss)}>
        {label}
      </label>
    )}
    <div className="mt-2">
      <input
        type={type}
        name={id}
        id={id}
        className={clsx("block w-full rounded-md border-0 px-2 py-1.5 text-[var(--text-base)] shadow-md placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset ring-[var(--text-base)] focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 focus:outline-none bg-[var(--surface-secondary)]", customCss)}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </div>
  </div>
  )
}

export default TextInput;