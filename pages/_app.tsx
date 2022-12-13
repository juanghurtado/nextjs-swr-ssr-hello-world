import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <SWRConfig value={{
    fallback: pageProps.fallback
  }}>
    <Component {...pageProps} />
  </SWRConfig>;
}
