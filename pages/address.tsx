import { Nav } from "@/components/address/nav";
import { Sidebar } from "@/components/common/sidebar";
import React from "react";

export default function address() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav />
      <div className="flex gap-[clamp(10px,1.3vw,20px)]">
        <Sidebar />
        <div className="pt-[clamp(9px,1.1vw,18px)] pr-[clamp(9px,1.1vw,18px)] grow"></div>
      </div>
    </div>
  );
}
