import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GlobalStyle } from "@/styles/global";
import { light, dark } from "@/styles/theme";
import { ThemeMode } from "@/styles/theme";
import Container from "@/src/components/Container";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { pageview } from "@/lib/ga";
import '@/public/fonts/style.css';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.LIGHT);
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

  const getTheme = (theme: ThemeMode) => {
    switch(theme) {
      case ThemeMode.LIGHT: return light;
      case ThemeMode.DARK: return dark;
      default: return light;
    }
  }
  const toggleTheme = () => setTheme(1 - theme);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>RyuChigon Blog</title>
      </Head>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle />
        <Container theme={theme} toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}