import React from "react";
import Image from "next/image";
import { Modal } from "@mantine/core";
import { AddressSucess } from "../types/AllTypes";
export function DeleteAddress({ opened, close }: AddressSucess) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      size="sm"
      styles={{
        content: {
          borderRadius: "20px",
        },
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        <Image src={"/images/notsure.png"} alt={""} width={100} height={100} />
        <p className="text-[#54565B] text-[16px] font-semibold font-Roboto ">
          Delete Address?
        </p>
        <p className="text-[#54565B] font-normal font-Roboto text-[12px] text-center w-[340px]">
          You are about to delete this address. Click the delete button below if
          you would like to continue?
        </p>
        <div className="pt-[20px] flex justify-between gap-[30px]">
          <button
            className="text-[12px] font-Roboto py-[13px] px-[44px] delete bg-[#F7F8F9] border-solid border-[0.6px] border-[#8B908B] rounded-[8px]"
            onClick={close}
          >
            cancel
          </button>
          <button className="text-[#F2F2F2] text-[12px] font-Roboto py-[13px] px-[44px] bg-[#C81107] rounded-[8px]">
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
