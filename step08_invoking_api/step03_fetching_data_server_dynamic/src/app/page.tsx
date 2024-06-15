import { useState } from "react";

const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technologyy", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

async function Home() {
  const data = await getData();

  console.log(data.content);

  return <div className="p-24">{data.content}</div>;
}

export default Home;
