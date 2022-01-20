import { AppProps } from 'next/app';
// auth provider
import { SessionProvider } from "next-auth/react";
// theme provider
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
// styles
import '../styles/global.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}
