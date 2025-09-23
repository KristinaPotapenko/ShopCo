import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/hooks/storeHooks";
import { resetLoginState } from "@/store/auth/loginSlice";
import { resetUserInformation } from "@/store/userSlice";

import { User } from "@/types/user";

import { ProfileHeader } from "./ProfileHeader";
import { ProfileSection } from "./ProfileSection";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileActions } from "./ProfileActions";

export const ProfileContent = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <section className="flex flex-col items-center gap-12 py-12 px-4 lg:px-16">
      <ProfileHeader user={user} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <ProfileSection title="Personal Info">
          <ProfileInfo label="Age" value={user.age} />
          <ProfileInfo label="Birth Date" value={user.birthDate} />
          <ProfileInfo label="Gender" value={user.gender} />
          <ProfileInfo label="Blood Group" value={user.bloodGroup} />
          <ProfileInfo label="Height" value={`${user.height} cm`} />
          <ProfileInfo label="Weight" value={`${user.weight} kg`} />
          <ProfileInfo
            label="Hair"
            value={`${user.hair.color}, ${user.hair.type}`}
          />
          <ProfileInfo label="Eye Color" value={user.eyeColor} />
        </ProfileSection>

        <ProfileSection title="Contacts">
          <ProfileInfo label="Email" value={user.email} />
          <ProfileInfo label="Phone" value={user.phone} />
          <ProfileInfo
            label="Address"
            value={`${user.address.address}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}`}
          />
          <ProfileInfo label="IP" value={user.ip} />
          <ProfileInfo label="MAC" value={user.macAddress} />
          <ProfileInfo label="SSN" value={user.ssn} />
        </ProfileSection>

        <ProfileSection title="Work & Education">
          <ProfileInfo label="Company" value={user.company.name} />
          <ProfileInfo label="Department" value={user.company.department} />
          <ProfileInfo label="Title" value={user.company.title} />
          <ProfileInfo label="University" value={user.university} />
        </ProfileSection>

        <ProfileSection title="Finance">
          <ProfileInfo label="Card Number" value={user.bank.cardNumber} />
          <ProfileInfo label="Card Type" value={user.bank.cardType} />
          <ProfileInfo label="Card Expire" value={user.bank.cardExpire} />
          <ProfileInfo label="Currency" value={user.bank.currency} />
          <ProfileInfo label="IBAN" value={user.bank.iban} />
          <ProfileInfo
            label="Crypto"
            value={`${user.crypto.coin} (${user.crypto.network})`}
          />
          <ProfileInfo label="Wallet" value={user.crypto.wallet} />
        </ProfileSection>

        <ProfileSection title="System">
          <ProfileInfo label="EIN" value={user.ein} />
          <ProfileInfo label="User Agent" value={user.userAgent} />
        </ProfileSection>
      </div>

      <ProfileActions
        onLogout={() => {
          Cookies.remove("accessToken");
          dispatch(resetUserInformation());
          dispatch(resetLoginState());
          router.push("/");
        }}
      />
    </section>
  );
};
