import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { StaffTable } from "./staffTable";

export function StaffList() {
  return (
    <div className="pt-[10px]">
      <div className="flex justify-between pb-[10px]">
        <p className="text-[#2C2F3C] text-[16px] font-nunito font-semibold">
          Recently Uploaded staff
        </p>
        <Link href={"/management"}>
          <p className="flex gap-[7px] items-center">
            <span className="text-[#3045BC] text-[12px] font-nunito font-medium">
              View all staff
            </span>
            <ArrowRight2 size="16" color="#3045BC" />
          </p>
        </Link>
      </div>
      <StaffTable />
    </div>
  );
}
