import { NavBar } from "@/components/common/navBar";
import { Sidebar } from "@/components/common/sidebar";
import { EmptyTribe } from "@/components/tribes/empty";
import { Nav } from "@/components/tribes/nav";
import React from "react";

export default function Tribs() {
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav />
      <div className="flex ">
        <Sidebar />
        <div className="pt-[25px] grow ">
          <EmptyTribe />
        </div>
      </div>
    </div>
  );
}
