import { AdminInfo } from "@/components/Admin-profile/adminInfo";
import { Nav } from "@/components/Admin-profile/nav";
import { Sidebar } from "@/components/common/sidebar";

import React from "react";

export default function profile() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav />
      <div className="flex gap-[clamp(10px,1.3vw,20px)]">
        <Sidebar />
        <div className="pt-[clamp(9px,1.1vw,18px)] pr-[clamp(9px,1.1vw,18px)] grow dark:bg-[#161C27]">
          <AdminInfo />
        </div>
      </div>
    </div>
  );
}
