import { TextInput } from "@mantine/core";
import React from "react";

export function AddStaffStep3() {
  return (
    <div>
      <div className="flex justify-between items-center pt-[30px] gap-[20px] pb-[30px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">First Name</span>

          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="Enter Name"
          />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Last Name</span>

          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="Enter Name"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-[20px] pb-[30px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">
            Middle Name{" "}
            <span className=" font-light text-[14px] text-[#C1C2C6]">
              (Optional)
            </span>
          </span>

          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="Enter Name"
          />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Phone Number</span>

          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="Enter Mobile Number"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-[20px] pb-[50px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Email Address</span>

          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Relationship</span>

          <TextInput
            styles={{
              input: {
                paddingBlock: "18px",
                paddingInline: "14px",
                borderRadius: "8px",
                border: "1px solid #DADADD",
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              },
            }}
            placeholder="e.g mother"
          />
        </div>
      </div>
    </div>
  );
}
