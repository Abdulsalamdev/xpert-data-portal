import { Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Add, Edit2, SearchNormal1, Trash } from "iconsax-react";
import React from "react";
import { AddressSucess } from "../modals/addressSuccess";
import { DeleteAddress } from "../modals/deleteAddress";
import { AddAddress } from "../modals/addAddress";
import { StaffSucess } from "../modals/staffSucess";

export function AddressData() {
  const [openedSucess, { open: openSuccess, close: closeSucess }] =
    useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  return (
    <div>
      <div className="flex justify-between items-center border-b-[1px] border-solid border-[#D9DFE4] pb-[30px] pl-[clamp(10px,1.3vw,20px)]">
        <Input
          styles={{
            input: {
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
          onClick={openAdd}
        >
          <Add size="18" color="#FFFFFF" />
          <span>Add address</span>
        </div>
      </div>
      <div>
        <div className="flex gap-[7px] items-center pl-[clamp(10px,1.3vw,20px)]  border-b-[1px] border-solid border-[#D9DFE4] pt-[20px] pb-[10px]">
          <span className="text-[14px] text-[#4A4C58] font-nunito font-medium">
            Addresses
          </span>
          <span className="text-[12px] text-[#8F9198] p-[3px] rounded-[13px] bg-[#F0F0F1]">
            06
          </span>
        </div>
        <div className="px-[24px] py-[30px] flex flex-wrap gap-[25px]">
          <div className="address">
            <div className="flex justify-between items-center pb-[12px] border-b-[#8F9198] border-b-[1.2px] border-solid">
              <p>Abuja</p>
              <div className="flex gap-[7px]">
                <span className="py-[4px] px-[10px] bg-[#E8F1FC] text-[#1C75E1] text-[12px] font-nunito font-medium rounded-[4px]">
                  Nigeria
                </span>
                <span className="py-[4px] px-[10px] bg-[#E8F1FC] text-[#1C75E1] text-[12px] font-nunito font-medium rounded-[4px]">
                  HQ
                </span>
              </div>
            </div>
            <div className="text-[#8F9198] text-[12px] pt-[20px] max-w-[310px]">
              3rd Floor, Yobe Investment House, Plot 1332 Ralph Shodeinde St.,
              beside Federal Ministry of Finance, Central Business District,
              Abuja, FCT
            </div>
            <div className="flex justify-end items-center gap-[20px] pt-[20px]">
              <div>
                <Edit2 size="16" color="#3851DD" />
              </div>
              <div onClick={openDelete}>
                <Trash size="16" color="#FF8A65" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddressSucess opened={openedSucess} close={closeSucess} />
      <DeleteAddress opened={openedDelete} close={closeDelete} />
      <AddAddress opened={openedAdd} close={closeAdd} />
    </div>
  );
}