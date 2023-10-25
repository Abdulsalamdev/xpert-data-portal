import { RingProgress } from "@mantine/core";
import { People } from "iconsax-react";
import React from "react";

export function Overview() {
  return (
    <div className="flex gap-[20px] justify-between pb-[20px] flex-wrap">
      <div className="grow p-[18px] flex flex-col overview">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[7px]">
            <p className="text-[12px] text-[#8E9391] font-nunito font-medium">
              Overall number of Staff
            </p>
            <p className="font-bold font-nunito text-[#2A332F] text-[clamp(30px,2.8vw,40px)]">
              1009
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
                { value: 70, color: "#3851DD" },
                { value: 30, color: "#8F9198" },
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
            <p className="text-[14px] font-nunito font-semibold text-[#2C2F3C]">
              709
            </p>
            <p className="text-[14px] font-nunito font-semibold text-[#2C2F3C]">
              300
            </p>
          </div>
        </div>
      </div>
      <div className="grow p-[18px] flex flex-col justify-between overview">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[7px]">
            <p className="text-[12px] text-[#8E9391] font-nunito font-medium">
              Overall number of Tribes
            </p>
            <p className="font-bold font-nunito text-[#2A332F] text-[clamp(30px,2.8vw,40px)]">
              20
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
          <p className="text-[14px] text-[#2C2F3C] font-nunito font-semibold">
            10d ago
          </p>
        </div>
      </div>
      <div className="grow p-[18px] flex flex-col justify-between overview">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[7px]">
            <p className="text-[12px] text-[#8E9391] font-nunito font-medium">
              Overall number of Squads
            </p>
            <p className="font-bold font-nunito text-[#2A332F] text-[clamp(30px,2.8vw,40px)]">
              85
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
          <p className="text-[14px] text-[#2C2F3C] font-nunito font-semibold">
            10d ago
          </p>
        </div>
      </div>
      {/* <div className="grow "></div>
      <div className="grow"></div> */}
    </div>
  );
}
