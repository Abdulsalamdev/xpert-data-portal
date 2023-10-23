import { Drop } from "@/components/packages/dropzone";
import { Select, TextInput } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import React from "react";

export function AddStaffStep1({ upImg, setImg }: any) {
  return (
    <div>
      <div className="flex justify-between items-center pb-[16px] pt-[30px]">
        <span className="text-[14px] text-[#4A4C58] font-medium">
          Uploade Member's Picture{" "}
        </span>
        <span className="text-[14px] text-[#C1C2C6] font-light">
          (Required)
        </span>
      </div>
      <Drop upImg={upImg} setImg={setImg} />
      <p className="pt-[8px] text-[#C1C2C6] text-[12px]">
        You can uploade file in the following format in .pdf,.xls,.doc(Size
        limit 10mb)
      </p>
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
      <div className="flex justify-between items-center gap-[20px] pb-[30px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Gender</span>
          <Select
            searchable
            placeholder="Select Gender"
            rightSection={<ArrowDown2 size="16" color="#8F9198" />}
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
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Marital Status</span>
          <Select
            searchable
            placeholder="Select Marital Status"
            rightSection={<ArrowDown2 size="16" color="#8F9198" />}
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
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
