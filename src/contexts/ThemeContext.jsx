// src/contexts/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(scheme === "dark");

  useEffect(() => {
    setIsDarkTheme(scheme === "dark");
  }, [scheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
