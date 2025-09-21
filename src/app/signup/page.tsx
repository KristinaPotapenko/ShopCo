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
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-8 w-4/5">
            <FormInput type="text" name="FirstName" placeholder="First Name" />
            <FormInput type="text" name="lastName" placeholder="Last Name" />
            <FormInput type="email" name="emaill" placeholder="Email Address" />
            <FormInput type="tel" name="phone" placeholder="Phone Number" />
            <FormInput type="password" name="password" placeholder="Password" />
            <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <PrimaryButton
              className="sm:col-span-2 lg:col-span-1 xl:col-span-2 mt-11"
              type={"button"}
            >
              Create Account
            </PrimaryButton>
            <p className="font-normal sm:col-span-2 lg:col-span-1 xl:col-span-2 text-center">
              Already have an account?{" "}
              <Link className="font-semibold text-blue-500" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
