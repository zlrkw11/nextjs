interface Params {
  params: { name: string };
}

export default function Page({ params }: Params) {
  return <div>{params.name}</div>;
}
