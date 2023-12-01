import React from "react";
import { Sso } from "../common/sso";
import Image from "next/image";
import { Button, Loader, PasswordInput, Stack, TextInput } from "@mantine/core";
import { Eye, EyeSlash } from "iconsax-react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { cookieStorage } from "@ibnlanre/portal";
import * as Yup from "yup";
import { yupResolver } from "@mantine/form";

const schema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
export function Sign_in() {
  const { push } = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationFn: () => builder.use().auth.api.login(myForm.values),
    mutationKey: builder.auth.api.login.get(),
    onSuccess(data, variables, context) {
      push("/home");
      toast.success("login successful");
      cookieStorage.setItem("my-user", JSON.stringify(data.data));
      myForm.reset();
    },
    onError(err) {
      console.log(err);
      toast.error(err?.AxiosError?.message as string);
    },
  });

  const myForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
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
        <form
          onSubmit={myForm.onSubmit(() => {
            mutate();
          })}
          className="sign-1 p-[clamp(15px,2.2vw,40px)] rounded-[16px] bg-[#ffffff] w-[clamp(300px,28vw,500px)]"
        >
          <div className="">
            <div className="text-[clamp(20px,1.4vw,24px)] text-BLUE-SASH font-nunito font-semibold pb-[Clamp(20px,2vw,30px)]">
              Sign in with SSO
            </div>
            <div className="flex flex-col gap-[20px] pb-[30px]">
              <div className="text-[14px] text-BLUE-SASH ">Email Address</div>

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
            </div>
            <div className="flex flex-col gap-[20px] pb-[19px] w-full">
              <div className="text-[14px] text-BLUE-SASH ">Password</div>
              <PasswordInput
                {...myForm.getInputProps("password")}
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
              <div className="flex justify-end text-RED-INFERNO text-[12px] font-nunito font-bold pb-[30px]">
                Forgot Password?
              </div>
            </Link>
            <button
              type="submit"
              className="auth-btn font-nunito font-bold flex justify-center items-center"
            >
              {isLoading ? <Loader size="md" /> : <span>Sign in</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
