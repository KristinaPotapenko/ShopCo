interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = (props: FormInputProps) => {
  return (
    <input
      {...props}
      className="pb-2 font-normal border-b border-zinc-400 outline-0 
              placeholder:text-zinc-400 
              hover:border-zinc-600 hover:text-zinc-600 
              active:border-zinc-600 active:text-zinc-600 
              focus:border-zinc-600 focus:text-zinc-600 "
    />
  );
};
