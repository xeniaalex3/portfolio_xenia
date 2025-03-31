import { ChangeEvent } from "react";

export interface TextInputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  id: string;
  customCss?: string;
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export interface TextareaProps {
  name?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  customCss?: string;
}