/* bad pattern */

/* 
export async function GET(request: Request) {
  return Response.json({ hello: `World` });
} 
*/

/* good pattern */
import { fetchData } from "../lib/data-fetcher";

export async function GET(request: Request) {
  const data = await fetchData();
  return Response.json(data);
}
