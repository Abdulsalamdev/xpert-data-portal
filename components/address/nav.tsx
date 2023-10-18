import React from "react";
import Image from "next/image";
import { ArrowRight2, Home2, Notification } from "iconsax-react";
import { DashMenu } from "../common/dashmenu";
import { useTheme } from "next-themes";
import { Widget } from "../common/widget";
import Link from "next/link";
export function Nav() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div className="w-[100%] border-b-solid border-b-[0.5px] dark:border-b-[#252D3D] border-b-[#F0F0F1] bg-[#ffffff] dark:bg-[#1A212E]">
      <div className="w-[96%] m-auto flex justify-between items-center ">
        <div className="p-[10px] flex gap-[125px]">
          <Image src={"/images/logo.png"} alt={""} width={70} height={70} />
          <div className="flex gap-[10px] items-center">
            <Link href={"/home"}>
              <Home2 size="22" color="#C1C2C6" />
            </Link>
            <ArrowRight2 size="16" color="#C1C2C6" />
            <span className="text-[#3851DD] text-[12px] font-nunito font-medium">
              Office Address
            </span>
          </div>
        </div>
        <div className="flex gap-[20px] items-center p-[10px] border-l-solid border-l-[1px] border-l-[#F0F0F1] dark:border-l-[#252D3D]">
          <Link href={"/notification"}>
            <Notification size="22" color="#C1C2C6" />
          </Link>
          <DashMenu />
          <div>{theme === "light" ? null : <Widget />}</div>
          <div className="flex gap-[7px] items-center">
            <Image src={"/images/gloria.png"} width={40} height={40} alt={""} />
            <Link href={"/profile"}>
              <div className="flex flex-col">
                <p className="text-[14px] font-nunito font-semibold text-BLUE-SASH dark:text-PARTRIDGE-GREY">
                  Gloria Eromonsele
                </p>
                <p className="text-[12px] text-PARTRIDGE-GREY">Admin</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
