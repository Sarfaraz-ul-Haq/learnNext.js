import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 text-xl p-10">
      <div>Hello from Zia Khan</div>
      <div>
        <Link
          className="border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-300 hover:border-gray-300"
          href={"test_page"}
        >
          Go to Test Page
        </Link>
      </div>
    </div>
  );
}
