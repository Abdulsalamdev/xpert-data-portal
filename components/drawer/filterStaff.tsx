import { Accordion, Button, CloseButton, Drawer } from "@mantine/core";
import React, { useState } from "react";
import { AddressSucess, FilterStaff } from "../types/AllTypes";
import { useDisclosure } from "@mantine/hooks";
import { Filter } from "iconsax-react";
import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
import { usePortal } from "@ibnlanre/portal";
import { staffListAtom } from "../types/query-store";

export function FilterStaff({ close, opened }: FilterStaff) {
  const { data: tribe } = useQuery({
    queryFn: () => builder.use().tribes.api.tribeList(),
    queryKey: builder.tribes.api.tribeList.get(),
    select: ({ data }) => data,
  });
  console.log(tribe);
  //calling the atom
  const [query, setQuery] = usePortal.atom(staffListAtom);

  return (
    <div>
      <Drawer
        position="right"
        styles={{
          header: {
            paddingLeft: "30px",
            paddingTop: "40px",
            paddingRight: "20px",
            paddingBottom: "20px",
          },
          body: {
            paddingLeft: "30px",

            paddingRight: "20px",
          },
        }}
        opened={opened}
        size={"sm"}
        onClose={close}
        withCloseButton={false}
      >
        <div className="flex justify-between items-center pt-[40px] pb-[50px] border-b-[1px] border-solid border-b-[#DADADD]">
          <div className="flex items-center gap-[10px]">
            <Filter size="22" color="#4A4C58" variant="Bold" />
            <span>Filter</span>
          </div>

          <CloseButton onClick={close} />
        </div>
        <div className="pb-[70px]">
          <Accordion transitionDuration={700}>
            <Accordion.Item value="Tribe / Department">
              <Accordion.Control>Tribe / Department</Accordion.Control>
              <Accordion.Panel>
                <div className="flex flex-col gap-[18px] items-start pt-[20px]">
                  {tribe?.results?.map((item) => (
                    <Button className="text-[#000000]" key={item.id}>
                      {item?.name}
                    </Button>
                  ))}
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="Squad / Unit">
              <Accordion.Control>Squad / Unit</Accordion.Control>
              <Accordion.Panel>
                <div className="flex flex-col gap-[18px] items-start pt-[20px]">
                  <Button className="text-[#000000]"></Button>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="Status">
              <Accordion.Control>Status</Accordion.Control>
              <Accordion.Panel>
                <div className="flex flex-col gap-[18px] items-start pt-[20px]">
                  <Button className="text-[#000000]">Active</Button>
                  <Button className="text-[#000000]">Inactive</Button>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="flex gap-[10px] items-center">
          <button className="bg-[#3045BC] text-[#ffffff] text-[14px] font-medium px-[32px] grow py-[6px] rounded-[8px]">
            Search
          </button>
          <button
            className="flex gap-[8px] items-center py-[6px] px-[24px] clear grow justify-center"
            onClick={close}
          >
            <CloseButton />
            <span className="text-[#8F9198] text-[14px] font-medium">
              Clear
            </span>
          </button>
        </div>
      </Drawer>
    </div>
  );
}
