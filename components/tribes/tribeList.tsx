import { Input, Table } from "@mantine/core";
import { Edit2, ExportCurve, Filter, SearchNormal1 } from "iconsax-react";
import React from "react";
import { AddTribe } from "../modals/addTribe";
import { useDisclosure } from "@mantine/hooks";
import { TablePagination } from "../common/pagination";

export function TribeList() {
  const elements = [
    {
      id: "1",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Carbon",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "2",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Nitrogen",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "3",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Yttrium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "4",
      name: "abdulsalam",

      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Barium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "5",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Cerium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "6",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Cerium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "7",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Cerium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "8",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Cerium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },

    {
      id: "9",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Cerium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
    {
      id: "10",

      name: "abdulsalam",
      Email: "abdulsalam@gmail.com",
      Mobile: "0812838738787",
      tribe: "Cerium",

      action: (
        <div className="flex gap-[16px] items-center">
          <div className="py-[5px] px-[10px] bg-[#EBEEFC] border-solid border-[1px] border-[#EBEEFC] text-[#3851DD] text-[12px] font-medium">
            View Tribe
          </div>
        </div>
      ),
    },
  ];

  const [openedTribe, { open: openTribe, close: closeTribe }] =
    useDisclosure(false);
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.Email}</td>
      <td>{element.Mobile}</td>
      <td>{element.tribe}</td>
      <td className="flex gap-[16px] items-center">
        <div
          onClick={openTribe}
          className="flex items-center gap-[4px] py-[5px] px-[10px] rounded-[8px] border-solid border-[1px] border-[#3851DD] "
        >
          <Edit2 size="22" color="#3851DD" />
          <span className="text-[#3851DD] text-[12px] font-medium">Edit</span>
        </div>
        {element.action}
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="flex justify-between pl-[20px] pb-[32px] border-b-[1px] border-[#afb4bd] pr-[20px]">
        <div className="flex gap-[16px] ">
          <div className="flex items-center gap-[3px]  px-[12px] py-[6px] rounded-[8px] border-solid border-[1px] border-[#A1A9B8]">
            <ExportCurve size="13" color="#5E606A" variant="Bold" />
            <span className="text-[14px] text-[#5E606A] font-nunito font-medium">
              Export
            </span>
          </div>
          <div className="flex items-center rounded-[8px] border-solid border-[1px] border-[#A1A9B8]">
            <Input
              styles={{
                input: {
                  border: "1px #A1A9B8",
                  boxShadow:
                    "0px 0px 0px 1px rgba(134, 143, 160, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                  borderRadius: "8px 8px 8px 8px",
                },
              }}
              placeholder="Search"
              rightSection={<SearchNormal1 size="13" color="#5E606A" />}
            />
          </div>
        </div>
        <div
          className="flex gap-[5px] items-center bg-[#3045BC] rounded-[8px] py-[6px] px-[12px] text-[white] text-[14px] font-nunito font-medium"
          onClick={openTribe}
        >
          <span>Create Tribe</span>
        </div>
      </div>
      <div className="pl-[20px] pt-[15px] pb-[5px] text-[#4A4C58] text-[14px] border-solid border-b-[1px] border-b-[#A1A9B8] ">
        Tribe List{" "}
        <span className="text-[#8F9198] text-[12px] px-[6px] bg-[#F0F0F1] rounded-[13px]">
          (0)
        </span>
      </div>
      <div className="pl-[20px] pt-[20px] pr-[20px] staffManagement">
        <Table horizontalSpacing="md" highlightOnHover verticalSpacing="md">
          <thead className="bg-[#F5F5F6]">
            <tr>
              <th className="">Tribe</th>
              <th className="">Squads</th>
              <th className="">Tribe Lead</th>
              <th className="">Date Created</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">{rows}</tbody>
        </Table>
        <div className="pb-[10px]">
          <TablePagination />
        </div>
      </div>
      <AddTribe opened={openedTribe} close={closeTribe} />
    </div>
  );
}
