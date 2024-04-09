import Link from "next/link";

export default function Home() {
  return (
    <div className="p-7 flex flex-col gap-2">
      <div className="bg-yellow-400">Hello World from Panaverse DAO!</div>
      <br />
      <button className="border border-gray-400 hover:border-gray-800 hover:bg-gray-200 p-2 rounded">
        <Link href="/name">Go to name page</Link>
      </button>
    </div>
  );
}
