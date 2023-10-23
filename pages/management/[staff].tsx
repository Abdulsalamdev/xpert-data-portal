import { Sidebar } from "@/components/common/sidebar";
import { Nav } from "@/components/staff/profile/nav";
import { MemberProfile } from "@/components/staff/profile/profile";
import React from "react";

export default function StaffManagement() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav />
      <div className="flex gap-[clamp(10px,1.3vw,20px)]">
        <Sidebar />
        <div className="pt-[clamp(9px,1.1vw,18px)] pr-[clamp(9px,1.1vw,18px)] grow ">
          <MemberProfile />
        </div>
      </div>
    </div>
  );
}
