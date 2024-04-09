"use client";

import { useRouter } from "next/navigation";

export default function Name() {
  const router = useRouter();

  function getAddress() {
    router.push("/name/address");
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="text-bold bg-green-400">My name is Sarfaraz</div>
      <button onClick={getAddress}>Get Address</button>
    </div>
  );
}
