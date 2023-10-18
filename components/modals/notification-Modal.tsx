import { Button, Group, Modal } from "@mantine/core";
import React from "react";
interface showCalender {
  close: () => void;
  opened: boolean;
}

export function NotificationCalender({ close, opened }: showCalender) {
  const dates = ["Today", "Yesterday", "Last 7 days", "Last month", "10 Years"];
  return (
    <>
      <Modal
        size={"lg"}
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: "#ebeefc",
            borderRadius: "25px",
            border: "1px solid #fff",
            boxShadow: " 0px 1px 5px 0px rgba(0, 14, 51, 0.1)",
          },
        }}
        className="notcalender"
      >
        <div className="flex gap-[25px]">
          <div className="flex flex-col gap-[5px]">
            {dates.map((ele, index) => (
              <p className="text-[14px] text-[#535362]" key={index}>
                {ele}
              </p>
            ))}
          </div>
          <div className="grow flex gap-[10px]">
            <div className="flex flex-col gap-20px] items-center">
              <p className="text-[16px] text-[#9FA19C]">Start</p>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </Modal>
    </>
  );
}
