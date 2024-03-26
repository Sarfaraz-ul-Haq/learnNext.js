"use client";

import { useRouter } from "next/navigation";

export default function GiveName() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-3 text-center">
      My name is Zia.
      <br />
      <button
        className="inline-block px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
        type="button"
        onClick={() => router.push("/name/address")}
      >
        Get Address
      </button>
    </div>
  );
}
