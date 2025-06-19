"use client"

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/app/styles/Theme";
import { GlobalStyles } from "@/app/styles/GlobalStyles";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}; 