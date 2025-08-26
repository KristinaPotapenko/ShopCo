import Link from "next/link";

export default function ViewAllButton() {
  return (
    <Link
      className="flex items-center justify-center py-3.5 px-20 font-semibold border border-zinc-200 rounded-[60px]"
      href="/"
    >
      View All
    </Link>
  );
}
