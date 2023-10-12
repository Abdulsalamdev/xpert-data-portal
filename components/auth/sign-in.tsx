import React from "react";
import { Sso } from "../common/sso";
import Image from "next/image";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Eye, EyeSlash } from "iconsax-react";
import Link from "next/link";
export function Sign_in() {
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
        <form className="sign-1 p-[clamp(15px,2.2vw,40px)] rounded-[16px] bg-[#ffffff] w-[clamp(300px,28vw,500px)]">
          <div className="">
            <p className="text-[clamp(20px,1.4vw,24px)] text-BLUE-SASH font-nunito font-semibold pb-[Clamp(20px,2vw,30px)]">
              Sign in with SSO
            </p>
            <div className="flex flex-col gap-[20px] pb-[30px]">
              <p className="text-[14px] text-BLUE-SASH ">Email Address</p>

              <TextInput
                placeholder="Enter email address"
                styles={{
                  input: {
                    width: "100%",
                    border: "1px solid #F0F0F1",
                    borderRadius: "8px",
                    paddingBlock: "12px",
                    paddingInline: "12px",
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-[20px] pb-[19px] w-full">
              <p className="text-[14px] text-BLUE-SASH ">Password</p>
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
            <Link href={"/forget"}>
              <p className="flex justify-end text-RED-INFERNO text-[12px] font-nunito font-bold pb-[30px]">
                Forgot Password?
              </p>
            </Link>
            <button
              type="submit"
              className="block rounded-[8px] w-full py-[clamp(16px,1.3vw,22px)] bg-RED-INFERNO text-[#ffffff] font-nunito font-bold"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
