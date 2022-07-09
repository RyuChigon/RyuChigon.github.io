import { useEffect } from "react";
import { useRouter } from "next/router";
import { GlobalStyle, theme } from "@/styles/global";
import Container from "@/components/Container";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { pageview } from "@/lib/ga";
import '@/public/static/fonts/style.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events])

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