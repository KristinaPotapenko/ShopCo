"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getUserInformation, selectUserInformation } from "@/store/userSlice";

import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import { ProfileContent } from "@/components/sections/Profile/ProfileContent";

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector(selectUserInformation);

  useEffect(() => {
    dispatch(getUserInformation());
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-40 h-40 border-4 border-t-transparent border-zinc-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-8 text-center">
        <p className="text-lg lg:text-2xl font-semibold text-black">
          You are not logged in
        </p>
        <PrimaryButton href="/login">Go to Login</PrimaryButton>
      </div>
    );
  }

  return (
    <main>
      <ProfileContent user={user} />
    </main>
  );
}
