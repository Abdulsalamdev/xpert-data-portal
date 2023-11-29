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
  ArrowRight2,
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
import { useDisclosure, usePagination } from "@mantine/hooks";
import { SortDate } from "../modals/date";
import { useTheme } from "next-themes";

export function NotificationList() {
  const [openedDate, { open: openDate, close: closeDate }] =
    useDisclosure(false);
  const [search, setSearch] = useState("");
  const [activePage, setPage] = useState(1);

  // geting list of activity
  const { data: activity } = useQuery({
    queryFn: () => builder.use().notification.api.activityLog(activePage),
    queryKey: builder.notification.api.activityLog.get(activePage),
    select: ({ data }) => data,
  });
  console.log(activity?.results.length);
  // const [activePage, setPage] = useState(1);
  // const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  // pagination.setPage(5);

  const handlePrevPage = () => {
    setPage(activePage - 1);
  };

  const handleNextPage = () => {
    setPage(activePage + 1);
  };

  const itemsPerPage = 5; // Number of items to display per page

  // exporting notifications
  // const { data: notification } = useQuery({
  //   queryFn: () => builder.use().notification.api.activityLogExorted(),
  //   queryKey: builder.notification.api.activityLogExorted.get(),
  //   select: ({ data }) => data,
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div className="dark:bg-[#161C27]">
      <div className="flex justify-between items-center pb-[25px] pt-[20px] px-[20px] notification ">
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
          <div className="flex items-center bg-[#F7F9FC] dark:bg-[#232A37]">
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
              className=" dark:bg-[#232A37]"
              styles={{
                input: {
                  border: "1px #A1A9B8",
                  background: theme === "light" ? "white" : "#232A37",
                  color: theme === "light" ? "black" : "white",
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
                className="flex items-center gap-[10px] bg-[white] p-[15px] dark:bg-[#232A37]"
              >
                <span>Date Range</span>
                <Calendar size="16" color="#C1C2C6" />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="pl-[clamp(10px,1.3vw,20px)] pt-[25px]">
        <Table horizontalSpacing="md" verticalSpacing="md">
          <thead className="bg-[#F5F5F6]">
            <tr className=" dark:bg-[#232A37]">
              <th className="dark:text-[white]">User</th>
              <th className="dark:text-[white]">Action</th>
              <th className="dark:text-[white]">Date</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {activity?.results?.map((item, index) => (
              <tr
                key={index}
                className="tb dark:hover:bg-[#2f313a] hover:bg-[#f5f5f5]"
              >
                <td className="dark:text-[white]">{item.actor} </td>
                <td className="dark:text-[white]">{item.action}</td>
                <td className="dark:text-[white]">{item.date_created}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className=" py-[5px] px-[24px]">
        <div className="flex justify-between items-center py-[20px]">
          <button
            className="border border-[#E5E6E8] bg-white rounded-lg items-center p-2 flex itmes-center gap-[7px]"
            onClick={handlePrevPage}
            disabled={activePage === 1}
          >
            <ArrowLeft2 size="16" color="#514747" variant="Outline" />
            <span className="text-[#514747] text-[14px] ">Previous</span>
          </button>
          <Pagination
            value={activePage}
            onChange={setPage}
            total={Math.ceil((activity?.count as number) / itemsPerPage)}
            styles={(theme) => ({
              control: {
                "&[data-active]": {
                  backgroundImage: theme.fn.gradient({
                    from: "#3851DD",
                    to: "#3851DD",
                  }),
                  border: 0,
                },

                "&:first-of-type": {
                  display: "none !important",
                },
                "&:last-child": {
                  display: "none !important",
                },
              },
            })}
          />
          <button
            className="p-2 flex border border-[#DBD9D9] gap-[7px] rounded-lg items-center"
            onClick={handleNextPage}
            disabled={
              activePage ===
              (activity?.results?.length as number) / itemsPerPage
            }
          >
            <span className="text-[#514747] text-[14px] ">Next</span>
            <ArrowRight2 size="16" color="#514747" variant="Outline" />
          </button>
        </div>
      </div>
      <SortDate opened={openedDate} close={closeDate} />
    </div>
  );
}
