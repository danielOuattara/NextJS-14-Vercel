import { Suspense } from "react";

export default async function Page({ params, searchParams }) {
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();
  return <h1>{searchParams.user}</h1>;
}

/* 
- understanding how you can use information about 
  your incoming request in your server component
*/
