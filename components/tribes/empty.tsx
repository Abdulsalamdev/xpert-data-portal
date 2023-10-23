import { Input } from "@mantine/core";
import { Add, ExportCurve, Filter, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import React from "react";

export function EmptyTribe() {
  return (
    <div>
      <div className="flex justify-between pl-[20px] pb-[32px] border-b-[1px] border-[#afb4bd] pr-[20px]">
        <div className="flex gap-[16px] ">
          <div className="flex items-center gap-[3px]  px-[12px] py-[6px] rounded-[8px] bg-[#F7F9FC] border-solid border-[1px] border-[#A1A9B8]">
            <ExportCurve size="13" color="#5E606A" variant="Bold" />
            <span className="text-[14px] text-[#5E606A] font-nunito font-medium">
              Export
            </span>
          </div>
          <div className="flex items-center rounded-[8px] border-solid border-[1px] border-[#A1A9B8]">
            <Input
              styles={{
                input: {
                  border: "1px #A1A9B8",
                  boxShadow:
                    "0px 0px 0px 1px rgba(134, 143, 160, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                  borderRadius: "8px 8px 8px 8px",
                },
              }}
              placeholder="Search"
              rightSection={<SearchNormal1 size="13" color="#5E606A" />}
            />
          </div>
        </div>
        <div className="flex gap-[5px] items-center bg-[#3045BC] rounded-[8px] py-[6px] px-[12px] text-[white] text-[14px] font-nunito font-medium">
          <span>Create Tribe</span>
        </div>
      </div>
      <div className="pl-[20px] pt-[15px] pb-[5px] text-[#4A4C58] text-[14px] border-solid border-b-[1px] border-b-[#A1A9B8] ">
        Tribe List{" "}
        <span className="text-[#8F9198] text-[12px] px-[6px] bg-[#F0F0F1] rounded-[13px]">
          (0)
        </span>
      </div>
      <div className="flex justify-center items-center empty">
        <div className="flex flex-col items-center gap-[16px]">
          <Image
            src={"/images/nothing.svg"}
            alt={""}
            width={100}
            height={100}
          />
          <p className="text-[#5E606A] text-[24px]">Tribe list empty</p>
          <p className="text-[14px] text-[#5E606A] text-center w-[270px]">
            You are yet to create any tribe
          </p>
          <div className="flex gap-[5px] items-center bg-[#3045BC] rounded-[8px] py-[6px] px-[12px] text-[white] text-[14px] font-nunito font-medium mt-[10px]">
            <Add size="18" color="#FFFFFF" />
            <span>Create tribe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
