import React from "react";
import { NavBar } from "../common/navBar";
import { Sidebar } from "../common/sidebar";
import { Overview } from "./Overview";
import { StaffList } from "./staffList";
import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";

export function HomeDashboard() {
  const { data: staffList } = useQuery({
    queryFn: () => builder.use().staff.api.dashboardStaff(),
    queryKey: builder.staff.api.dashboardStaff.get(),
    select: ({ data }) => data,
  });

  console.log(staffList);
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <NavBar />
      <div className="flex gap-[clamp(10px,1.3vw,20px)]">
        <Sidebar />
        <div className="pt-[clamp(9px,1.1vw,18px)] pr-[clamp(9px,1.1vw,18px)] grow ">
          <Overview staffList={staffList} />
          <StaffList staffList={staffList} />
        </div>
      </div>
    </div>
  );
}
