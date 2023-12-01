"use client";
import { useAccount } from "wagmi";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import dynamic from "next/dynamic";

const MyShips = dynamic(() => import("@/components/recipient/MyShips"), {
  ssr: false,
});

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className={`${inter.className} bg-schemes-light-surfaceContainer`}>
      <div className="flex flex-col gap-4 w-11/12 mx-auto bg-schemes-light-surfaceContainerLowest p-4 h-[94.5vh] rounded-3xl">
        {isConnected && <MyShips />}
      </div>
    </main>
  );
}
