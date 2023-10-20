import { AddressData } from "@/components/address/addressData";
import { Nav } from "@/components/address/nav";
import { Sidebar } from "@/components/common/sidebar";
import React from "react";

export default function address() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="pt-[30px] pr-[clamp(9px,1.1vw,18px)] grow">
          <AddressData />
        </div>
      </div>
    </div>
  );
}
