import { fetchData } from "./lib/data-fetcher";

export default async function Home() {
  const data = await fetchData();

  return <h1>{JSON.stringify(data)}</h1>;
}
