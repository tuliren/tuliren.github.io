import { ColorSchemeScript } from '@mantine/core';
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="icon" href="/favicon.svg" />
        <script defer data-domain="tuliren.dev" src="https://plausible.io/js/script.js" />
        <script src="https://cdn.jsdelivr.net/npm/@annotatejs/web@0/dist/index.umd.js" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
