"use client";
import { clsx } from "clsx";

export interface CustomButtonProps {
  full?: boolean;
  text?: string; 
  onClick?: () => void; 
  type?: "button" | "submit";
  disabled?: boolean;
  customCss?: string;
  isLoading?: boolean; 
  color?: "violet" | "green" | "gray";
  flexEnd?: boolean;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
  message?: string;
  icon?: React.ReactNode;
}

function CustomButton({
  full,
  text,
  onClick,
  type,
  disabled,
  customCss,
  color,
  flexEnd,
  onSubmit,
  icon,
} : CustomButtonProps) {
  let colorCss;

  switch (color) {
    case "violet":
      colorCss = "bg-[var(--primary-color)] hover:[var(--hover-primary-color)]";
      break;
    case "green":
      colorCss = "bg-[var(--secondary-color)] hover:bg-[var(--hover-secondary-color)]";
      break;
    case "gray":
      colorCss = "bg-[var(--surface-tertiary)] hover:bg-[var(--surface-secondary)] cursor-default";
      break;
    default:
      colorCss = "bg-[var(--primary-color)] hover:[var(--hover-primary-color)]";
      break;
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type ?? "button"}
      className={clsx(
        "cursor-pointer transition duration-300 px-6 py-2 text-[var(--text-primary)] flex items-center justify-center rounded-xl shadow-md",
        full ? "w-full" : "px-6 py-2 md:w-full",
        colorCss,
        customCss,
        flexEnd && "justify-self-end w-fit self-end"
      )}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}

export default CustomButton;