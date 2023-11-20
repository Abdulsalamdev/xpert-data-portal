import React from "react";
import { Menu, clsx } from "@mantine/core";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Edit2, Eye, TickSquare, Trash } from "iconsax-react";
import Link from "next/link";
export function StaffActive({ id }: { id: number }) {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
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
          <div className="flex items-center gap-[10px]">
            <Edit2 size="16" color="#8F9198" variant="Bold" />
            <p className="text-[#8F9198] text-[12px]">Update member</p>
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
          <div className="flex items-center gap-[10px]">
            <TickSquare size="16" color="#289061" variant="Bold" />
            <p className="text-[#289061] text-[12px]">Activate member</p>
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export function StaffInActive({ id }: { id: number }) {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
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
          <div className="flex items-center gap-[10px]">
            <Edit2 size="16" color="#8F9198" variant="Bold" />
            <p className="text-[#8F9198] text-[12px]">Update member</p>
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
          <div className="flex items-center gap-[10px]">
            <Trash size="16" color="#ED5556" variant="Bold" />
            <p className="text-[#ED5556] text-[12px]">Deactivate member</p>
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
