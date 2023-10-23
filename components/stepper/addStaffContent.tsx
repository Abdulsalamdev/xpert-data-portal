import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { AddStaffStep1 } from "./steps/add-staff-step1";
import { ArrowRight, ArrowLeft } from "iconsax-react";

export function AddStaffContent() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const create = () => {
    console.log("hello");
  };
  const [upload, setUplode] = useState<FileWithPath | null>(null);

  // const [formdetails, setFormDetails] = useState({
  //   first_name: '',

  // })

  return (
    <form>
      <Stepper color="#C81107" active={active} onStepClick={setActive}>
        <Stepper.Step label="Personal information" description="">
          <AddStaffStep1 upImg={upload} setImg={setUplode} />
        </Stepper.Step>
        <Stepper.Step
          label="Organization information"
          description=""
        ></Stepper.Step>
        <Stepper.Step label="Next of Kin" description=""></Stepper.Step>
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
          rightIcon={
            active > 1 ? null : <ArrowRight size="22" color="#FFFFFF" />
          }
          onClick={active < 2 ? nextStep : create}
          className="bg-[#3045BC]"
        >
          {active > 1 ? "Create Staff" : "Next"}
        </Button>
      </Group>
    </form>
  );
}
