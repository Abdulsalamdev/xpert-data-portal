import { Select, TextInput } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import React from "react";

export function AddStaffStep2() {
  return (
    <div>
      <div className="py-[30px] flex justify-between gap-[20px] items-center">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[#4A4C58] text-[14px]">
            Official Email Address
          </span>
          <div className="flex items-center gap-[8px]">
            <TextInput
              styles={{
                input: {
                  paddingBlock: "18px",
                  paddingInline: "14px",
                  borderRadius: "8px",
                  width: "135px",
                  border: "1px solid #DADADD",
                  boxShadow:
                    "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                },
              }}
              placeholder="Username"
            />

            <div className="grow">
              <TextInput
                styles={{
                  input: {
                    backgroundColor: "#F5F5F6 !important",

                    paddingBlock: "18px",
                    paddingInline: "14px",
                    borderRadius: "8px",
                    border: "1px solid #DADADD",
                    boxShadow:
                      "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                  },
                }}
                placeholder="@afexexchange.com"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[#4A4C58] text-[14px]">Taggable Aliases</span>
          <div className="flex items-center gap-[8px]">
            <TextInput
              styles={{
                input: {
                  paddingBlock: "18px",
                  paddingInline: "14px",
                  width: "135px",
                  borderRadius: "8px",
                  border: "1px solid #DADADD",
                  boxShadow:
                    "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                },
              }}
              placeholder="Username"
            />

            <div className="grow">
              <Select
                searchable
                placeholder="Select email domain"
                rightSection={<ArrowDown2 size="16" color="#8F9198" />}
                styles={{
                  input: {
                    paddingBlock: "18px",
                    paddingInline: "14px",
                    backgroundColor: "#F5F5F6 !important",
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
      </div>
      <div className="flex justify-between items-center gap-[20px] pb-[30px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Tribe/Depertment</span>
          <Select
            searchable
            placeholder="Select Tribe/Depertment"
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
          <span className="text-[14px] text-[#4A4C58]">Squad/Unit</span>
          <Select
            searchable
            placeholder="Select Squad/Unit"
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
      <div className="flex justify-between items-center gap-[20px] pb-[30px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Designation</span>

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
            placeholder="Input Designation"
          />
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">Work Phone</span>

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
            placeholder="Enter Phone Number"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-[20px] pb-[30px]">
        <div className="flex flex-col gap-[8px] flex-1">
          <span className="text-[14px] text-[#4A4C58]">
            Region{" "}
            <span className=" font-light text-[14px] text-[#C1C2C6]">
              (Country)
            </span>
          </span>
          <Select
            searchable
            placeholder="Select Country"
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
          <span className="text-[14px] text-[#4A4C58]">City Address</span>
          <Select
            searchable
            placeholder="Select c1ty"
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
