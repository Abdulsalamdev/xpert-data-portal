import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { useForm } from "@mantine/form";
import { StaffSucess } from "../modals/staffSucess";
import { useDisclosure } from "@mantine/hooks";
import { Select, TextInput } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import { toast } from "react-toastify";
import Image from "next/image";

import { Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import { DocumentUpload } from "iconsax-react";

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

  const queryClient = new QueryClient();
  // creating new staff
  const { mutate } = useMutation({
    mutationFn: () => builder.use().staff.api.createStaff(myForm.values),
    mutationKey: builder.staff.api.createStaff.get(),
    onSuccess(data, variables, context) {
      toast.success("staff created");
      openStaffSuccess();
      queryClient.invalidateQueries(builder.staff.api.staffList.get());
    },
    onError(error, variables, context) {
      toast.error("invalid credentials !!");
    },
  });

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
      city: "",
      region: "",
      tribe: 0,
      squad: 0,
      address: 0,
    },
  });

  // geting list of tribe
  const { data: tribe } = useQuery({
    queryFn: () => builder.use().tribes.api.tribeList(),
    queryKey: builder.tribes.api.tribeList.get(),
    select: ({ data }) => data?.results,
  });

  // getting squad list

  const { data: squad } = useQuery({
    queryFn: () => builder.use().tribes.api.tribeSquads(+myForm.values.tribe),
    queryKey: [...builder.tribes.api.tribeSquads.get(), +myForm.values.tribe],
    select: ({ data }) =>
      data?.results?.map((item: any) => ({
        label: item?.member,
        value: item?.id,
      })),
    enabled: !!myForm.values.tribe,
  });

  console.log(squad);
  // geting the regions
  const { data: region } = useQuery({
    queryFn: () => builder.use().region.api.regionList(),
    queryKey: builder.region.api.regionList.get(),
    select: ({ data }) => data?.results,
  });

  // geting the city address
  const { data: cityAddress } = useQuery({
    queryFn: () => builder.use().schema.api.cityAddress(+myForm.values.region),
    queryKey: [...builder.schema.api.cityAddress.get(), +myForm.values.region],
    select: ({ data }) =>
      data?.results?.map((item: any) => ({
        label: item?.city,
        value: item?.id,
      })),
    enabled: !!myForm.values.region,
  });

  const theme = useMantineTheme();
  console.log(upload);
  function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  const fileSizeInBytes = upload?.size; // Replace with the actual file size
  const fileSizeFormatted = formatBytes(fileSizeInBytes as number);

  function submitform() {
    mutate();
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        active < 2 ? nextStep() : submitform();
      }}
    >
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
            {/* <Drop upImg={upload} setImg={setUplode} /> */}
            <div>
              <Dropzone
                onDrop={(files) => {
                  setUplode(files[0]);
                }}
                onReject={(files) => console.log("rejected files", files)}
                maxSize={3 * 1024 ** 2}
              >
                <Group
                  position="center"
                  spacing="xl"
                  style={{ minHeight: rem(220), pointerEvents: "none" }}
                >
                  <Dropzone.Accept>
                    <IconUpload
                      size="3.2rem"
                      stroke={1.5}
                      color={
                        theme.colors[theme.primaryColor][
                          theme.colorScheme === "dark" ? 4 : 6
                        ]
                      }
                    />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX
                      size="3.2rem"
                      stroke={1.5}
                      color={
                        theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                      }
                    />
                  </Dropzone.Reject>
                  {/* <Dropzone.Idle>
          <IconPhoto size="3.2rem" stroke={1.5} />
        </Dropzone.Idle> */}
                  {upload ? (
                    <div className="flex flex-col justify-center  items-center">
                      <Image
                        src={URL.createObjectURL(upload)}
                        alt={""}
                        width={50}
                        height={50}
                        className="rounded-[12px]"
                      />

                      <div className="flex justify-between items-center gap-[10px] ">
                        <span className="text-[#54565B] text-[14px]">
                          {(upload as File)?.name}
                        </span>
                        <span className="text-[#B4B4B0] text-[10px] font-normal flex items-center">
                          {fileSizeFormatted}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="flex gap-[8px] items-center">
                        <DocumentUpload size="18" color="#8F9198" />
                        <p className="text-[14px] text-[#8F9198] font-nunito font-bold">
                          Drop files to attach or{" "}
                          <span className="text-[#458EE6] ">browse</span>
                        </p>
                      </div>
                    </div>
                  )}
                </Group>
              </Dropzone>
            </div>
            <p className="pt-[8px] text-[#C1C2C6] text-[12px]">
              You can uploade file in the following format in
              .pdf,.xls,.doc(Size limit 10mb)
            </p>
            <div className="flex justify-between items-center pt-[30px] gap-[20px] pb-[30px]">
              <div className="flex flex-col gap-[8px] flex-1">
                <span className="text-[14px] text-[#4A4C58]">First Name</span>

                <TextInput
                  {...myForm.getInputProps("first_name")}
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
                  {...myForm.getInputProps("last_name")}
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
                  {...myForm.getInputProps("middle_name")}
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
                  {...myForm.getInputProps("phone_number")}
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
                  {...myForm.getInputProps("gender")}
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
                    { value: "Male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <span className="text-[14px] text-[#4A4C58]">
                  Marital Status
                </span>
                <Select
                  {...myForm.getInputProps("martial_status")}
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
                    { value: "married", label: "Married" },
                    { value: "relationship", label: "Relationship" },
                    { value: "single", label: "single" },
                    { value: "divorce", label: "Divorce" },
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
                      {...myForm.getInputProps("email")}
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
                    {...myForm.getInputProps("alias_email")}
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
                        { value: "@afexmail.com", label: "@afexmail.com" },
                        {
                          value: "@afexnigeria.com",
                          label: "@afexnigeria.com",
                        },
                        {
                          value: "@afexexchange.com",
                          label: "@afexexchange.com",
                        },
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
                <div>
                  <div className="">
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
                      data={
                        tribe?.map((item) => ({
                          value: String(item.id),
                          label: item?.name,
                        })) ?? []
                      }
                    />
                  </div>
                </div>
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
                  data={squad ?? []}
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-[20px] pb-[30px]">
              <div className="flex flex-col gap-[8px] flex-1">
                <span className="text-[14px] text-[#4A4C58]">Designation</span>

                <TextInput
                  {...myForm.getInputProps("role")}
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
                  {...myForm.getInputProps("phone_number")}
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

                <div>
                  <div className="">
                    <Select
                      {...myForm.getInputProps("region")}
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
                      data={
                        region?.map((ele) => ({
                          value: String(ele.id),
                          label: ele?.name,
                        })) ?? []
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <span className="text-[14px] text-[#4A4C58]">City Address</span>
                <Select
                  {...myForm.getInputProps("city")}
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
                  data={cityAddress ?? []}
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
                  {...myForm.getInputProps("next_of_kin_first_name")}
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
                  {...myForm.getInputProps("next_of_kin_last_name")}
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
                  {...myForm.getInputProps("next_of_kin_middle_name")}
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
                  {...myForm.getInputProps("next_of_kin_phone_number")}
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
                  {...myForm.getInputProps("next_of_kin_email")}
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
                  {...myForm.getInputProps("next_of_kin_relationship")}
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
          type={"submit"}
          className="bg-[#3045BC]"
        >
          {active > 1 ? "Create Staff" : "Next"}
        </Button>
      </Group>
      <StaffSucess opened={openedStaffSuccess} close={closeStaffSuccess} />
    </form>
  );
}
