import { Button, rem, Menu } from "@mantine/core";
import { Moon, Sun, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export function DashMenu() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div className="topMenu">
      <Menu
        shadow="md"
        styles={{
          dropdown: {
            backgroundColor: theme === "light" ? "white" : "#1A212E !important",
          },
          item: {
            color: theme === "light" ? "#1A212E" : "#8F9198",
            ":hover": {
              backgroundColor: theme === "light" ? "#" : "#252D3D",
            },
          },
        }}
      >
        <Menu.Target>
          <div className="">
            {theme === "light" ? (
              <Sun1 size="20" color="#C1C2C6" />
            ) : (
              <Image src={"/images/moon.png"} alt={""} width={20} height={20} />
            )}
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<Sun1 size="17" color="#C1C2C6" />}>
            <button
              onClick={() => {
                setTheme("light");
              }}
            >
              Light
            </button>
          </Menu.Item>
          <Menu.Item
            icon={
              theme === "light" ? (
                <Moon size="17" color="#C1C2C6" />
              ) : (
                <Image
                  src={"/images/moon.png"}
                  alt={""}
                  width={20}
                  height={20}
                />
              )
            }
          >
            <button
              onClick={() => {
                setTheme("dark");
              }}
            >
              dark
            </button>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
