import { Modal, Select, Switch, TextInput, Textarea } from "@mantine/core";
import React from "react";
import { AddressSucess } from "../types/AllTypes";
import { AddStaffContent } from "../stepper/addStaffContent";

export function AddStaff({ opened, close }: AddressSucess) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Create Staff"
      centered
      size={"70%"}
      styles={{
        content: {
          borderRadius: "16px",
        },
        title: {
          fontSize: "16px",
          color: "#4A4C58",
          fontWeight: "bold",
        },
      }}
    >
      <AddStaffContent />
    </Modal>
  );
}
