import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10 space-y-5 flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-4xl">Hello, Home Page!</h1>
      <div>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          <Link href={"/dashboard"}>Go to Dashboard Page</Link>
        </button>
      </div>
      <div>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          <Link href={"/blog"}>Go to Blog Page</Link>
        </button>
      </div>
      <div>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          <Link href={"/contact_us"}>Go to Contact Us Page</Link>
        </button>
      </div>
    </div>
  );
}
