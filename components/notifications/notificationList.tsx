import {
  Button,
  Group,
  Input,
  Pagination,
  Table,
  TextInput,
} from "@mantine/core";
import {
  ArrowLeft2,
  Calendar,
  ExportCurve,
  SearchNormal1,
} from "iconsax-react";
import React from "react";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import Link from "next/link";
import { TablePagination } from "../common/pagination";
import { useMutation, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { useDisclosure } from "@mantine/hooks";
import { SortDate } from "../modals/date";

export function NotificationList() {
  const [openedDate, { open: openDate, close: closeDate }] =
    useDisclosure(false);
  const [search, setSearch] = useState("");

  // geting list of activity
  const { data: activity } = useQuery({
    queryFn: () => builder.use().notification.api.activityLog(),
    queryKey: builder.notification.api.activityLog.get(),
    select: ({ data }) => data?.results,
  });

  const [activePage, setPage] = useState(1);
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  // exporting notifications
  // const { data: notification } = useQuery({
  //   queryFn: () => builder.use().notification.api.activityLogExorted(),
  //   queryKey: builder.notification.api.activityLogExorted.get(),
  //   select: ({ data }) => data,

  return (
    <div>
      <div className="flex justify-between items-center pb-[25px] pt-[20px] px-[20px] notification">
        <div className="flex gap-[10px] items-center">
          <ArrowLeft2 size="18" color="#5E606A" />
          <Link
            href={"/home"}
            className="text-[14px] text-[#5E606A] font-nunito font-semibold"
          >
            Back
          </Link>
        </div>
        <div className="flex gap-[16px] items-center">
          <div className="flex items-center bg-[#F7F9FC]">
            <div
              className="flex items-center gap-[3px]  px-[12px] py-[6px] rounded-l-[8px]"
              // onClick={() => mutate()}
            >
              <ExportCurve size="13" color="#5E606A" variant="Bold" />
              <span className="text-[14px] text-[#5E606A] font-nunito font-medium">
                Export
              </span>
            </div>
            <Input
              styles={{
                input: {
                  border: "1px #A1A9B8",
                  boxShadow:
                    "0px 0px 0px 1px rgba(134, 143, 160, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                  borderRadius: "0px 8px 8px 0px",
                },
              }}
              placeholder="Search"
              rightSection={<SearchNormal1 size="13" color="#5E606A" />}
            />
          </div>
          <div className="flex items-center gap-[16px]">
            <p className="text-[12px] text-[#C1C2C6] font-nunito flex items-center gap-[10px]">
              <span> Sort by:</span>
              <div
                onClick={() => openDate()}
                className="flex items-center gap-[10px] bg-[white] p-[15px]"
              >
                <span>Date Range</span>
                <Calendar size="16" color="#C1C2C6" />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="pl-[clamp(10px,1.3vw,20px)] pt-[25px]">
        <Table horizontalSpacing="md" highlightOnHover verticalSpacing="md">
          <thead className="bg-[#F5F5F6]">
            <tr>
              <th className="">User</th>
              <th className="">Action</th>
              <th className="">Date</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {activity?.map((item) => (
              <tr>
                <td>{item.actor} </td>
                <td>{item.action}</td>
                <td>{item.date_created}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className=" py-[5px] px-[24px]">
        <TablePagination />
      </div>
      <SortDate opened={openedDate} close={closeDate} />
    </div>
  );
}
