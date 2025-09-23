"use client";

import { useState } from "react";
import Image from "next/image";

import Cookies from "js-cookie";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import {
  loginUser,
  resetLoginState,
  selectLoginInformation,
} from "@/store/auth/loginSlice";

import Logo from "@/components/ui/Logo/Logo";
import { FormInput } from "@/components/ui/FormInput/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

export default function SignupPage() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const dispatch = useAppDispatch();

  const { loginInformation, status, error } = useAppSelector(
    selectLoginInformation
  );

  if (loginInformation) {
    Cookies.set("accessToken", loginInformation.accessToken, { expires: 0.5 });

    Cookies.set("refreshToken", loginInformation.refreshToken, { expires: 7 });
  }

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginUser(loginData));
  };

  const renderContent = (
    status: "idle" | "loading" | "succeeded" | "failed",
    retry: () => void
  ) => {
    switch (status) {
      case "idle":
        return (
          <>
            <Logo className="text-2xl lg:text-4xl" />
            <form
              className="grid grid-cols-1 gap-8 w-full"
              onSubmit={handleSubmit}
            >
              <FormInput
                type="username"
                name="username"
                value={loginData.username}
                onChange={(e) => changeInput(e)}
                placeholder="Username"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e) => changeInput(e)}
                placeholder="Password"
                required
              />
              <PrimaryButton className="mt-11" type="submit">
                Sign In
              </PrimaryButton>
              <PrimaryButton variant="blue" href="/signup">
                Register Now
              </PrimaryButton>
              {/* <Link
                className="justify-self-end font-semibold text-blue-500"
                href="/login"
              >
                Forget Password?
              </Link> */}
            </form>
          </>
        );
      case "loading":
        return (
          <div className="flex items-center justify-center w-full">
            <div className="w-40 h-40 border-4 border-t-transparent border-zinc-300 rounded-full animate-spin"></div>
          </div>
        );
      case "succeeded":
        return (
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <p className="text-lg lg:text-2xl text-black font-semibold">
              Login successful!
            </p>
            <PrimaryButton href="/">Go to Home</PrimaryButton>
          </div>
        );
      case "failed":
        return (
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <p className="text-lg lg:text-2xl text-red-600 font-semibold">
              Login failed. Please check your username and password.
            </p>
            <PrimaryButton onClick={retry}>Try Again</PrimaryButton>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-y-auto bg-white z-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full h-full py-8 lg:py-16 xl:py-32 px-4 lg:px-20 xl:px-36">
        <Image
          className="flex-shrink rounded-lg"
          src="/hero-models.jpg"
          alt=""
          width={670}
          height={800}
        />
        <div className="flex flex-col items-center lg:items-start gap-12 w-full max-w-4xl">
          {renderContent(status, () => dispatch(resetLoginState()))}
        </div>
      </div>
    </div>
  );
}
