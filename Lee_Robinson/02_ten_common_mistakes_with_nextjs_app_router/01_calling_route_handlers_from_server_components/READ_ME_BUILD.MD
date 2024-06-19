
# 01 : Calling Route Handlers from Server Components

- bad pattern :
   1. url is hard coded, full node context
   2. the both code below are securely executed on server-side,

```tsx
// '/app/page.tsx'

export default async function Home() {
  let data = await fetch("http://localhost:3000/api");
  let json = await data.json();

  return <h1>{JSON.stringify(json)}</h1>;
}
```

```ts
// /app/api/route.ts
export async function GET(request: Request) {
  return Response.json({ hello: `World` });
}

```

## Solution

The main issues with this bad pattern  are:

1. Hardcoded URL: Directly using a hardcoded URL like "<http://localhost:3000/api>"
   is brittle and can lead to issues in different environments (development,
   production, etc.).

2. Full Node Context: Instead of using a hardcoded URL, we can leverage direct
   function calls in the server-side context.

##  Correct Pattern

To address these issues, we can follow a better pattern where we directly
call the logic of the Route Handlers within the server component.

This approach ensures that the logic remains securely executed on the
server-side without hardcoding URLs.

##  Step-by-Step Solution

1. **Refactor the API logic into a shared module :**
Extract the logic of the API handler into a separate function that can
be reused both in the Route Handler and directly in the server component.

2. **Directly call the extracted function in the server component :**
   This avoids making an HTTP request and keeps the data fetching within
   the server context.

## Refactoring the API Logic

1. Create a shared utility function:

```ts

// '/app/lib/data-fetcher.ts'
export async function fetchData() {
  // Simulate fetching data
  return { hello: "World" };
}
```

2. Update the Route Handler to use the shared function:

```ts
// '/app/api/route.ts'
import { fetchData } from '../lib/data-fetcher';

export async function GET(request: Request) {
  const data = await fetchData();
  return Response.json(data);
}
```

3. Call the shared function directly in the Server Component:

```tsx
// '/app/page.tsx'
import { fetchData } from './lib/data-fetcher';

export default async function Home() {
  const data = await fetchData();

  return <h1>{JSON.stringify(data)}</h1>;
}
```

## Explanation

- **Shared Utility Function:**
  The fetchData function encapsulates the data-fetching logic.
  This function is placed in a common directory (/app/lib/) so
  it can be imported and used both in the Route Handler and the
  Server Component.

- ***Route Handler Usage:**
  The Route Handler (/app/api/route.ts) imports the fetchData
  function and uses it to handle the GET request. This keeps the
  route handler logic clean and reusable.

- **Server Component Usage:**
  The Server Component (/app/page.tsx) directly imports and uses
  the fetchData function, avoiding the need to make an HTTP
  request and thereby ensuring efficient server-side data fetching.

This approach addresses the issues with the bad pattern by avoiding
hardcoded URLs, promoting code reuse, and keeping the logic securely
executed on the server-side.
