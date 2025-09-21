import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/ui/Logo/Logo";
import { FormInput } from "@/components/ui/FormInput/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

export default function SignupPage() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16 px-4 py-4 lg:py-16 xl:py-32 lg:px-20 xl:px-36 w-full">
        <Image
          className="flex-shrink rounded-lg"
          src="/hero-models.jpg"
          alt=""
          width={670}
          height={800}
        />
        <div className="flex flex-col items-center lg:items-start gap-12 w-full">
          <Logo className="text-2xl lg:text-4xl" />
          <form className="grid grid-cols-1 gap-8 w-full">
            <FormInput type="email" name="emaill" placeholder="Email Address" />
            <FormInput type="password" name="password" placeholder="Password" />
            <PrimaryButton className="mt-11" type={"button"}>
              Sign In
            </PrimaryButton>
            <PrimaryButton type={"button"} variant="blue">
              Register Now
            </PrimaryButton>
            <Link
              className="justify-self-end font-semibold text-blue-500"
              href="/login"
            >
              Forget Password?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
