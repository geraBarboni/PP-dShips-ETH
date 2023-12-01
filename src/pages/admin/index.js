"use client";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";

import dynamic from "next/dynamic";

const Admin = dynamic(() => import("@/pages/admin/Admin"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className={`${inter.className} bg-schemes-light-surfaceContainer`}>
      <div className="flex flex-col gap-4 w-11/12 mx-auto bg-schemes-light-surfaceContainerLowest p-4 h-[94.5vh] rounded-3xl">
        {isConnected && <Admin />}
      </div>
    </main>
  );
}
