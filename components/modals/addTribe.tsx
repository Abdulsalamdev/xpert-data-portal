import { Modal, Select, TextInput } from "@mantine/core";
import React from "react";
import { AddressSucess } from "../types/AllTypes";
import { ArrowDown2 } from "iconsax-react";

export function AddTribe({ opened, close }: AddressSucess) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Create tribe"
      centered
      styles={{
        content: {
          borderRadius: "20px",
        },
      }}
    >
      <div className="flex flex-col gap-[30px] pt-[30px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] text-[#4A4C58] font-medium">Tribe Name</p>
          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="Enter Name"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] text-[#4A4C58] font-medium">
            Tribe Discription
          </p>
          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="Enter Discription"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] text-[#4A4C58] font-medium">
            Assign Tribe Lead
          </p>

          <Select
            searchable
            placeholder="Select Member"
            rightSection={
              <ArrowDown2 variant="Bold" size="16" color="#8F9198" />
            }
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
        </div>
        <button className="rounded-[8px] w-full bg-[#3045BC] text-[#FFFFFF] py-[6px] ">
          Create Tribes
        </button>
      </div>
    </Modal>
  );
}
