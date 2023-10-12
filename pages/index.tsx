import Image from "next/image";
import { Inter } from "next/font/google";
import { Landing } from "@/components/auth/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" h-[100vh] home-bg dark:bg-[#252D3D]">
      <Landing />
    </div>
  );
}
