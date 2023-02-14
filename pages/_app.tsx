import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fallback: pageProps.fallback
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default App;
