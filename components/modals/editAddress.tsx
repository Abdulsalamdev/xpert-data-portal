import React from "react";
import { EditAddressModal } from "../types/AllTypes";
import { builder } from "@/api/builder";
import {
  Textarea,
  Select,
  TextInput,
  Switch,
  CloseButton,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { ArrowDown2 } from "iconsax-react";
import { toast } from "react-toastify";
import { AddRegion } from "./addRegion";
import { useDisclosure } from "@mantine/hooks";

export function EditAddress({ opened, close, initialData }: EditAddressModal) {
  const queryClient = new QueryClient();
  const [openedRegion, { open: openRegion, close: closeRegion }] =
    useDisclosure(false);
  const myform = useForm({
    initialValues: {
      id: initialData?.id ?? 0,
      is_headquarter: initialData?.is_headquarter ?? false,
      description: initialData?.description ?? "",
      region: initialData?.region ?? "",
      city: initialData?.city ?? "",
      latitude: initialData?.latitude ?? "",
      longitude: initialData?.longitude ?? "",
    },
  });

  console.log(initialData);
  const { mutate } = useMutation({
    mutationFn: () =>
      builder.use().address.api.editAddress(+myform.values.id, myform.values),
    mutationKey: [...builder.address.api.editAddress.get(), +myform.values.id],
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries(builder.address.api.addressList.get());
      toast.success("Address edited successfully");
      close();
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
    queryFn: () => builder.use().schema.api.cityAddress(+myform.values.region),
    queryKey: [...builder.schema.api.cityAddress.get(), +myform.values.region],
    select: ({ data }) =>
      data?.results?.map((item: any) => ({
        label: item?.city,
        value: item?.id,
      })),
    enabled: !!myform.values.region,
  });

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Edit Address"
      centered
      styles={{
        content: {
          borderRadius: "20px",
        },
      }}
    >
      <form
        onSubmit={myform.onSubmit(() => {
          console.log(myform.values);
          mutate();
        })}
      >
        <p className="pb-[16px] text-[14px] text-[#54565B]">Office Address</p>
        <div className="pb-[20px]">
          <Textarea
            variant="filled"
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

        <div>
          <div className="pb-[20px]">
            <Select
              variant="filled"
              {...myform.getInputProps("region")}
              searchable
              placeholder="Select Country"
              rightSection={<ArrowDown2 size="16" color="#8F9198" />}
              data={
                region?.map((ele) => ({
                  value: String(ele.id),
                  label: ele?.name,
                })) ?? []
              }
            />
          </div>
        </div>

        <div className="pb-[25px]">
          <Select
            variant="filled"
            {...myform.getInputProps("city")}
            searchable
            placeholder="Select City"
            rightSection={<ArrowDown2 size="16" color="#8F9198" />}
            data={cityAddress ?? []}
          />
        </div>

        <p className="text-[14px] text-[#54565B]">Office Coordinates</p>
        <div className="flex justify-between items-center pt-[10px] pb-[20px]">
          <TextInput
            variant="filled"
            placeholder="Latitude (e.g. 9.356767 N)"
            {...myform.getInputProps("latitude")}
          />
          <TextInput
            variant="filled"
            placeholder="Longitude (e.g. 7.356700 E)"
            {...myform.getInputProps("longitude")}
          />
        </div>
        <div className="flex gap-[32px] items-center pb-[40px]">
          <span className="text-[#54565B] text-[14px]">
            Save as Headquarter
          </span>
          <Switch
            variant="filled"
            {...myform.getInputProps("is_headquarter", { type: "checkbox" })}
          />
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
