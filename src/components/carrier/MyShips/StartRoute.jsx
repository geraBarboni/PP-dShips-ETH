import { ABI, ADDRESS } from "@/config";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

const StartRoute = ({ ship }) => {
  const router = useRouter();

  const { config } = usePrepareContractWrite({
    address: ADDRESS,
    abi: ABI,
    functionName: "markUnderway",
    args: [ship],
  });

  const { write, isSuccess } = useContractWrite(config);

  useEffect(() => {
    isSuccess && router.push("/carrier");
  }, [isSuccess]);

  return (
    <button
      onClick={() => write()}
      className="bg-schemes-light-primary text-schemes-light-onPrimary hover:bg-coreColors-primary rounded-full py-2 px-4"
    >
      Start route
    </button>
  );
};

export default StartRoute;
