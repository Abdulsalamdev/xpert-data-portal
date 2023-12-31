import React from "react";
import { AddressSucess } from "../types/AllTypes";
import Image from "next/image";
import { Modal } from "@mantine/core";
import { Calendar2 } from "iconsax-react";
import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
export function ActivateStaff({ close, opened, id }: AddressSucess) {
  const { data: supendeStaff } = useQuery({
    queryFn: () => builder.use().staff.api.staffList(),
    queryKey: [...builder.staff.api.suspendedStaff.get(), id],
    select: ({ data }) => data,
  });
  return (
    <Modal
      title="Activate Member"
      opened={opened}
      onClose={close}
      centered
      styles={{
        content: {
          borderRadius: "20px",
        },
      }}
    >
      <div className="flex flex-col items-center pb-[20px] justify-center">
        <Image src={"/images/sure.png"} alt={""} width={100} height={100} />
        <p className="text-[16px] text-[#4A4C58] font-semibild pb-[10px] font-nunito">
          Activate Member
        </p>
        <p className="text-[14px] text-[#8F9198] pb-[30px] w-[400px] text-center">
          Activated members will have access across all platforms. Click the
          buttons below to activate according to your preference.
        </p>
        <div className="flex gap-[30px] items-center">
          <button
            onClick={close}
            className="py-[6px] px-[12px] flex justify-center gap-[8px] deactivate items-center"
          >
            <Calendar2 size="16" color="#8F9198" />
            <span className="text-[#8F9198] text-[14px] font-medium">
              Activate later
            </span>
          </button>
          <button
            className="bg-[#3045BC] text-[white] rounded-[8px] py-[6px] px-[12px] flex justify-center items-center"
            onClick={() => console.log(id)}
          >
            <span className="text-[#FFFFFF] text-[14px] font-medium">
              Activate now
            </span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
