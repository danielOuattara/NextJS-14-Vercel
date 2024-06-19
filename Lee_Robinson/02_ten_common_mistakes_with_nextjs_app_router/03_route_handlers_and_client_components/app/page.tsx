"use client";

/* 
export default function Page() {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Submitted");
  }

  return (
    <form onSubmit={submitHandler}>
      <button>Send it</button>
    </form>
  );
} 

*/

/* 
- avoid this code 
- better call server actions
- server actions can work with server components and client component

*/

import { send } from "./actions";

export default function Page() {
  return (
    <form action={send}>
      <button>Send it</button>
    </form>
  );
}
