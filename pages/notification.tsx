import { Sidebar } from "@/components/common/sidebar";
import { Nav } from "@/components/notifications/nav";
import { NotificationList } from "@/components/notifications/notificationList";
import React from "react";

export default function Notification() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="pt-[clamp(9px,1.1vw,18px)] pr-[clamp(9px,1.1vw,18px)] grow dark:bg-[#161C27]">
          <NotificationList />
        </div>
      </div>
    </div>
  );
}
