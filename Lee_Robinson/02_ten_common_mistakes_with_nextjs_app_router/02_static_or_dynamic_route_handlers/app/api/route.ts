/* 
export async function GET(request: Request) {
  return Response.json({
    date: new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
    }),
  });
} 
*/

/* 

- in dev mode: no caching, every request triggers a new time

- run npm run build && npm run start: data is cached

- this route static handler is cached by default.

- to opt out caching, make this route handler dynamic

- many actions can make this route handler dynamic

*/

export async function GET(request: Request) {
  let response = await fetch("https://api.github.com/users/danielOuattara");
  let data = await response.json();
  return Response.json(data);
}

/* 
globally this might seem not useful, one can call 
directly this function  in the page component

*/
