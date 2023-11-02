import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useForm } from "@mantine/form";
import { StaffSucess } from "../modals/staffSucess";
import { useDisclosure } from "@mantine/hooks";
import { Drop } from "@/components/packages/dropzone";
import { Select, TextInput } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";

export function AddStaffContent() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [upload, setUplode] = useState<FileWithPath | null>(null);
  const [
    openedStaffSuccess,
    { open: openStaffSuccess, close: closeStaffSuccess },
  ] = useDisclosure(false);
  const { mutate } = useMutation({
    mutationFn: () => builder.use().staff.api.createStaff(myForm.values),
    mutationKey: builder.staff.api.createStaff.get(),
  });

  function submitform() {
    myForm.onSubmit(() => {
      mutate();
      openStaffSuccess();
    });
  }

  const myForm = useForm({
    initialValues: {
      email: "",
      alias_email: "",
      picture: "",
      middle_name: "",
      date_of_birth: "",
      gender: "",
      martial_status: "",
      role: "",
      phone_number: "",
      work_phone: "",
      next_of_kin_first_name: "",
      next_of_kin_last_name: "",
      next_of_kin_middle_name: "",
      next_of_kin_phone_number: "",
      next_of_kin_email: "",
      next_of_kin_relationship: "",
      first_name: "",
      last_name: "",
      tribe: 0,
      squad: 0,
      address: 0,
    },
  });

  return (
    <form>
      <Stepper color="#C81107" active={active} onStepClick={setActive}>
        <Stepper.Step label="Personal information" description="">
          <div>
            <div className="flex justify-between items-center pb-[16px] pt-[30px]">
              <span className="text-[14px] text-[#4A4C58] font-medium">
                Uploade Member's Picture{" "}
              </span>
              <span className="text-[14px] text-[#C1C2C6] font-light">
                (Required)
              </span>
            </div>
            <Drop upImg={upload} setImg={setUplode} />
            <p className="pt-[8px] text-[#C1C2C6] text-[12px]">
              You can uploade file in the following format in
              .pdf,.xls,.doc(Size limit 10mb)
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
                <span className="text-[14px] text-[#4A4C58]">
                  Marital Status
                </span>
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
        </Stepper.Step>
        <Stepper.Step label="Organization information" description="">
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
                <span className="text-[#4A4C58] text-[14px]">
                  Taggable Aliases
                </span>
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
                <span className="text-[14px] text-[#4A4C58]">
                  Tribe/Depertment
                </span>
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
        </Stepper.Step>
        <Stepper.Step label="Next of Kin" description="">
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
                <span className="text-[14px] text-[#4A4C58]">
                  Email Address
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
        </Stepper.Step>
      </Stepper>

      <Group position="apart" mt="xl">
        <Button
          className=""
          variant="default"
          onClick={prevStep}
          leftIcon={<ArrowLeft size="22" color="#8F9198" />}
        >
          Back
        </Button>
        <Button
          style={{
            borderRadius: "6px",
            boxShadow:
              "0px 0px 0px 1px rgba(94, 96, 106, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)",
          }}
          rightIcon={
            active > 1 ? null : <ArrowRight size="22" color="#FFFFFF" />
          }
          type={active > 1 ? "button" : "submit"}
          onClick={active < 2 ? nextStep : submitform}
          className="bg-[#3045BC]"
        >
          {active > 1 ? "Create Staff" : "Next"}
        </Button>
      </Group>
      <StaffSucess opened={openedStaffSuccess} close={closeStaffSuccess} />
    </form>
  );
}
