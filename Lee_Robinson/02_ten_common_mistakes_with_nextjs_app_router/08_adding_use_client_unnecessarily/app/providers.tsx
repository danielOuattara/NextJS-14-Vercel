"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext({});

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}

export const useThemeContext = () => useContext(ThemeContext);
