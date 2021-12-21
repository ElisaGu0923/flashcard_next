import { AppProps } from 'next/app';
// auth provider
import { SessionProvider } from "next-auth/react";
// styles
import '../styles/global.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>)
}
