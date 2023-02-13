import React from 'react';
import Head from 'next/head';

// v4: Provider -> SessionProvider, next-auth/client -> next-auth/react
import { SessionProvider } from 'next-auth/react';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Social Login with Next & Prisma</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider resetCSS>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
export default MyApp;
