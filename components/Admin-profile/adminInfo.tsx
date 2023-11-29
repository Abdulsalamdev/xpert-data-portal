import { ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import { Calendar, Call, Copy, Data, Message, Profile } from "iconsax-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import { cookieStorage } from "@ibnlanre/portal";
import { UserData } from "../types/AllTypes";
import { useTheme } from "next-themes";

export function AdminInfo() {
  const [userData, setUserData] = useState({} as UserData);
  console.log(userData);
  useEffect(() => {
    const user = cookieStorage.getItem("my-user");
    if (user) setUserData(JSON.parse(user));
  }, []);

  const { user } = userData;
  const { email, first_name, last_name, is_active } = { ...user };
  // const first_name = user.first_name;
  // const last_name = user.last_name;
  // const is_active = user.is_active;

  const info = [
    {
      name: "DEPERTMENT",
      content: userData.role,
      icon: Data,
    },
    {
      name: "EMAIL ADDRESS",
      content: email,
      icon: Message,
    },
    {
      name: "MOBIE ADDRES",
      content: userData.phone_number,
      icon: Call,
    },
    {
      name: "WORK MOBILE",
      content: userData.work_phone,
      icon: Call,
    },
    {
      name: "DATE OF BIRTH",
      content: userData.date_of_birth,
      icon: Calendar,
    },
  ];

  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div className="px-[25px] pt-[20px] flex">
      <div className="pr-[20px]">
        <div className="border-b-[#DADADD] border-b-[1px] border-solid pb-[30px]">
          <Image
            src={"/images/glimg.png"}
            alt={""}
            width={100}
            height={100}
            className="rounded-[12px]"
          />
          <p className="text-[#2C2F3C] font-nunito font-medium text-[clamp(27px,2vw,32px)] py-[7px] dark:text-[white]">
            {/* Gloria Eromonsele */}
            {first_name}
          </p>
          <p className="text-[#8F9198] text-[16px] font-nunito font-medium pb-[10px]">
            {userData.role}
          </p>
          <div className="flex gap-[5px] items-center">
            <div className="flex items-center gap-[7px] p-[10px] rounded-[8px] bg-[#EBEEFC] dark:bg-[#1C2433]">
              <p className="flex items-center gap-[1px]">
                <Profile size="12" color="#3851DD" variant="Bold" />
                <span className="text-[12px] text-[#352929] font-nunito font-medium dark:text-[#8F9198]">
                  Your id
                </span>
              </p>
              <span className="text-[#3851DD] text-[12px] font-nunito font-medium">
                {/* A2023272 */}
                {userData.unique_id}
              </span>
            </div>
            <div
              className=" p-[8px] rounded-[8px] flex gap-[5px] items-center"
              style={{
                backgroundColor:
                  is_active === true
                    ? theme === "light"
                      ? "#E7F9F0"
                      : "rgb(161 221 191)"
                    : theme === "dark"
                    ? "rgb(194 104 105 / 83%)"
                    : "#FDEEEE",
              }}
            >
              <div
                className="w-[5px] h-[5px] rounded-full "
                style={{
                  backgroundColor: is_active === true ? "#076D3A" : "#ED5556",
                }}
              ></div>
              <div
                className="text-[14px]"
                style={{
                  color: is_active === true ? "#076D3A" : "#873031",
                }}
              >
                {is_active === true ? "Active" : "Inactive"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] pt-[30px]">
          {info.map((ele, index) => (
            <div className="flex gap-[17px] items-center" key={index}>
              <div className="bg-[#EBEEFC] p-[14px] rounded-[8px] flex justify-center items-center dark:bg-[#1C2433]">
                <ele.icon color="#3851DD" />
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[#5E606A] text-[14px] dark:text-[white]">
                  {ele.name}
                </p>
                <p className="text-[#2C2F3C] text-[16px]. flex gap-[4px] dark:text-[#5E606A]">
                  {ele.content}
                  <CopyButton value={ele.content} timeout={2000}>
                    {({ copied, copy }) => (
                      <Tooltip
                        label={copied ? "Copied" : "Copy"}
                        style={{
                          backgroundColor: "#3851DD",
                        }}
                        withArrow
                        position="right"
                      >
                        <ActionIcon
                          color={copied ? "teal" : "#EBEEFC"}
                          onClick={copy}
                        >
                          {copied ? (
                            <IconCheck size="1rem" />
                          ) : (
                            <Copy color="#C1C2C6" size="17" />
                          )}
                        </ActionIcon>
                      </Tooltip>
                    )}
                  </CopyButton>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grow border-l-[#DADADD] border-l-[1px] border-solid pl-[20px] pr-[40px]">
        <div className="pt-[10px] border-b-[#DADADD] pb-[30px] border-b-[1px] border-solid ">
          <p className="text-[20px] text-[#4A4C58] font-nunito font-medium pb-[15px] dark:text-[white]">
            Personal Information
          </p>
          <div className="flex justify-between flex-wrap ">
            <div className=" flex flex-col gap-[30px]">
              <div>
                <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                  First Name
                </p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                  {/* Gloria */}
                  {first_name}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                  Gender
                </p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                  {/* Female */}
                  {userData.gender}
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[30px]">
              <div>
                <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                  Last Name
                </p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                  {/* Eromonsele */}
                  {last_name}
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                  Marital status
                </p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                  {/* Single */}
                  {userData.martial_status}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                Middle Name
              </p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                {/* Onosetale */}
                {userData.middle_name}
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-[#DADADD] pb-[30px] border-b-[1px] border-solid pt-[30px]">
          <p className="text-[20px] text-[#4A4C58] font-nunito font-medium pb-[15px] dark:text-[white]">
            Organization
          </p>
          <div className="flex justify-between">
            <div className="">
              <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                Tribe / Department
              </p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                {/* Corporate Services */}
                {userData.tribe}
              </p>
            </div>{" "}
            <div className="">
              <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                Squad / Unit
              </p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                {/* Talent Management */}
                {userData.squad}
              </p>
            </div>{" "}
            <div className="">
              <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                Designation
              </p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                {userData.role}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[20px]">
          <p className="text-[20px] text-[#4A4C58] font-nunito font-medium pb-[15px] dark:text-[white]">
            Next of Kin
          </p>
          <div className="flex justify-between flex-wrap ">
            <div className=" flex flex-col gap-[30px]">
              <div>
                <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                  Name
                </p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                  {userData.next_of_kin_first_name}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                  Relationship{" "}
                </p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                  {/* Father */}
                  {userData.next_of_kin_relationship}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                Phone Number
              </p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                {userData.next_of_kin_phone_number}
              </p>
            </div>
            <div>
              <p className="text-[14px] text-[#5E606A] dark:text-[#8F9198]">
                Email Address
              </p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium dark:text-[#C1C2C6]">
                {userData.next_of_kin_email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
