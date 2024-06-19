"use client";

import { useState } from "react";
import { useThemeContext } from "./providers";
import AnotherButton from "./another-button";

export default function MyButton() {
  const [count, setCount] = useState(0);
  const theme = useThemeContext();
  return (
    <>
      <p>
        The theme is <span className="text-blue-500">{theme}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <AnotherButton />
    </>
  );
}
