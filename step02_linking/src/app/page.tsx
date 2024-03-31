import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-3 text-center">
      <div>Hello World from Panaverse DAO!</div>
      <div>
        <button className="inline-block px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-800 hover:text-white">
          <Link href="/name">Go to name page</Link>
        </button>
      </div>
    </div>
  );
}
