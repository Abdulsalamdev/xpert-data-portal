import { Menu, clsx } from "@mantine/core";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export function Widget() {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <Menu
      shadow="md"
      styles={{
        dropdown: {
          backgroundColor: theme === "light" ? "white" : "#1A212E !important",
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
        <Image src={"/images/widget.png"} alt={""} width={30} height={30} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <div className="flex gap-[10px]">
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/one.png"}
              alt={""}
              width={40}
              height={40}
            />
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/two.png"}
              alt={""}
              width={40}
              height={40}
            />
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/three.png"}
              alt={""}
              width={40}
              height={40}
            />
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex gap-[10px]">
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/four.png"}
              alt={""}
              width={40}
              height={40}
            />
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/five.png"}
              alt={""}
              width={40}
              height={40}
            />
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/six.png"}
              alt={""}
              width={40}
              height={40}
            />
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="flex gap-[10px]">
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/seven.png"}
              alt={""}
              width={40}
              height={40}
            />
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/eight.png"}
              alt={""}
              width={40}
              height={40}
            />
            <Image
              className={clsx(
                theme === "light" ? "hover:bg-[#f4f5f6]" : "hover:bg-[#252D3D]"
              )}
              src={"/images/nine.png"}
              alt={""}
              width={40}
              height={40}
            />
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
