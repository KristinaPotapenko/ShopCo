import Link from "next/link";

export default function ViewAllButton() {
  return (
    <Link
      className="flex items-center justify-center md:self-center py-3.5 px-20 font-semibold border border-zinc-200 rounded-[60px]
             hover:ring-2 hover:ring-offset-2 hover:ring-zinc-200
              focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 focus:outline-none
              active:bg-zinc-100 transition-colors duration-300"
      href="/"
    >
      View All
    </Link>
  );
}
