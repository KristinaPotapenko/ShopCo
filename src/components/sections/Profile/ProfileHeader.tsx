import Image from "next/image";

import { User } from "@/types/user";
import { BASE_IMAGE } from "@/constants/constance";

export const ProfileHeader = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src={user.image || BASE_IMAGE}
        alt={user.username}
        width={128}
        height={128}
        className="rounded-full border-4 border-zinc-100 shadow-md"
      />
      <h1 className="text-2xl lg:text-4xl font-semibold text-gray-900">
        {user.firstName} {user.lastName}
      </h1>
      <p className="font-normal text-zinc-500">@{user.username}</p>
      <span className="px-4 py-1 text-sm bg-zinc-100 font-normal text-zinc-500 rounded-full">
        {user.role}
      </span>
    </div>
  );
};
