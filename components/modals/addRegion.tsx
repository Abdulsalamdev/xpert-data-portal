import React from "react";
import { AddressSucess } from "../types/AllTypes";
import { Modal, Select } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "@mantine/form";

export function AddRegion({ opened, close }: AddressSucess) {
  const { data: cityAddress } = useQuery({});
  const myform = useForm({
    initialValues: {
      // id: ,
      description: "",
      region: "",
      city: "",
      latitude: "",
      longitude: "",
    },
  });
  return (
    <Modal
      opened={opened}
      size="sm"
      onClose={close}
      title="Add Region"
      centered
      styles={{
        content: {
          borderRadius: "20px",
        },
      }}
    >
      <div>
        <p className="text-[#54565B] text-[14px] pb-[7px]">Region (Country)</p>
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
        <div className="pb-[40px]">
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
        <button
          type="submit"
          className="bg-[#3851DD] text-[white] py-[15px] px-[24px] w-[100%] rounded-[6px] text-[16px] "
        >
          Add Address
        </button>
      </div>
    </Modal>
  );
}
