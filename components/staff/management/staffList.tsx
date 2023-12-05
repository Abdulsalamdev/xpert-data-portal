import React, { useState } from "react";
import { Checkbox, Input, Pagination, Table, TextInput } from "@mantine/core";
import {
  Add,
  ArrowLeft2,
  ArrowRight2,
  ExportCurve,
  Filter,
  SearchNormal1,
} from "iconsax-react";
import Image from "next/image";
import { StaffActive, StaffInActive } from "./action";
import { useDisclosure } from "@mantine/hooks";
import { AddStaff } from "@/components/modals/addStaff";
import { StaffSucess } from "@/components/modals/staffSucess";
import { DeactivateStaff } from "@/components/modals/deactivateStaff";
import { FilterStaff } from "@/components/drawer/filterStaff";
import { TablePagination } from "@/components/common/pagination";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { STAFFLISTDATA } from "@/components/types/AllTypes";
import { useTheme } from "next-themes";
import { useForm } from "@mantine/form";
import { usePortal } from "@ibnlanre/portal";
import { staffListAtom } from "@/components/types/query-store";

export function MemberList() {
  const [openedStaff, { open: openStaff, close: closeStaff }] =
    useDisclosure(false);
  const [openedFilter, { open: openFilter, close: closeFilter }] =
    useDisclosure(false);
  // calling the atom
  const [query, setQuery] = usePortal.atom(staffListAtom);

  const myForm = useForm({
    initialValues: {
      search: "",
    },
  });

  // geting list of staff
  const { data: staff } = useQuery({
    queryFn: (params) =>
      builder.use().staff.api.staffList({
        search: myForm.values.search,
        //query the atom
        is_active: query?.is_active,
        tribe_name: query?.tribe_name,
        squad__name: query?.squad__name,
        page: query?.page,
      }),
    queryKey: builder.staff.api.staffList.use({
      search: myForm.values.search,
      is_active: query?.is_active,
      tribe_name: query?.tribe_name,
      squad__name: query?.squad__name,
      page: query?.page,
    }),
    select: ({ data }) => data,
  });

  const [activePage, setPage] = useState(1);
  const handlePrevPage = () => {
    setPage(activePage - 1);
  };

  const handleNextPage = () => {
    setPage(activePage + 1);
  };

  const itemsPerPage = 5;

  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div>
      <div className="flex justify-between pl-[20px] pb-[32px] border-b-[1px] border-[#afb4bd] pr-[20px] flex-wrap">
        <div className="flex gap-[16px] ">
          <div className="flex items-center gap-[3px]  px-[12px] py-[6px] rounded-[8px]  border-solid border-[1px] border-[#A1A9B8]">
            <ExportCurve size="13" color="#5E606A" variant="Bold" />
            <span className="text-[14px] text-[#5E606A] font-nunito font-medium">
              Export
            </span>
          </div>
          <div className="flex items-center  rounded-[8px] border-solid border-[1px] border-[#A1A9B8]">
            <div
              className="flex items-center gap-[3px]  px-[12px] py-[6px] rounded-l-[8px] "
              onClick={openFilter}
            >
              <Filter size="13" color="#5E606A" variant="Bold" />
              <span className="text-[14px] text-[#5E606A] font-nunito font-medium">
                Filter
              </span>
            </div>
            <TextInput
              {...myForm.getInputProps("search")}
              styles={{
                input: {
                  background: theme === "light" ? "white" : "#232A37",
                  color: theme === "light" ? "black" : "white",
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
        </div>
        <div
          className="flex gap-[5px] items-center bg-[#3045BC] rounded-[8px] py-[6px] px-[12px] text-[white] text-[14px] font-nunito font-medium"
          onClick={openStaff}
        >
          <span>Add Member</span>
        </div>
      </div>
      <div className="pl-[20px] pt-[15px] pb-[5px] text-[#4A4C58] text-[14px] border-solid border-b-[1px] border-b-[#A1A9B8] ">
        Staff List{" "}
        <span className="text-[#8F9198] text-[12px] px-[6px] bg-[#F0F0F1] rounded-[13px] dark:bg-SKY-CAPTAIN dark:text-[white]">
          {staff?.count}
        </span>
      </div>
      <div className="pl-[20px] pt-[20px] pr-[20px] staffManagement">
        <Table horizontalSpacing="md" verticalSpacing="md">
          <thead className="bg-[#F5F5F6]">
            <tr className=" dark:bg-[#232A37]">
              {theme === "light" ? (
                <th>
                  <Checkbox color="violet" size="md" />
                </th>
              ) : null}
              <th className="dark:text-[white]">S/N</th>

              <th className="dark:text-[white]">Name</th>
              <th className="dark:text-[white]">Email Address</th>
              <th className="dark:text-[white]">Mobile Number</th>
              <th className="dark:text-[white]">Tribe / Department</th>
              <th className="dark:text-[white]">Squad / Unit</th>
              <th className="dark:text-[white]">Status</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {staff?.results?.map((element: STAFFLISTDATA) => (
              <tr
                key={element.id}
                className="tb dark:hover:bg-[#2f313a] hover:bg-[#f5f5f5]"
              >
                {theme === "light" ? (
                  <td>
                    <Checkbox color="violet" size="md" />
                  </td>
                ) : null}
                <td className="dark:text-[white]">{element.id}</td>
                <td className="dark:text-[white]">{element.name}</td>
                <td className="dark:text-[white]">{element.email}</td>
                <td className="dark:text-[white]">{element.phone_number}</td>
                <td className="dark:text-[white]">{element.tribe}</td>
                <td className="dark:text-[white]">{element.squad}</td>
                <td className="dark:text-[white]">
                  <div className="flex gap-[10px] items-center">
                    <p
                      style={{
                        backgroundColor:
                          element.status === true
                            ? theme === "light"
                              ? "#E7F9F0"
                              : "rgb(161 221 191)"
                            : theme === "dark"
                            ? "rgb(194 104 105 / 83%)"
                            : "#FDEEEE",
                        color: element.status === true ? "#076D3A" : "#873031",
                      }}
                      className="flex gap-[4px] p-[8px] rounded-[16px]  items-center"
                    >
                      <div
                        style={{
                          backgroundColor:
                            element.status === true ? "#0DBF66" : "#ED5556",
                          width: "5px",
                          height: "5px",
                        }}
                        className="rounded-full"
                      ></div>
                      {element.status === true ? "Active" : "Inactive"}
                    </p>
                    {element.status === true ? (
                      <StaffInActive id={element.id} initialData={element} />
                    ) : (
                      <StaffActive id={element.id} initialData={element} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="pb-[10px]">
          {/* <TablePagination /> */}
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
                total={Math.ceil((staff?.count as number) / itemsPerPage)}
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
                className="p-2 flex border border-[#DBD9D9] gap-[7px] rounded-lg items-center  dark:bg-[#3851DD] dark:text-[#FFFFFF] dark:border-none"
                onClick={handleNextPage}
                disabled={
                  activePage === (staff?.count as number) / itemsPerPage
                }
              >
                <span className="text-[#514747] text-[14px] dark:text-[#FFFFFF]">
                  Next
                </span>
                <ArrowRight2
                  size="16"
                  color={theme === "light" ? "#514747" : "#FFFFFF"}
                  variant="Outline"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddStaff opened={openedStaff} close={closeStaff} />
      <FilterStaff opened={openedFilter} close={closeFilter} />
    </div>
  );
}
