"use client"

import { Global } from "@emotion/react";
import { globalStyles } from "@/app/styles/GlobalStyles";

export const GlobalStylesProvider = () => {
  return <Global styles={globalStyles} />;
}; 