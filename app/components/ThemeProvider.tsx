"use client"

import { ThemeProvider as EmotionThemeProvider, Global } from "@emotion/react";
import { THEME } from "@/app/styles/Theme";
import { globalStyles } from "@/app/styles/GlobalStyles";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionThemeProvider theme={THEME}>
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
}; 