import { GlobalStyle, theme } from "@/styles/global";
import Container from "@/components/Container";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>RyuChigon Blog</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}