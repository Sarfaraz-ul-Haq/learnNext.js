import Link from "next/link";

function DashboardPage() {
  return (
    <div className="p-10 space-y-5 flex flex-col justify-center items-center h-screen">
      <div className="font-bold text-4xl"> This is Dashboard Page!</div>

      <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        <button>
          <Link href={"dashboard/settings"}>Go to Settings Page</Link>
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
