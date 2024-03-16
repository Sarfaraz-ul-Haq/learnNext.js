import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 text-sm p-10">
      <div>Hello from Zia Khan</div>
      <div>
        <Link href={"test_page"}>Go to Test Page</Link>
      </div>
    </div>
  );
}
