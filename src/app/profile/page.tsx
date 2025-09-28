"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getUserInformation, selectUserInformation } from "@/store/userSlice";

import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import { ProfileContent } from "@/components/sections/Profile/ProfileContent";
import { Loader } from "@/components/ui/Loader/Loader";

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector(selectUserInformation);

  useEffect(() => {
    dispatch(getUserInformation());
  }, []);

  if (status === "loading") {
    return <Loader />;
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
