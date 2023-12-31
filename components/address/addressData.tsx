import { Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Add, Edit2, SearchNormal1, Trash } from "iconsax-react";
import React, { useState } from "react";
import { AddressSucess } from "../modals/addressSuccess";
import { DeleteAddress } from "../modals/deleteAddress";
import { AddAddress } from "../modals/addAddress";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { AddressLisResult } from "../types/AllTypes";
import { EditAddress } from "../modals/editAddress";
import { useTheme } from "next-themes";

export function AddressData() {
  const [region_Pk, setregion_pk] = useState<null | number>(null);
  const [openedSucess, { open: openSuccess, close: closeSucess }] =
    useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  // edit modals function
  const [{ openedEdit, editData }, setEditAddress] = useState<{
    openedEdit: boolean;
    editData: null | AddressLisResult;
  }>({
    openedEdit: false,
    editData: null,
  });
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const closeEdit = () => {
    setEditAddress({ openedEdit: false, editData: null });
  };
  // geting the list of addresses
  const { data: addressData } = useQuery({
    queryFn: () => builder.use().address.api.addressList(),
    queryKey: builder.address.api.addressList.get(),
    select: ({ data }) => data,
  });
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div>
      <div className="flex justify-between items-center border-b-[1px] border-solid border-[#D9DFE4] pb-[30px] pl-[clamp(10px,1.3vw,20px)]">
        <Input
          styles={{
            input: {
              background: theme === "light" ? "white" : "#232A37",
              color: theme === "light" ? "black" : "white",
              border: "1px  #A1A9B8",
              boxShadow:
                "0px 0px 0px 1px rgba(134, 143, 160, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              borderRadius: "8px",
            },
          }}
          placeholder="Search"
          rightSection={<SearchNormal1 size="13" color="#5E606A" />}
        />
        <div
          className="flex gap-[5px] items-center bg-[#3045BC] rounded-[8px] py-[6px] px-[12px] text-[white] text-[14px] font-nunito font-medium"
          onClick={() => {
            openAdd();
          }}
        >
          <Add size="18" color="#FFFFFF" />
          <span>Add address</span>
        </div>
      </div>
      <div>
        <div className="flex gap-[7px] items-center pl-[clamp(10px,1.3vw,20px)]  border-b-[1px] border-solid border-[#D9DFE4] pt-[20px] pb-[10px]">
          <span className="text-[14px] text-[#4A4C58] font-nunito font-medium dark:text-[white]">
            Addresses
          </span>
          <span className="text-[12px] text-[#8F9198] p-[3px] rounded-[13px] bg-[#F0F0F1] dark:bg-SKY-CAPTAIN dark:text-[white]">
            {addressData?.count}
          </span>
        </div>
        <div className="px-[24px] py-[30px] flex flex-wrap gap-[25px]">
          {addressData?.results?.map((ele) => (
            <div
              key={ele?.id}
              className="address dark:bg-[#232A37] dark:border-[#252D3D] dark:border-t-[#3851DD]"
            >
              <div className="flex justify-between items-center pb-[12px] border-b-[#8F9198] border-b-[1.2px] border-solid">
                <p>{ele?.city}</p>
                <div className="flex gap-[7px]">
                  <span className="py-[4px] px-[10px] bg-[#E8F1FC] text-[#1C75E1] text-[12px] font-nunito font-medium rounded-[4px] dark:bg-[#273040]">
                    {ele?.region}
                  </span>
                  <span
                    className="py-[4px] px-[10px] bg-[#E8F1FC] text-[#1C75E1] text-[12px] font-nunito font-medium rounded-[4px] dark:bg-[#273040]"
                    style={{
                      display: ele.is_headquarter === true ? "flex" : "none",
                    }}
                  >
                    {ele.is_headquarter === true ? "HQ" : null}
                  </span>
                </div>
              </div>
              <div className="text-[#8F9198] text-[12px] pt-[20px] w-[310px]">
                {ele?.description}
              </div>
              <div className="flex justify-end items-center gap-[20px] pt-[20px]">
                <div
                  onClick={() => {
                    setEditAddress({
                      openedEdit: true,
                      editData: ele,
                    });
                  }}
                >
                  <Edit2 size="16" color="#3851DD" />
                </div>
                <div
                  onClick={() => {
                    setDeleteId(ele.id);
                    openDelete();
                  }}
                >
                  <Trash size="16" color="#FF8A65" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddressSucess opened={openedSucess} close={closeSucess} />
      <DeleteAddress
        opened={openedDelete}
        close={closeDelete}
        deleteData={deleteId}
      />
      <AddAddress opened={openedAdd} close={closeAdd} region_Pk={region_Pk} />
      {editData ? (
        <EditAddress
          opened={openedEdit}
          close={closeEdit}
          initialData={editData}
        />
      ) : null}
    </div>
  );
}
