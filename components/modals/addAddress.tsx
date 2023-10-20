import { Modal, Select, Switch, TextInput, Textarea } from "@mantine/core";
import React from "react";
import { AddressSucess } from "../types/AllTypes";
import { ArrowDown2 } from "iconsax-react";
import { AddRegion } from "./addRegion";
import { useDisclosure } from "@mantine/hooks";

export function AddAddress({ opened, close }: AddressSucess) {
  const [openedRegion, { open: openRegion, close: closeRegion }] =
    useDisclosure(false);
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Add Address"
      centered
      styles={{
        content: {
          borderRadius: "20px",
        },
      }}
    >
      <div>
        <p className="pb-[16px] text-[14px] text-[#54565B]">Office Address</p>
        <div className="pb-[20px]">
          <Textarea placeholder="Full address of the office location" />
        </div>
        <div className="flex justify-between items-center pb-[20px]">
          <span className="text-[#54565B] text-[14px]">Region (Country)</span>
          <button className="text-[#3851DD] text-[14px]" onClick={openRegion}>
            Add New Region
          </button>
        </div>
        <div className="pb-[20px]">
          <Select
            searchable
            placeholder="Select Country"
            rightSection={<ArrowDown2 size="16" color="#8F9198" />}
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
        </div>
        <div className="pb-[25px]">
          <Select
            searchable
            placeholder="Select City"
            rightSection={<ArrowDown2 size="16" color="#8F9198" />}
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
        </div>
        <p className="text-[14px] text-[#54565B]">Office Coordinates</p>
        <div className="flex justify-between items-center pt-[10px] pb-[20px]">
          <TextInput placeholder="Latitude (e.g. 9.356767 N)" />
          <TextInput placeholder="Longitude (e.g. 7.356700 E)" />
        </div>
        <div className="flex gap-[32px] items-center pb-[40px]">
          <span className="text-[#54565B] text-[14px]">Set as Headquarter</span>
          <Switch />
        </div>
        <button
          type="submit"
          className="bg-[#3851DD] text-[white] py-[15px] px-[24px] w-[100%] rounded-[6px] text-[16px] "
        >
          Save Changes
        </button>
      </div>
      <AddRegion opened={openedRegion} close={closeRegion} />
    </Modal>
  );
}
