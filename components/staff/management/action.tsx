import React from "react";
import { Menu, clsx } from "@mantine/core";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Edit2, Eye, TickSquare, Trash } from "iconsax-react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { DeactivateStaff } from "@/components/modals/deactivateStaff";
import { ActivateStaff } from "@/components/modals/activateStaff";
import { AddStaff } from "@/components/modals/addStaff";
import { STAFFLIST, STAFFLISTDATA } from "@/components/types/AllTypes";
export function StaffActive({
  id,
  initialData,
}: {
  id: number;
  initialData: STAFFLISTDATA;
}) {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [openedStaff, { open: openStaff, close: closeStaff }] =
    useDisclosure(false);

  return (
    <div>
      <Menu
        shadow="md"
        styles={{
          dropdown: {
            backgroundColor: theme === "light" ? "white" : "#1A212E !important",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          },
          item: {
            color: theme === "light" ? "#1A212E" : "#8F9198",

            "&[data-hovered]": {
              backgroundColor: "transparent",
            },
          },
        }}
      >
        <Menu.Target>
          <div>
            <Image src={"/images/dot.png"} alt={""} width={30} height={30} />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <div className="flex items-center gap-[10px]" onClick={openStaff}>
              <Edit2 size="16" color="#8F9198" variant="Bold" />
              <p className="text-[#4A4C58] text-[12px]">Edit member</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <Link
              href={`/management/${id}`}
              className="flex items-center gap-[10px]"
            >
              <Eye size="16" color="#8F9198" variant="Bold" />
              <p className="text-[#8F9198] text-[12px]">View member </p>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <div className="flex items-center gap-[10px]" onClick={open}>
              <TickSquare size="16" color="#289061" variant="Bold" />
              <p className="text-[#289061] text-[12px]">Activate member</p>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <ActivateStaff opened={opened} close={close} id={id} />
      <AddStaff
        opened={openedStaff}
        close={closeStaff}
        initialData={initialData}
      />
    </div>
  );
}

export function StaffInActive({
  id,
  initialData,
}: {
  id: number;
  initialData: STAFFLISTDATA;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [openedStaff, { open: openStaff, close: closeStaff }] =
    useDisclosure(false);

  return (
    <div>
      <Menu
        shadow="md"
        styles={{
          dropdown: {
            backgroundColor: theme === "light" ? "white" : "#1A212E !important",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          },
          item: {
            color: theme === "light" ? "#1A212E" : "#8F9198",

            "&[data-hovered]": {
              backgroundColor: "transparent",
            },
          },
        }}
      >
        <Menu.Target>
          <div>
            <Image src={"/images/dot.png"} alt={""} width={30} height={30} />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <div className="flex items-center gap-[10px]" onClick={openStaff}>
              <Edit2 size="16" color="#8F9198" variant="Bold" />
              <p className="text-[#4A4C58] text-[12px]">Edit member</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <Link
              href={`/management/${id}`}
              className="flex items-center gap-[10px]"
            >
              <Eye size="16" color="#8F9198" variant="Bold" />
              <p className="text-[#8F9198] text-[12px]">View member </p>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <div className="flex items-center gap-[10px]" onClick={open}>
              <Trash size="16" color="#ED5556" variant="Bold" />
              <p className="text-[#ED5556] text-[12px]">Deactivate member</p>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <DeactivateStaff opened={opened} close={close} id={id} />
      <AddStaff
        opened={openedStaff}
        close={closeStaff}
        initialData={initialData}
      />
    </div>
  );
}
