import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { AddStaffStep1 } from "./steps/add-staff-step1";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import { AddStaffStep2 } from "./steps/add-staff-step2";
import { AddStaffStep3 } from "./steps/add-staff-step3";

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
        <Stepper.Step label="Organization information" description="">
          <AddStaffStep2 />
        </Stepper.Step>
        <Stepper.Step label="Next of Kin" description="">
          <AddStaffStep3 />
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
          onClick={active < 2 ? nextStep : create}
          className="bg-[#3045BC]"
        >
          {active > 1 ? "Create Staff" : "Next"}
        </Button>
      </Group>
    </form>
  );
}
