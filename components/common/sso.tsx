import React from "react";
import Image from "next/image";
export function Sso() {
  return (
    <div className="hidden flex-col pt-[30px] items-center md:flex">
      <Image src={"/images/secure-img.png"} alt={""} width={200} height={200} />
      <div className="flex items-center flex-col">
        <p className="text-[clamp(18px,1.3vw,24px)] text-SCRIPT-INK font-bold font-nunito pt-[15px]">
          Streamline your Login Experience with SSO
        </p>
        <p className=" text-PARTRIDGE-GREY max-w-[500px] text-[14px] text-center pt-[10px]">
          Welcome to our Single Sign-On login page! With just one set of login
          credentials, you can now access all your favorite applications and
          services without the need to enter multiple usernames and passwords
        </p>
      </div>
    </div>
  );
}
