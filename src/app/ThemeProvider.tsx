import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
export const ThemesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
