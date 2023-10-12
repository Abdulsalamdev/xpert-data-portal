import { PasswordInput, PinInput, TextInput } from "@mantine/core";
import { ArrowLeft2, Eye, EyeSlash } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { Sso } from "../common/sso";
import Image from "next/image";
export function ResetPass() {
  return (
    <div className="w-[80%] m-auto pt-[30px] ">
      <Image
        src={"/images/logo.png"}
        alt={""}
        width={70}
        height={70}
        className="py-[20px]"
      />
      <div className="justify-between items-center gap-[10px] flex">
        <Sso />
        <form className="p-[30px] bg-[#ffffff] sign-1 rounded-[16px]">
          <p className="text-[#BF2018] text-[clamp(20px,1.4vw,24px)] flex justify-center font-nunito font-bold pb-[clamp(15px,1.6vw,25px)]">
            AFEX SSO
          </p>
          <p className="flex justify-center fony-bold font-nunito text-[clamp(20px,1.5vw,27px)] text-BLUE-SASH pb-[clamp(5px,0.9vw,10px)]">
            Forget Password?
          </p>
          <div className="text-center flex justify-center max-w-[360px] text-BLUE-SASH text-[16px] pb-[clamp(15px,1.7vw,25px)]">
            Kindly provide a new password for your account
          </div>

          <div className="flex flex-col gap-[20px] pb-[13px] w-full">
            <p className="text-[14px] text-BLUE-SASH ">New Password</p>
            <PasswordInput
              visibilityToggleIcon={({ reveal }) =>
                reveal ? (
                  <Eye size="20" color="#C1C2C6" />
                ) : (
                  <EyeSlash size="20" color="#C1C2C6" />
                )
              }
            />
          </div>
          <div className="flex flex-col gap-[20px] pb-[13px] w-full">
            <p className="text-[14px] text-BLUE-SASH ">Confirm Password</p>
            <PasswordInput
              visibilityToggleIcon={({ reveal }) =>
                reveal ? (
                  <Eye size="20" color="#C1C2C6" />
                ) : (
                  <EyeSlash size="20" color="#C1C2C6" />
                )
              }
            />
          </div>
          <div className="pt-[clamp(10px,1.2vw,15px)] pb-[5px]">
            <button
              type="submit"
              className="block rounded-[8px] w-full py-[clamp(16px,1.3vw,22px)] bg-RED-INFERNO text-[#ffffff] font-nunito font-bold"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-center items-center pt-[10px]">
            <Link
              href={"/login"}
              className="flex gap-[15px] items-center text-[20px] font-nunito font-medium text-SCRIPT-INK"
            >
              <ArrowLeft2 size="20" color="#8F9198" />
              Back to sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
