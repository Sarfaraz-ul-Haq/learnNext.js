function GiveName({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { id: string };
}) {
  return <div>My name is {params.name}.</div>;
}

export default GiveName;
