"use client";

import { useRouter } from "next/navigation";

export default function Name() {
  const router = useRouter();

  function getAddress() {
    router.push("/name/address");
  }

  return (
    <div className="flex flex-col gap-3">
      <div>My name is Sarfaraz</div>
      <div className="py-2 px-4 hover:border-gray-800">
        <button onClick={getAddress}>Get Address</button>
      </div>
    </div>
  );
}
