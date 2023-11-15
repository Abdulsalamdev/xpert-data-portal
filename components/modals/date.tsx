import React from "react";
import { AddressSucess } from "../types/AllTypes";
import Image from "next/image";
import { Modal } from "@mantine/core";
import { Calendar2 } from "iconsax-react";
import { builder } from "@/api/builder";
import { useForm } from "@mantine/form";
import { QueryClient, useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import { toast } from "react-toastify";
export function SortDate({ close, opened }: AddressSucess) {
  const queryClient = new QueryClient();
  const { mutate } = useMutation({
    mutationFn: builder.use().notification.api.activityLogSorted,
    mutationKey: builder.notification.api.activityLog.get(),
    onSuccess(data, variables, context) {
      toast.success("Sorted activity log");
      queryClient.invalidateQueries(builder.notification.api.activityLog.get());
      close();
    },
  });

  const myForm = useForm({
    initialValues: {
      start_date: "",
      end_date: "",
    },
  });

  function handleSubmit(value: typeof myForm.values) {
    const start_date = dayjs(value.start_date).format("YYYY-MM-DD");
    const end_date = dayjs(value.end_date).format("YYYY-MM-DD");
    mutate({
      start_date,
      end_date,
    });
  }
  return (
    <Modal
      title="pick date"
      size={"lg"}
      opened={opened}
      onClose={close}
      centered
      styles={{
        content: {
          borderRadius: "20px",
        },
      }}
    >
      <form
        onSubmit={myForm.onSubmit(() => {
          handleSubmit(myForm.values);
          console.log(myForm.values);
        })}
      >
        <div className="flex justify-center items-center gap-[30px]">
          <div className="flex items-center flex-col gap-[10px]">
            <span>Start</span>
            <DatePicker
              placeholder="Pick date"
              {...myForm.getInputProps("start_date")}
            />
          </div>
          <div className="flex items-center flex-col gap-[10px]">
            <span>End</span>
            <DatePicker
              placeholder="Pick date"
              {...myForm.getInputProps("end_date")}
            />
          </div>
        </div>
        <div className="pt-[20px] flex justify-between gap-[30px]">
          <button
            className="text-[12px] font-Roboto py-[13px] px-[44px] delete bg-[#F7F8F9] border-solid border-[0.6px] border-[#8B908B] rounded-[8px]"
            onClick={(e) => {
              e.preventDefault();
              close();
            }}
          >
            cancel
          </button>
          <button
            className="text-[#F2F2F2] text-[12px] font-Roboto py-[13px] px-[44px] bg-[#C81107] rounded-[8px]"
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   console.log(myForm.values);
            //   handleSubmit;
            // }}
          >
            Sort
          </button>
        </div>
      </form>
    </Modal>
  );
}
