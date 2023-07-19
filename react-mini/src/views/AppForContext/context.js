import { createContext, useState } from "react";

// Context creation
export const ThemeContext = createContext();

// value to send in provider
export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => {
      if (theme === "light") return "dark";
      return "light";
    });
  };

  return {
    theme,
    toggleTheme,
  };
};
