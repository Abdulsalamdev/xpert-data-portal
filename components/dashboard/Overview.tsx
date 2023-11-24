import { RingProgress } from "@mantine/core";
import { People } from "iconsax-react";
import React from "react";
import { STAFFDASHBOARD } from "../types/AllTypes";

export function Overview({
  staffList,
}: {
  staffList: STAFFDASHBOARD | undefined;
}) {
  return (
    <div className="flex gap-[20px] justify-between pb-[20px] flex-wrap">
      <div className="grow p-[18px] flex flex-col overview dark:bg-[#232A37]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[7px]">
            <p className="text-[12px] text-[#8E9391] font-nunito font-medium">
              Overall number of Staff
            </p>
            <p className="font-bold font-nunito text-[#2A332F] text-[clamp(30px,2.8vw,40px)] dark:text-[white]">
              {staffList?.overall_staff}
            </p>
          </div>
          <div className="bg-[#3045BC] rounded-full p-[10px] flex justify-center items-center">
            <People size="22" color="#FFFFFF" variant="Bold" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <RingProgress
              size={100}
              thickness={16}
              roundCaps
              sections={[
                { value: staffList?.male_staff as number, color: "#3851DD" },
                { value: staffList?.female_staff as number, color: "#8F9198" },
              ]}
            />
            <div className="flex flex-col gap-[5px]">
              <div className="text-[12px] text-[#8F9198] font-nunito font-medium flex items-center gap-[4px]">
                <span className="w-[8px] h-[3px] bg-[#3851DD]"></span>
                <span> Male Staff</span>
              </div>
              <div className="text-[12px] text-[#8F9198] font-nunito font-medium flex items-center gap-[4px]">
                <span className="w-[8px] h-[3px] bg-[#8F9198]"></span>
                <span> Female Staff</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="text-[14px] font-nunito font-semibold text-[#2C2F3C] dark:text-[#A9B4F0]">
              {staffList?.male_staff}
            </p>
            <p className="text-[14px] font-nunito font-semibold text-[#2C2F3C] dark:text-[#A9B4F0]">
              {staffList?.female_staff}
            </p>
          </div>
        </div>
      </div>
      <div className="grow p-[18px] flex flex-col justify-between overview dark:bg-[#232A37]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[7px]">
            <p className="text-[12px] text-[#8E9391] font-nunito font-medium">
              Overall number of Tribes
            </p>
            <p className="font-bold font-nunito text-[#2A332F] text-[clamp(30px,2.8vw,40px)] dark:text-[white]">
              {staffList?.overall_tribe}
            </p>
          </div>
          <div className="bg-[#1863BF] rounded-full p-[10px] flex justify-center items-center">
            <People size="22" color="#FFFFFF" variant="Bold" />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] font-nunito font-medium text-[#8F9198]">
            Last created:
          </p>
          <p className="text-[14px] text-[#2C2F3C] font-nunito font-semibold dark:text-[#A9B4F0]">
            {staffList?.last_created_tribe}
          </p>
        </div>
      </div>
      <div className="grow p-[18px] flex flex-col justify-between overview dark:bg-[#232A37]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[7px]">
            <p className="text-[12px] text-[#8E9391] font-nunito font-medium">
              Overall number of Squads
            </p>
            <p className="font-bold font-nunito text-[#2A332F] text-[clamp(30px,2.8vw,40px)] dark:text-[white]">
              {staffList?.overall_squad}
            </p>
          </div>
          <div className="bg-[#5E606A] rounded-full p-[10px] flex justify-center items-center">
            <People size="16" color="#FFFFFF" variant="Bold" />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] font-nunito font-medium text-[#8F9198]">
            Last created:
          </p>
          <p className="text-[14px] text-[#2C2F3C] font-nunito font-semibold dark:text-[#A9B4F0]">
            {staffList?.last_created_squad}
          </p>
        </div>
      </div>
    </div>
  );
}
