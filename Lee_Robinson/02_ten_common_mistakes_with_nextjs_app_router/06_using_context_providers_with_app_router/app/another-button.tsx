import { useState } from "react";

export default function AnotherButton() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
}
