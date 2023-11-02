import { Modal, Select, Switch, TextInput, Textarea } from "@mantine/core";
import React, { useState } from "react";
import {
  ADDADDRESS,
  AddressSucess,
  CITYADDRESSDATA,
  OPENADDRESS,
} from "../types/AllTypes";
import { ArrowDown2 } from "iconsax-react";
import { AddRegion } from "./addRegion";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useForm } from "@mantine/form";

export function AddAddress({ opened, close, region_Pk }: OPENADDRESS) {
  const [checked, setChecked] = useState(false);
  const { mutate } = useMutation({
    mutationFn: () => builder.use().address.api.addAddress(myform.values),
    mutationKey: builder.address.api.addAddress.get(),
  });
  const [openedRegion, { open: openRegion, close: closeRegion }] =
    useDisclosure(false);
  const myform = useForm({
    initialValues: {
      id: 0,
      is_headquarter: true || false,
      description: "",
      region: "",
      city: "",
      latitude: "",
      longitude: "",
    },
  });

  // geting the regions
  const { data: region } = useQuery({
    queryFn: () => builder.use().region.api.regionList(),
    queryKey: builder.region.api.regionList.get(),
    select: ({ data }) => data?.results,
  });

  // geting the city address
  const { data: cityAddress } = useQuery({
    queryFn: () => builder.use().schema.api.cityAddress(region_Pk as number),
    queryKey: [...builder.schema.api.cityAddress.get(), region_Pk],
    select: ({ data }) => data?.results,
  });

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
      <form onSubmit={myform.onSubmit(() => console.log("hello world"))}>
        <p className="pb-[16px] text-[14px] text-[#54565B]">Office Address</p>
        <div className="pb-[20px]">
          <Textarea
            placeholder="Full address of the office location"
            {...myform.getInputProps("description")}
          />
        </div>
        <div className="flex justify-between items-center pb-[20px]">
          <span className="text-[#54565B] text-[14px]">Region (Country)</span>
          <button className="text-[#3851DD] text-[14px]" onClick={openRegion}>
            Add New Region
          </button>
        </div>

        {region?.map((ele) => (
          <div>
            <div className="pb-[20px]">
              <Select
                key={ele.id}
                {...myform.getInputProps("region")}
                searchable
                placeholder="Select Country"
                rightSection={<ArrowDown2 size="16" color="#8F9198" />}
                data={[{ value: ele.name, label: ele.name }]}
              />
            </div>
          </div>
        ))}
        {cityAddress?.map((item: any) => (
          <div className="pb-[25px]">
            <Select
              {...myform.getInputProps("city")}
              searchable
              placeholder="Select City"
              rightSection={<ArrowDown2 size="16" color="#8F9198" />}
              data={[{ value: "", label: "React" }]}
            />
          </div>
        ))}

        <p className="text-[14px] text-[#54565B]">Office Coordinates</p>
        <div className="flex justify-between items-center pt-[10px] pb-[20px]">
          <TextInput
            placeholder="Latitude (e.g. 9.356767 N)"
            {...myform.getInputProps("latitude")}
          />
          <TextInput
            placeholder="Longitude (e.g. 7.356700 E)"
            {...myform.getInputProps("longitude")}
          />
        </div>
        <div className="flex gap-[32px] items-center pb-[40px]">
          <span className="text-[#54565B] text-[14px]">
            Save as Headquarter
          </span>
          <Switch {...myform.getInputProps("is_headquater")} />
        </div>
        <button
          type="submit"
          className="bg-[#3851DD] text-[white] py-[15px] px-[24px] w-[100%] rounded-[6px] text-[16px] "
        >
          Save Changes
        </button>
      </form>
      <AddRegion opened={openedRegion} close={closeRegion} />
    </Modal>
  );
}
