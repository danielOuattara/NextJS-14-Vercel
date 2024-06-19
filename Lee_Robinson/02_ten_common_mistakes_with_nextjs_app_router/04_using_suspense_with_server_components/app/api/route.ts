/* 1 bad pattern */
// export async function GET(request: Request) {
//   return Response.json({ hello: `World` });
// }

/* 1 good pattern */
// import { fetchData } from "../lib/data-fetcher";

// export async function GET(request: Request) {
//   const data = await fetchData();
//   return Response.json(data);
// }

//------------------------------------------------------------------

export async function GET(request: Request) {
  return Response.json({
    date: new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
    }),
  });
}
