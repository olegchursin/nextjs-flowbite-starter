import type { AppProps } from 'next/app';
import { FC, Suspense } from 'react';
import '../styles/globals.css';
import { flowbiteTheme as theme } from '../theme';

import { Flowbite, Spinner } from 'flowbite-react';
import Layout from '../components/layout';

const App: FC<AppProps> = function ({ Component, pageProps }): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Spinner size="lg" /> Loading..
        </div>
      }
    >
      <Flowbite theme={{ theme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Flowbite>
    </Suspense>
  );
};

export default App;
