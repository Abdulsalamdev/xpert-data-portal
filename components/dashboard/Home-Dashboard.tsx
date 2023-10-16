import React from "react";
import { NavBar } from "../common/navBar";
import { Sidebar } from "../common/sidebar";

export function HomeDashboard() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div></div>
      </div>
    </div>
  );
}
