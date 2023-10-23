import { Drop } from "@/components/packages/dropzone";
import React from "react";

export function AddStaffStep1({ upImg, setImg }: any) {
  return (
    <div>
      <Drop upImg={upImg} setImg={setImg} />
    </div>
  );
}
