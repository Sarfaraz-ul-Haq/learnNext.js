import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-center">
        Hello World from Panaverse DAO!
      </div>
      <div>
        <Link href={"/name"}>Go to name page</Link>
      </div>
    </>
  );
}
