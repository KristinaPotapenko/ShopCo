import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/ui/Logo/Logo";

import { Twitter, Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F2F0F1] pb-16 pt-40 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-6 pb-10 md:pb-12 border-b border-zinc-200">
          <div className="flex flex-col items-start">
            <Logo className="mb-5 md:mb-6 text-2xl md:text-3xl" />
            <p className="md:max-w-52 font-normal text-black/60 mb-5 md:mb-8">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-zinc-200 rounded-full
    transition-all duration-300 text-black
    hover:bg-zinc-800 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-black
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
    active:bg-zinc-700 cursor-pointer
    flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-zinc-200 rounded-full
    transition-all duration-300 text-black
    hover:bg-zinc-800 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-black
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
    active:bg-zinc-700 cursor-pointer
    flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-zinc-200 rounded-full
    transition-all duration-300 text-black
    hover:bg-zinc-800 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-black
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
    active:bg-zinc-700 cursor-pointer
    flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-zinc-200 rounded-full
    transition-all duration-300 text-black
    hover:bg-zinc-800 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-black
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
    active:bg-zinc-700 cursor-pointer
    flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-x-4 md:gap-x-8 gap-y-8 font-normal text-zinc-500">
            <li className="flex flex-col items-start gap-2 md:gap-3">
              <Link
                href="/"
                className="relative mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em] outline-none
             after:block after:h-[1px] after:w-0 after:bg-black after:absolute after:-bottom-0.5 after:left-0
             hover:after:w-full focus:after:w-full
             after:transition-all after:duration-300 after:ease-in-out"
              >
                Company
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Features
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Works
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Career
              </Link>
            </li>
            <li className="flex flex-col items-start gap-2 md:gap-3">
              <Link
                href="/"
                className="relative mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em] outline-none
             after:block after:h-[1px] after:w-0 after:bg-black after:absolute after:-bottom-0.5 after:left-0
             hover:after:w-full focus:after:w-full
             after:transition-all after:duration-300 after:ease-in-out"
              >
                HELP
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Customer Support
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Delivery Details
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="flex flex-col items-start gap-2 md:gap-3">
              <Link
                href="/"
                className="relative mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em] outline-none
             after:block after:h-[1px] after:w-0 after:bg-black after:absolute after:-bottom-0.5 after:left-0
             hover:after:w-full focus:after:w-full
             after:transition-all after:duration-300 after:ease-in-out"
              >
                FAQ
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Account
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Manage Deliveries
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Orders
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Payment
              </Link>
            </li>
            <li className="flex flex-col items-start gap-2 md:gap-3">
              <Link
                href="/"
                className="relative mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em] outline-none
             after:block after:h-[1px] after:w-0 after:bg-black after:absolute after:-bottom-0.5 after:left-0
             hover:after:w-full focus:after:w-full
             after:transition-all after:duration-300 after:ease-in-out"
              >
                RESOURCES
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Free eBook
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Development Tutorial
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                How to - Blog
              </Link>
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-800 hover:font-normal transition-colors duration-200"
              >
                Youtube Playlist
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-4 md:pt-5">
          <p className="text-center text-zinc-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ul className="flex justify-center flex-wrap gap-3 md:gap-3.5">
            <li>
              <button
                className="flex items-center justify-center w-12 h-8 bg-white rounded border border-transparent 
              transition-all duration-300
              hover:shadow-sm hover:scale-105
              focus:outline-none 
              active:scale-95 cursor-pointer"
              >
                <Image
                  src="/payment/visa.svg"
                  alt="Visa"
                  width={32}
                  height={20}
                />
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center w-12 h-8 bg-white rounded border border-transparent 
              transition-all duration-300
              hover:shadow-sm hover:scale-105
              focus:outline-none 
              active:scale-95 cursor-pointer"
              >
                <Image
                  src="/payment/mastercard.svg"
                  alt="Mastercard"
                  width={32}
                  height={20}
                />
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center w-12 h-8 bg-white rounded border border-transparent 
              transition-all duration-300
              hover:shadow-sm hover:scale-105
              focus:outline-none 
              active:scale-95 cursor-pointer"
              >
                <Image
                  src="/payment/paypal.svg"
                  alt="PayPal"
                  width={32}
                  height={20}
                />
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center w-12 h-8 bg-white rounded border border-transparent 
              transition-all duration-300
              hover:shadow-sm hover:scale-105
              focus:outline-none 
              active:scale-95 cursor-pointer"
              >
                {" "}
                <Image
                  src="/payment/applePay.svg"
                  alt="Apple Pay"
                  width={32}
                  height={20}
                />
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center w-12 h-8 bg-white rounded border border-transparent 
              transition-all duration-300
              hover:shadow-sm hover:scale-105
              focus:outline-none 
              active:scale-95 cursor-pointer"
              >
                <Image
                  src="/payment/googlePay.svg"
                  alt="Google Pay"
                  width={32}
                  height={20}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
