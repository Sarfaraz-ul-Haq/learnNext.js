import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World from Panaverse DAO!
      <br />
      <Link href="/homepage">Go to Homepage</Link>
      <br />
      <Link href="/dashboard">Go to Dashboard page</Link>
      <br />
      <Link href="/settings">Go to Settings page</Link>
      <br />
      You can also create a dynamic page by entering this URL in the browser:
      http://localhost:3000/xyz
    </div>
  );
}
