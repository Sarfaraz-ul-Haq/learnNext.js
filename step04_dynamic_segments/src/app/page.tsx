import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-10 gap-3">
      <div>Hello World from Panaverse DAO!</div>
      <Link href="/homepage">Go to Homepage</Link>
      <Link href="/dashboard">Go to Dashboard page</Link>
      <Link href="/settings">Go to Settings page</Link>
      You can also create a dynamic page by entering this URL in the browser:
      http://localhost:3000/xyz
    </div>
  );
}
