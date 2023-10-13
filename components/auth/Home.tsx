import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useTheme } from "next-themes";
import Mode from "../common/light-dark-mode";
export function Landing() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div className="w-[80%] m-auto pt-[clamp(15px,1.9vw,30px)]">
      <div className="flex justify-between gap-[20px] items-center">
        <div className="flex items-center gap-[5px]">
          <span className=" text-16 text-SCRIPT-INK dark:text-[#ffffff]">
            Powered by
          </span>
          <Image src={"/images/logo.png"} alt={""} width={50} height={50} />
        </div>
        <div>
          <Mode />
        </div>
      </div>
      <section className="flex-wrap justify-between gap-[20px] items-center pt-[50px]  md:flex">
        <div>
          <div className="text-60 max-w-[300px] pb-[20px]">
            Welcome to the {""}
            <span className=" font-nunito font-bold">Xpert Data Portal</span>
          </div>
          <Button
            className="sign bg-KIKORANGI-BLUE rounded-[8px] py-[6px] px-[clamp(16px,1.3vw,24px)] hover:contrast-40"
            component={Link}
            href={"/login"}
          >
            sign in
          </Button>
        </div>
        <div>
          {theme === "light" ? (
            <Image
              src={"/images/home-img.png"}
              width={400}
              height={400}
              alt={""}
            />
          ) : (
            <Image src={"/images/chat.png"} alt={""} width={400} height={400} />
          )}
        </div>
      </section>
    </div>
  );
}
