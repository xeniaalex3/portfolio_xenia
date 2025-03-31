import { clsx } from "clsx";
import { TextInputProps } from "@/@types/form";

function TextInput({ type = "text",
  placeholder,
  label,
  id,
  customCss,
  value,
  setValue,
  required = false,}:TextInputProps ){
  return(
    <div className="mb-4">
    {label && (
      <label htmlFor={id} className={clsx("block text-md font-medium leading-6 text-black-700 mt-4", customCss)}>
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
    )}
    <div className="mt-2">
      <input
        type={type}
        name={id}
        id={id}
        className={clsx("block w-full rounded-md border-0 px-2 py-1.5 text-black-400 shadow-md placeholder:text-black-300 focus:ring-2 focus:ring-inset ring-black-500 focus:ring-persian-blue-500 sm:text-sm sm:leading-6 focus:outline-none bg-manatee-100", customCss)}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        required={required}
      />
    </div>
  </div>
  )
}

export default TextInput;