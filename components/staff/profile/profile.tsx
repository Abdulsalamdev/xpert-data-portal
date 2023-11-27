import {
  CopyButton,
  Tooltip,
  ActionIcon,
  Tabs,
  Select,
  Switch,
  Accordion,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import {
  Profile,
  Copy,
  Calendar,
  Call,
  Data,
  Message,
  Trash,
  ArrowDown2,
  TickSquare,
} from "iconsax-react";
import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useRouter } from "next/router";
import { UserData, UserStaff } from "@/components/types/AllTypes";
import { useDisclosure } from "@mantine/hooks";
import { DeactivateStaff } from "@/components/modals/deactivateStaff";
import { ActivateStaff } from "@/components/modals/activateStaff";

interface userContent {
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
}
export function MemberProfile({
  staffDetail,
}: {
  staffDetail: UserStaff | undefined;
}) {
  // const { user }: userContent = staffDetail?.user;
  // const {} = user;
  const info = [
    {
      name: "DEPERTMENT",
      content: staffDetail?.role,
      img: <Data color="#3851DD" />,
    },
    {
      name: "EMAIL ADDRESS",
      content: staffDetail?.email,
      img: <Message color="#3851DD" />,
    },
    {
      name: "MOBIE ADDRES",
      content: staffDetail?.work_phone,
      img: <Call color="#3851DD" />,
    },
    {
      name: "WORK MOBILE",
      content: staffDetail?.phone_number,
      img: <Call color="#3851DD" />,
    },
    {
      name: "DATE OF BIRTH",
      content: staffDetail?.date_of_birth,
      img: <Calendar color="#3851DD" />,
    },
  ];
  const [opened, { open, close }] = useDisclosure(false);
  const [openedActivate, { open: openActivate, close: closeActivate }] =
    useDisclosure(false);
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
          <p className="text-[#2C2F3C] font-nunito font-medium text-[clamp(27px,2vw,32px)] py-[7px]">
            {staffDetail?.first_name} {staffDetail?.last_name}
          </p>
          <p className="text-[#8F9198] text-[16px] font-nunito font-medium pb-[10px]">
            {staffDetail?.role}
          </p>
          <div className="flex gap-[5px] items-center">
            <div className="flex items-center gap-[7px] p-[10px] rounded-[8px] bg-[#EBEEFC]">
              <p className="flex items-center gap-[1px]">
                <Profile size="12" color="#3851DD" variant="Bold" />
                <span className="text-[12px] text-[#352929] font-nunito font-medium">
                  Your id
                </span>
              </p>
              <span className="text-[#3851DD] text-[12px] font-nunito font-medium">
                {staffDetail?.unique_id}
              </span>
            </div>
            <div
              className="bg-[#E7F9F0] p-[8px] rounded-[8px] flex gap-[5px] items-center"
              style={{
                backgroundColor:
                  staffDetail?.is_active === true ? "#E7F9F0" : "#FDEEEE",
              }}
            >
              <div
                className="w-[5px] h-[5px] rounded-full"
                style={{
                  backgroundColor:
                    staffDetail?.is_active === true ? "#076D3A" : "#ED5556",
                }}
              ></div>
              <div
                className="text-[14px]"
                style={{
                  color:
                    staffDetail?.is_active === true ? "#076D3A" : "#873031",
                }}
              >
                {staffDetail?.is_active === true ? "Active" : "Inactive"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] pt-[30px]">
          {info.map((ele, index) => (
            <div className="flex gap-[17px] items-center" key={index}>
              <div className="bg-[#EBEEFC] p-[14px] rounded-[8px] flex justify-center items-center">
                {ele.img}
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[#5E606A] text-[14px]">{ele.name}</p>
                <p className="text-[#2C2F3C] text-[16px]. flex gap-[4px]">
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
        <button
          className=" rounded-[10px] flex items-center gap-[10px] px-[30px] py-[20px] my-[50px] text-[white] text-[14px] font-medium"
          style={{
            backgroundColor:
              staffDetail?.is_active === true ? "#BF2018" : " #30AD74",
          }}
          onClick={staffDetail?.is_active === true ? openActivate : open}
        >
          {staffDetail?.is_active === true ? (
            <Trash size="22" color="#FF8A65" variant="Bulk" />
          ) : (
            <TickSquare size="16" color="#289061" variant="Bold" />
          )}
          <span>
            {staffDetail?.is_active === true ? (
              <span>Deactivate member</span>
            ) : (
              <span>Activate Member</span>
            )}
          </span>
        </button>
      </div>
      <div className="grow border-l-[#DADADD] border-l-[1px] border-solid pl-[20px] pr-[40px]">
        <Tabs defaultValue="first">
          <Tabs.List grow>
            <Tabs.Tab value="first">First tab</Tabs.Tab>
            <Tabs.Tab value="second">Second tab</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="first" pt="xs">
            <div className="pt-[10px] border-b-[#DADADD] pb-[30px] border-b-[1px] border-solid ">
              <p className="text-[20px] text-[#4A4C58] font-nunito font-medium pb-[15px]">
                Personal Information
              </p>
              <div className="flex justify-between flex-wrap ">
                <div className=" flex flex-col gap-[30px]">
                  <div>
                    <p className="text-[14px] text-[#5E606A]">First Name</p>
                    <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                      {staffDetail?.first_name}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-[#5E606A]">Gender</p>
                    <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                      {staffDetail?.gender}
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col gap-[30px]">
                  <div>
                    <p className="text-[14px] text-[#5E606A]">Last Name</p>
                    <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                      {staffDetail?.last_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#5E606A]">Marital status</p>
                    <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                      {staffDetail?.martial_status}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-[#5E606A]">Middle Name</p>
                  <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                    {staffDetail?.middle_name}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[#DADADD] pb-[30px] border-b-[1px] border-solid pt-[30px]">
              <p className="text-[20px] text-[#4A4C58] font-nunito font-medium pb-[15px]">
                Organization
              </p>
              <div className="flex justify-between">
                <div className="">
                  <p className="text-[14px] text-[#5E606A]">
                    Tribe / Department
                  </p>
                  <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                    {staffDetail?.tribe}
                  </p>
                </div>{" "}
                <div className="">
                  <p className="text-[14px] text-[#5E606A]">Squad / Unit</p>
                  <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                    {staffDetail?.squad}
                  </p>
                </div>{" "}
                <div className="">
                  <p className="text-[14px] text-[#5E606A]">Designation</p>
                  <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                    {staffDetail?.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-[20px]">
              <p className="text-[20px] text-[#4A4C58] font-nunito font-medium pb-[15px]">
                Next of Kin
              </p>
              <div className="flex justify-between flex-wrap ">
                <div className=" flex flex-col gap-[30px]">
                  <div>
                    <p className="text-[14px] text-[#5E606A]">Name</p>
                    <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                      {staffDetail?.next_of_kin_first_name}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-[#5E606A]">Relationship </p>
                    <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                      {staffDetail?.next_of_kin_relationship}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-[#5E606A]">Phone Number</p>
                  <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                    {staffDetail?.next_of_kin_phone_number}
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-[#5E606A]">Email Address</p>
                  <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                    {staffDetail?.next_of_kin_email}
                  </p>
                </div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xs">
            <div>
              <Accordion transitionDuration={700}>
                <Accordion.Item value="Tribe / Department">
                  <Accordion.Control>Customize card</Accordion.Control>
                  <Accordion.Panel>
                    <div className="flex flex-col gap-[18px] items-start pt-[20px]">
                      <div className="flex justify-between items-center gap-[40px] w-full">
                        <p>Email Address</p>
                        <Switch />
                      </div>
                      <div className="flex justify-between  gap-[40px] w-full">
                        <p>Phone Number</p>
                        <Switch />
                      </div>
                      <div className="flex justify-between  gap-[40px] w-full">
                        <p>LinkedIn Profile</p>
                        <Switch />
                      </div>
                      <div className="flex justify-between  gap-[40px] w-full">
                        <p>Address</p>
                        <Switch />
                      </div>
                      <div className="flex justify-between  gap-[40px] w-full">
                        <p>Designation</p>
                        <Switch />
                      </div>
                      <button className="bg-[#3851DD] text-[white] py-[15px] flex justify-center px-[24px] grow rounded-[6px] w-full">
                        Save coustom setting
                      </button>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
      <DeactivateStaff opened={opened} close={close} />
      <ActivateStaff opened={openedActivate} close={closeActivate} />
    </div>
  );
}
