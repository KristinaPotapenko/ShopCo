import Link from "next/link";
import Image from "next/image";

import { Twitter, Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F2F0F1] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-6 pb-10 md:pb-12 border-b border-zinc-200">
          <div className="flex flex-col items-start">
            <Link
              className="relative mb-5 md:mb-6 font-montserrat text-2xl md:text-3xl font-extrabold outline-none 
             after:block after:h-0.5 after:w-0 after:bg-black after:absolute after:-bottom-1 after:left-0
             hover:after:w-full focus:after:w-full
             after:transition-width after:duration-300 after:ease-in-out"
              href="/"
            >
              SHOP.CO
            </Link>
            <p className="md:max-w-52 font-normal text-black/60 mb-5 md:mb-8">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="flex items-center gap-3 mb-6 md:mb-0">
              <li className="p-3 bg-white border border-zinc-200 rounded-full">
                <Twitter className="w-5 h-5" />
              </li>
              <li className="p-3 bg-white border border-zinc-200 rounded-full">
                <Facebook className="w-5 h-5" />
              </li>
              <li className="p-3 bg-white border border-zinc-200 rounded-full">
                <Instagram className="w-5 h-5" />
              </li>
              <li className="p-3 bg-white border border-zinc-200 rounded-full">
                <Github className="w-5 h-5" />
              </li>
            </ul>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-x-4 md:gap-x-8 gap-y-8 font-normal text-zinc-500">
            <li className="flex flex-col gap-2 md:gap-3">
              <Link
                href="/"
                className="mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em]"
              >
                Company
              </Link>
              <Link href="/">About</Link>
              <Link href="/">Features</Link>
              <Link href="/">Works</Link>
              <Link href="/">Career</Link>
            </li>
            <li className="flex flex-col gap-2 md:gap-3">
              <Link
                href="/"
                className="mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em]"
              >
                HELP
              </Link>
              <Link href="/">Customer Support</Link>
              <Link href="/">Delivery Details</Link>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="flex flex-col gap-2 md:gap-3">
              <Link
                href="/"
                className="mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em]"
              >
                FAQ
              </Link>
              <Link href="/">Account</Link>
              <Link href="/">Manage Deliveries</Link>
              <Link href="/">Orders</Link>
              <Link href="/">Payment</Link>
            </li>
            <li className="flex flex-col gap-2 md:gap-3">
              <Link
                href="/"
                className="mb-4 md:mb-5 font-semibold text-black uppercase tracking-[.25em]"
              >
                RESOURCES
              </Link>
              <Link href="/">Free eBook</Link>
              <Link href="/">Development Tutorial</Link>
              <Link href="/">How to - Blog</Link>
              <Link href="/">Youtube Playlist</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-4 md:pt-5">
          <p className="text-center text-zinc-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ul className="flex justify-center flex-wrap gap-3 md:gap-3.5">
            <li className="flex items-center justify-center w-12 h-8 bg-white rounded">
              <Image
                src="/payment/visa.svg"
                alt="Visa"
                width={32}
                height={20}
              />
            </li>
            <li className="flex items-center justify-center w-12 h-8 bg-white rounded">
              <Image
                src="/payment/mastercard.svg"
                alt="Mastercard"
                width={32}
                height={20}
              />
            </li>
            <li className="flex items-center justify-center w-12 h-8 bg-white rounded">
              <Image
                src="/payment/paypal.svg"
                alt="PayPal"
                width={32}
                height={20}
              />
            </li>
            <li className="flex items-center justify-center w-12 h-8 bg-white rounded">
              <Image
                src="/payment/applePay.svg"
                alt="Apple Pay"
                width={32}
                height={20}
              />
            </li>
            <li className="flex items-center justify-center w-12 h-8 bg-white rounded">
              <Image
                src="/payment/googlePay.svg"
                alt="Google Pay"
                width={32}
                height={20}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
