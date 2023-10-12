"use client";

import PersonalInformation from "@/componets/profile/PersonalInformation";
import ProfilePageButton from "@/componets/profile/ProfilePageButton";
import LoginAndPassword from "@/componets/profile/LoginAndPassword";
import { useWindowWidth } from "@/helper/hooks";
import { useRouter } from "next/navigation";
import { PROFILE } from "@/helper/constant";
import { appStyles } from "@/theme/appStyles";
import { routes } from "@/helper/routes";
import { useState } from "react";

const breakpoint = 768;

export default function ProfilePage() {
  // variables
  const router = useRouter();
  const windowWidth = useWindowWidth();

  const [showCard, setShowCard] = useState(
    windowWidth >= breakpoint ? PROFILE.PERSONAL_INFORMATION : ""
  );

  // handle go back to options, in mobiles
  const handleGoToOptions = () => {
    setShowCard("");
  };

  // handle Logout
  const handleLogout = () => {
    router.push(routes.signin);
  };

  return (
    <>
      <h2 className={`${appStyles.PAGE_TITLE} px-7 py-4`}>Setting</h2>
      <section className="flex gap-x-12 px-6 md:h-[85%] md:relative">
        {(!showCard || windowWidth >= breakpoint) && (
          <article className="w-1/3 min-w-fit max-md:w-full md:shadow-md md:bg-pure md:rounded-lg md:p-6 space-y-6">
            <ProfilePageButton
              title="Personal Information"
              isActive={showCard == PROFILE.PERSONAL_INFORMATION}
              handleOnClick={() => setShowCard(PROFILE.PERSONAL_INFORMATION)}
            />
            <ProfilePageButton
              title="Login & Password"
              isActive={showCard == PROFILE.LOGIN_PASWORD}
              handleOnClick={() => setShowCard(PROFILE.LOGIN_PASWORD)}
            />
            <button
              type="button"
              onClick={handleLogout}
              className="text-primary text-lg text-left font-bold w-full md:px-6 mb-12 md:absolute md:bottom-10"
            >
              Logout
            </button>
          </article>
        )}
        {showCard == PROFILE.PERSONAL_INFORMATION && (
          <PersonalInformation handleGoToOptions={handleGoToOptions} />
        )}
        {showCard == PROFILE.LOGIN_PASWORD && (
          <LoginAndPassword handleGoToOptions={handleGoToOptions} />
        )}
      </section>
    </>
  );
}
