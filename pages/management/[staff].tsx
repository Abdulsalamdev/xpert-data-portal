import { builder } from "@/api/builder";
import { Sidebar } from "@/components/common/sidebar";
import { Nav } from "@/components/staff/profile/nav";
import { MemberProfile } from "@/components/staff/profile/profile";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

export default function StaffManagement() {
  const { query } = useRouter();

  const { data: staffDetail } = useQuery({
    queryFn: () => builder.use().staff.api.staffId(query?.staff as string),
    queryKey: builder.staff.api.staffId.use(query?.staff as string),
    select: ({ data }) => data,
  });

  console.log(staffDetail);
  return (
    <div className="h-[100vh] bg-[#FDFDFD] dark:bg-SKY-CAPTAIN">
      <Nav staffDetail={staffDetail} />
      <div className="flex gap-[clamp(10px,1.3vw,20px)] dark:bg-[#161C27]">
        <Sidebar />
        <div className="pt-[clamp(9px,1.1vw,18px)] pr-[clamp(9px,1.1vw,18px)] grow  dark:bg-[#161C27]">
          <MemberProfile staffDetail={staffDetail} />
        </div>
      </div>
    </div>
  );
}
