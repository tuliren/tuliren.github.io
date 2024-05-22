import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';
import React from "react";

export default function Document() {
  return (
      <Html lang="en">
        <Head>
          <ColorSchemeScript defaultColorScheme="auto"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta property="og:title" content="海盘车的领地"/>
          <meta property="og:description" content="Liren personal site"/>
          <script defer data-domain="tuliren.dev" src="https://plausible.io/js/script.js"></script>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
  );
}
