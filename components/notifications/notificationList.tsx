import { Input, Table } from "@mantine/core";
import { ArrowLeft2, ExportCurve, SearchNormal1 } from "iconsax-react";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { NotificationCalender } from "../modals/notification-Modal";
const elements = [
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
  {
    name: "abdulsalam",
    Email: "abdulsalam@gmail.com",
    Mobile: "0812838738787",
  },
];

export function NotificationList() {
  const [opened, { open, close }] = useDisclosure(false);
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.Email}</td>
      <td>{element.Mobile}</td>
    </tr>
  ));

  return (
    <div>
      <div className="flex justify-between items-center pb-[25px] pt-[20px] px-[20px] notification">
        <div className="flex gap-[10px] items-center" onClick={open}>
          <ArrowLeft2 size="18" color="#5E606A" />
          <p className="text-[14px] text-[#5E606A] font-nunito font-semibold">
            Back
          </p>
        </div>
        <div className="flex gap-[16px] items-center">
          <div className="flex items-center bg-[#F7F9FC]">
            <div className="flex items-center gap-[3px]  px-[12px] py-[6px] rounded-l-[8px]">
              <ExportCurve size="13" color="#5E606A" variant="Bold" />
              <span className="text-[14px] text-[#5E606A] font-nunito font-medium">
                Export
              </span>
            </div>
            <Input
              styles={{
                input: {
                  border: "1px solid #A1A9B8",
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
            <p className="text-[12px] text-[#C1C2C6] font-nunito">Sort by:</p>
          </div>
        </div>
      </div>
      <div className="pl-[clamp(10px,1.3vw,20px)] pt-[25px]">
        <Table horizontalSpacing="md" highlightOnHover>
          <thead className="bg-[#F5F5F6]">
            <tr>
              <th className="">User</th>
              <th className="">Action</th>
              <th className="">Date</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">{rows}</tbody>
        </Table>
      </div>
      <NotificationCalender close={close} opened={opened} />
    </div>
  );
}
