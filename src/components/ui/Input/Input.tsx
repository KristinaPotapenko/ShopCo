import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={`w-full py-3.5 pr-3.5 pl-14 text-zinc-500 font-normal bg-zinc-100 rounded-3xl placeholder:text-zinc-400
              hover:ring-2 hover:ring-offset-2 hover:ring-zinc-200 focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 focus:outline-none transition-colors duration-300 ${className}`}
      {...rest}
    />
  );
}
