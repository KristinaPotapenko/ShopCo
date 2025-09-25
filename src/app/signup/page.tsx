"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/ui/Logo/Logo";
import { FormInput } from "@/components/ui/FormInput/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

type Status = "idle" | "loading" | "succeeded" | "failed";

export default function SignupPage() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setStatus("loading");

    setTimeout(() => {
      setStatus("succeeded");
    }, 2000);
  };

  const renderContent = (status: Status) => {
    switch (status) {
      case "idle":
        return (
          <>
            <Logo className="text-2xl lg:text-4xl" />
            <form
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-8 w-4/5"
              onSubmit={handleSubmit}
            >
              <FormInput
                type="text"
                name="FirstName"
                placeholder="First Name"
                required
              />
              <FormInput
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
              <FormInput
                type="email"
                name="emaill"
                placeholder="Email Address"
                required
              />
              <FormInput
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="confirm-password"
                required
              />
              <PrimaryButton
                className="sm:col-span-2 lg:col-span-1 xl:col-span-2 mt-11"
                type="submit"
              >
                Create Account
              </PrimaryButton>
              <p className="font-normal sm:col-span-2 lg:col-span-1 xl:col-span-2 text-center">
                Already have an account?
                <Link
                  className="ml-1 font-semibold text-blue-500"
                  href="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </>
        );
      case "loading":
        return (
          <div className="flex items-center justify-center w-full">
            <div className="lg:w-40 lg:h-40 border-4 border-t-transparent border-zinc-300 rounded-full animate-spin"></div>
          </div>
        );
      case "succeeded":
        return (
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <p className="text-lg lg:text-2xl text-black font-semibold">
              Sign up successful!
            </p>
            <PrimaryButton href="/login">Go to Login</PrimaryButton>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-y-auto bg-white z-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full h-full px-4 py-4 lg:py-16 xl:py-32 lg:px-20 xl:px-36">
        <Image
          className=" rounded-lg"
          src="/hero-models.jpg"
          alt=""
          width={670}
          height={800}
          priority
        />
        <div className="flex flex-col items-center lg:items-start gap-12 w-full">
          {renderContent(status)}
        </div>
      </div>
    </div>
  );
}
