import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";

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
    <>
      <Stepper color="#C81107" active={active} onStepClick={setActive}>
        <Stepper.Step label="personal" description=""></Stepper.Step>
        <Stepper.Step label="personl" description=""></Stepper.Step>
        <Stepper.Step label="personal" description=""></Stepper.Step>
      </Stepper>

      <Group position="apart" mt="xl">
        <Button className="" variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button
          onClick={active < 2 ? nextStep : create}
          className="bg-[#C81107]"
        >
          {active > 1 ? "Create" : "Next"}
        </Button>
      </Group>
    </>
  );
}
