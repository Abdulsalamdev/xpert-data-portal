import { PinInput, TextInput } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import React from "react";
import Link from "next/link";
import { Sso } from "../common/sso";
import Image from "next/image";
import { useForm } from "@mantine/form";
import { cookieStorage } from "@ibnlanre/portal";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { toast } from "react-toastify";
export function Pin() {
  const { mutate } = useMutation({
    mutationFn: () => builder.use().auth.api.verifyPin(myForm.values),
    mutationKey: builder.auth.api.verifyPin.get(),
    onSuccess(data, variables, context) {
      toast.success("OTP verified");
    },
  });
  const myForm = useForm({
    initialValues: {
      email: cookieStorage.getItem("userEmail") || "",
      verification_code: "",
    },
  });
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
        <form className="p-[40px] bg-[#ffffff] sign-1 rounded-[16px]">
          <div className="text-[#BF2018] text-[clamp(20px,1.4vw,24px)] flex justify-center font-nunito font-bold pb-[clamp(25px,2.4vw,40px)]">
            AFEX SSO
          </div>
          <div className="flex justify-center fony-bold font-nunito text-[clamp(20px,1.5vw,27px)] text-BLUE-SASH pb-[clamp(10px,1.5vw,20px)]">
            Forget Password?
          </div>
          <div className="text-center flex justify-center max-w-[360px] text-BLUE-SASH text-[16px] pb-[clamp(15px,1.7vw,25px)]">
            Kindly enter the 6-digit pin sent to your email address provided
          </div>
          <PinInput size="xl" length={6} placeholder="0" />
          <div className="pt-[clamp(20px,2vw,25px)] pb-[5px]">
            <button
              type="submit"
              className="auth-btn justify-center items-center font-nunito font-bold"
            >
              <span>Submit</span>
            </button>
          </div>
          <div className="flex justify-end pb-[10px]">
            <p className="text-[17px] text-SKY-CAPTAIN font-nunito font-semibold">
              can't find 6-digit?{""}
              <span className=" text-RED-INFERNO">Resend pin</span>
            </p>
          </div>
          <Link
            href={"/login"}
            className="flex justify-center items-center pt-[20px]"
          >
            <div className="flex gap-[15px] items-center text-SCRIPT-INK font-nunito font-medium">
              <ArrowLeft2 size="20" color="#8F9198" />
              Back to sign in
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}
