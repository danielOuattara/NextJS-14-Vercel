/* 
export default async function Home() {
  let data = await fetch("http://localhost:3000/api");
  let json = await data.json();

  return <h1>{JSON.stringify(json)}</h1>;
}

*/
import { fetchData } from "./lib/data-fetcher";

export default async function Home() {
  const data = await fetchData();

  return <h1>{JSON.stringify(data)}</h1>;
}
