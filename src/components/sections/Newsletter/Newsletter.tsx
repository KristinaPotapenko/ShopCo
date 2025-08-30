import { Mail as MailIcon } from "lucide-react";

import Input from "@/components/ui/Input/Input";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";

export default function Newsletter() {
  return (
    <section className="relative z-10 container mx-auto px-4 translate-y-1/2">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 py-8 px-6 bg-black rounded-3xl">
        <SectionTitle
          isCentered={false}
          hasMargin={false}
          isLight={true}
          className="max-w-2xl"
        >
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </SectionTitle>

        <form className="flex flex-col gap-3">
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email address"
              className="lg:min-w-80 ring-offset-black"
            />
            <MailIcon
              className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-400"
              strokeWidth={2.5}
            />
          </div>
          <button
            className="py-3 px-6 font-semibold bg-zinc-100 rounded-3xl
            transition-all duration-300
            hover:bg-zinc-200 hover:shadow-md ring-offset-black
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-300
             active:translate-y-0 active:shadow-sm active:bg-zinc-300 cursor-pointer"
            type="submit"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
