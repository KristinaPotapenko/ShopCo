import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="py-3 bg-black ">
      <div className="container flex flex-col sm:flex-row justify-center gap-3 min-w-full px-4 text-white text-center">
        <p>Sign up and get 20% off to your first order.</p>
        <Link
          href="/signup"
          className="font-normal underline decoration-1 underline-offset-4 
          transition-colors duration-300 hover:font-semibold
          focus:outline-none focus:font-semibold focus:ring-offset-1 
          active:font-semibold"
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
}
