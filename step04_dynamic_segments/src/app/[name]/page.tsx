type WriteNameProps = {
  params: {
    name: string;
  };
  searchParams: any;
};

function WriteName({ params, searchParams }: WriteNameProps) {
  console.log(searchParams.id);
  return (
    <div>
      <div>params = {params.name}</div>
      <div>searchParams = {searchParams.id}</div>
    </div>
  );
}

export default WriteName;
