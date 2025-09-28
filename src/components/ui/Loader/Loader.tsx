interface LoaderProps {
  smallSize?: boolean;
}

export const Loader = ({ smallSize }: LoaderProps) => {
  return (
    <div
      className={`flex items-center justify-center ${
        smallSize ? "h-full" : "h-[60vh]"
      }`}
    >
      <div
        className={`${
          smallSize ? "w-20 h-20" : "w-40 h-40"
        } border-4 border-t-transparent border-zinc-300 rounded-full animate-spin`}
      ></div>
    </div>
  );
};
