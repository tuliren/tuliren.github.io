import '@mantine/core/styles.css';

import type {AppProps} from 'next/app';
import {MantineProvider} from '@mantine/core';
import React from "react";


export default function App({Component, pageProps}: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
