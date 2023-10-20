import { Button, Modal } from "@mantine/core";
import React from "react";
import { AddressSucess } from "../types/AllTypes";
import Image from "next/image";
export function StaffSucess({ close, opened }: AddressSucess) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
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
          Staff created successfully
        </p>

        <button
          className="bg-[#3851DD] text-[white] rounded-[8px] py-[14px] px-[40px] flex justify-center items-center"
          onClick={close}
        >
          <span> View Staff List</span>
        </button>
      </div>
    </Modal>
  );
}
