import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-xl">
      <div className="p-10">
        My name is Sarfaraz ul Haq and this is my first Next.js project.
      </div>
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
