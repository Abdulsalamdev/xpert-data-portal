import { Sidebar } from "@/components/common/sidebar";
import { EmptyStaff } from "@/components/staff/management/emptyStaff";
import { Nav } from "@/components/staff/management/nav";
import { MemberList } from "@/components/staff/management/staffList";
import React from "react";

export default function StaffManagement() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav />
      <div className="flex ">
        <Sidebar />
        <div className="pt-[25px]  grow  dark:bg-[#161C27] ">
          <MemberList />
        </div>
      </div>
    </div>
  );
}
