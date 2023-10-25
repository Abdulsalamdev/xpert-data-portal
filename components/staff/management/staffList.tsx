import React from "react";
import { Checkbox, Input, Table } from "@mantine/core";
import { Add, ExportCurve, Filter, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import { StaffActive, StaffInActive } from "./action";
import { useDisclosure } from "@mantine/hooks";
import { AddStaff } from "@/components/modals/addStaff";
import { StaffSucess } from "@/components/modals/staffSucess";
import { DeactivateStaff } from "@/components/modals/deactivateStaff";
import { FilterStaff } from "@/components/drawer/filterStaff";
import { TablePagination } from "@/components/common/pagination";

const elements = [
  {
    id: "1",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Carbon",
    status: true,
    squad: "gsghghsghsggg",
  },
  {
    id: "2",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Nitrogen",
    status: true,
    squad: "gsghghsghsggg",
  },
  {
    id: "3",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Yttrium",
    status: true,
    squad: "gsghghsghsggg",
  },
  {
    id: "4",
    name: "abdulsalam",
    check: <Checkbox color="violet" size="md" />,
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Barium",
    status: true,
    squad: "gsghghsghsggg",
  },
  {
    id: "5",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    status: true,
    squad: "gsghghsghsggg",
  },
  {
    id: "6",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    status: false,
    squad: "gsghghsghsggg",
  },
  {
    id: "7",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    status: false,
    squad: "gsghghsghsggg",
  },
  {
    id: "8",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    status: false,
    squad: "gsghghsghsggg",
  },

  {
    id: "9",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    status: false,
    squad: "gsghghsghsggg",
  },
  {
    id: "10",
    check: <Checkbox color="violet" size="md" />,
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
    tribe: "Cerium",
    status: true,
    squad: "gsghghsghsggg",
  },
];
export function MemberList() {
  const [openedStaff, { open: openStaff, close: closeStaff }] =
    useDisclosure(false);
  const [openedFilter, { open: openFilter, close: closeFilter }] =
    useDisclosure(false);
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.check}</td>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.Email}</td>
      <td>{element.Mobile}</td>
      <td>{element.tribe}</td>
      <td>{element.squad}</td>
      <td>
        <div className="flex gap-[10px] items-center">
          <p
            style={{
              backgroundColor: element.status === true ? "#E7F9F0" : "#FDEEEE",
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
          {element.status === true ? <StaffActive /> : <StaffInActive />}
        </div>
      </td>
    </tr>
  ));
  return (
    <div>
      <div className="flex justify-between pl-[20px] pb-[32px] border-b-[1px] border-[#afb4bd] pr-[20px]">
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
        <span className="text-[#8F9198] text-[12px] px-[6px] bg-[#F0F0F1] rounded-[13px]">
          (0)
        </span>
      </div>
      <div className="pl-[20px] pt-[20px] pr-[20px] staffManagement">
        <Table horizontalSpacing="md" highlightOnHover verticalSpacing="md">
          <thead className="bg-[#F5F5F6]">
            <tr>
              <th>
                <Checkbox color="violet" size="md" />
              </th>
              <th>S/N</th>

              <th className="">Name</th>
              <th className="">Email Address</th>
              <th className="">Mobile Number</th>
              <th className="">Tribe / Department</th>
              <th className="">Squad / Unit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">{rows}</tbody>
        </Table>
        <div className="pb-[10px]">
          <TablePagination />
        </div>
      </div>
      <AddStaff opened={openedStaff} close={closeStaff} />
      <FilterStaff opened={openedFilter} close={closeFilter} />
    </div>
  );
}
