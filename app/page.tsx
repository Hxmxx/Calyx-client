import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../styles/GlobalStyles";
import {theme} from "../styles/Theme";

export default function Home({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
