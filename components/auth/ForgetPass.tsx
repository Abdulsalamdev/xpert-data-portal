import React from "react";
import Image from "next/image";
import { Sso } from "../common/sso";
import { Loader, TextInput } from "@mantine/core";
import Link from "next/link";
import { ArrowLeft2 } from "iconsax-react";
import { useForm } from "@mantine/form";
import { cookieStorage } from "@ibnlanre/portal";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
export function ForgetPass() {
  const { push } = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationFn: () => builder.use().auth.api.forgetPassword(myForm.values),
    mutationKey: builder.auth.api.forgetPassword.get(),
    onSuccess(data, variables, context) {
      console.log(data);
      toast.success("OTP sent, pls check your mail");
      cookieStorage.setItem("userEmail", myForm.values.email);
      push("/otp");
    },
    onError() {
      toast.error("something went worng !");
    },
  });
  const myForm = useForm({
    initialValues: {
      email: "",
    },
  });
  return (
    <form
      onSubmit={myForm.onSubmit(() => mutate())}
      className="w-[80%] m-auto pt-[30px] "
    >
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
          <div className="text-center flex justify-center max-w-[360px] text-BLUE-SASH text-[16px] pb-[clamp(12px,1.7vw,20px)]">
            Enter your emal address below,and we'll email you a 6-digit pin to
            reset your password.
          </div>
          <TextInput
            {...myForm.getInputProps("email")}
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

          <button
            type="submit"
            className="auth-btn font-nunito font-bold justify-center items-center mt-[clamp(20px,2vw,25px)] mb-[20px]"
          >
            {isLoading ? <Loader size="md" /> : <span> Submit</span>}
          </button>
          <div>
            <Link
              href={"/login"}
              className="flex justify-center items-center pt-[20px]"
            >
              <div className="flex gap-[15px] items-center text-SCRIPT-INK font-nunito font-medium">
                <ArrowLeft2 size="20" color="#8F9198" />
                Back to sign in
              </div>
            </Link>
          </div>
        </form>
      </div>
    </form>
  );
}
