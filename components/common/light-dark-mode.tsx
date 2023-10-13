import React from "react";
import { Moon, Sun1 } from "iconsax-react";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Mode() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div
      className="rounded-[8px] p-[5px] bg-[#F5F5F6] border-[1px] border-solid  border-[#DADADD] dark:bg-[#252D3D] dark:border-none"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <Sun1 size="20" color="#3851DD" />
      ) : (
        // <Moon size="20" color="#FFffff" />
        <Image src={"/images/moon.png"} alt={""} width={20} height={20} />
      )}
    </div>
  );
}
