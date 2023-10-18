import React from "react";
import { NavBar } from "../common/navBar";
import { Sidebar } from "../common/sidebar";
import { Overview } from "./Overview";
import { StaffList } from "./staffList";

export function HomeDashboard() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <NavBar />
      <div className="flex gap-[clamp(10px,1.3vw,20px)]">
        <Sidebar />
        <div className="pt-[clamp(9px,1.1vw,18px)] pr-[clamp(9px,1.1vw,18px)] grow ">
          <Overview />
          <StaffList />
        </div>
      </div>
    </div>
  );
}
