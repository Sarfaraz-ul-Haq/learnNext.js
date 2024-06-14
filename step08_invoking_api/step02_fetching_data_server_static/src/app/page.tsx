async function getData() {
  const res = await fetch("https://api.quotable.io/random?tags=technology");
  return res.json();
}

async function Home() {
  const data = await getData();

  console.log(data);

  return <div>{data.content}</div>;
}

export default Home;
