import { ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import { Calendar, Call, Copy, Data, Message, Profile } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { IconCheck } from "@tabler/icons-react";

const info = [
  {
    name: "DEPERTMENT",
    content: "Corporate Services",
    img: <Data color="#3851DD" />,
  },
  {
    name: "EMAIL ADDRESS",
    content: "geromonsele@afexnigeria.com",
    img: <Message color="#3851DD" />,
  },
  {
    name: "MOBIE ADDRES",
    content: "+234 810 6545 067",
    img: <Call color="#3851DD" />,
  },
  {
    name: "WORK MOBILE",
    content: "+234 810 6545 067",
    img: <Call color="#3851DD" />,
  },
  {
    name: "DATE OF BIRTH",
    content: "14 january, xxxx",
    img: <Calendar color="#3851DD" />,
  },
];
export function AdminInfo() {
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
            Gloria Eromonsele
          </p>
          <p className="text-[#8F9198] text-[16px] font-nunito font-medium pb-[10px]">
            Analyst, Talent Manager
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
                A2023272
              </span>
            </div>
            <div className="bg-[#E7F9F0] p-[8px] rounded-[8px] flex gap-[5px] items-center">
              <div className="w-[5px] h-[5px] rounded-full bg-[#076D3A]"></div>
              <div className="text-[#076D3A] text-[14px]">Active</div>
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
      </div>
      <div className="grow border-l-[#DADADD] border-l-[1px] border-solid pl-[20px] pr-[40px]">
        <div className="pt-[10px] border-b-[#DADADD] pb-[30px] border-b-[1px] border-solid ">
          <p className="text-[20px] text-[#4A4C58] font-nunito font-medium pb-[15px]">
            Personal Information
          </p>
          <div className="flex justify-between flex-wrap ">
            <div className=" flex flex-col gap-[30px]">
              <div>
                <p className="text-[14px] text-[#5E606A]">First Name</p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                  Gloria
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-[#5E606A]">Gender</p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                  Female
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[30px]">
              <div>
                <p className="text-[14px] text-[#5E606A]">Last Name</p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                  Eromonsele
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[#5E606A]">Marital status</p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                  Single
                </p>
              </div>
            </div>
            <div>
              <p className="text-[14px] text-[#5E606A]">Middle Name</p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                Onosetale
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
              <p className="text-[14px] text-[#5E606A]">Tribe / Department</p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                Corporate Services
              </p>
            </div>{" "}
            <div className="">
              <p className="text-[14px] text-[#5E606A]">Squad / Unit</p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                Talent Management
              </p>
            </div>{" "}
            <div className="">
              <p className="text-[14px] text-[#5E606A]">Designation</p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                Talent Manager
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
                  Sylvester Eromonsele
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-[#5E606A]">Relationship </p>
                <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                  Father
                </p>
              </div>
            </div>
            <div>
              <p className="text-[14px] text-[#5E606A]">Phone Number</p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                +234 810 6545 067
              </p>
            </div>
            <div>
              <p className="text-[14px] text-[#5E606A]">Email Address</p>
              <p className="text-[16px] text-[#5E606A] font-nunito font-medium">
                seromonsele@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
