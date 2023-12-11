import {
  BrifecaseTick,
  Home2,
  People,
  Location,
  LogoutCurve,
  UserEdit,
} from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export function Sidebar() {
  const { pathname } = useRouter();
  const { resolvedTheme, theme, setTheme } = useTheme();

  const topSide = [
    {
      id: "1",
      name: "Dashboard Overview",
      img: (
        <Home2
          size="25"
          color={
            pathname.includes("/home")
              ? theme === "light"
                ? "#3045BC"
                : "#ffffff"
              : theme === "dark"
              ? "#ffffff"
              : "black"
          }
        />
      ),
      link: "/home",
    },
    {
      id: "2",
      name: "Staff Management",
      img: (
        <BrifecaseTick
          size="25"
          color={
            pathname.includes("/mangement")
              ? theme === "light"
                ? "#3045BC"
                : "#ffffff"
              : theme === "dark"
              ? "#ffffff"
              : "black"
          }
        />
      ),
      link: "/management",
    },
    {
      id: "3",
      name: "Tribes",
      img: (
        <People
          size="25"
          color={
            pathname.includes("/tribes")
              ? theme === "light"
                ? "#3045BC"
                : "#ffffff"
              : theme === "dark"
              ? "#ffffff"
              : "black"
          }
        />
      ),
      link: "/tribes",
    },

    {
      id: "4",
      name: "Office Address",
      img: (
        <Location
          size="25"
          color={
            pathname.includes("/address")
              ? theme === "light"
                ? "#3045BC"
                : "#ffffff"
              : theme === "dark"
              ? "#ffffff"
              : "black"
          }
        />
      ),
      link: "/address",
    },
  ];

  const downSide = [
    {
      id: "5",
      name: "Profile",
      img: (
        <UserEdit
          size="25"
          color={
            pathname.includes("/profile")
              ? theme === "light"
                ? "#3045BC"
                : "#ffffff"
              : theme === "dark"
              ? "#ffffff"
              : "black"
          }
        />
      ),
      link: "/profile",
    },
    {
      id: "6",
      name: "Logout",
      img: (
        <LogoutCurve
          size="25"
          color={
            pathname.includes("/login")
              ? theme === "light"
                ? "#3045BC"
                : "#ffffff"
              : theme === "dark"
              ? "#ffffff"
              : "black"
          }
        />
      ),
      link: "/login",
    },
  ];

  return (
    <div className="bg-[#F6F8F9] dark:bg-[#1A212E]">
      <div className="sideBar px-[24px] pt-[30px]">
        <div className="flex flex-col gap-[16px] ">
          {topSide.map((ele, index) => (
            <div
              className={`flex gap-[10px] items-center p-[8px] rounded-[8px] whitespace-nowrap ${
                pathname === ele.link ? "bg-[#E1E5FA] dark:bg-[#3045BC]" : ""
              }`}
              key={ele.id}
            >
              {ele.img}
              <Link
                href={ele.link}
                className={` text-BLUE-SASH text-[14px] font-nunito font-medium dark:text-[#ffffff] ${
                  pathname === ele.link
                    ? "text-[#3045BC] dark:text-[white]"
                    : ""
                }`}
              >
                {ele.name}
              </Link>
            </div>
          ))}
          <p className="text-[#8F9198] text-[14px] font-nunito font-medium">
            Admin
          </p>
          <div className="flex flex-col gap-[16px]">
            {downSide.map((ele) => (
              <div
                className={`items-center p-[8px] rounded-[8px] flex gap-[10px] ${
                  pathname === ele.link ? "bg-[#E1E5FA] dark:bg-[#3045BC]" : ""
                }`}
                key={ele.id}
              >
                {ele.img}
                <Link
                  // style={{
                  //   color: pathname === ele.link ? "#3045BC" : "",
                  // }}
                  href={ele.link}
                  className={` text-BLUE-SASH text-[14px] font-nunito font-medium dark:text-[#ffffff] ${
                    pathname === ele.link
                      ? "text-[#3045BC] dark:text-[white]"
                      : ""
                  }`}
                >
                  {ele.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
