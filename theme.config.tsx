import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";
import Script from "next/script";
import ProjectTitle from "./components/ProjectTitle";

const getDate = (route: string): string => {
  const tokens = route.split('/')
  if (tokens.length < 4) {
    return ''
  }
  return tokens[3].substring(5, 10);
}

const config: DocsThemeConfig = {
  logo: <ProjectTitle title="海盘车的领地" />,
  project: {
    link: 'https://github.com/tuliren/tuliren.github.io',
  },
  docsRepositoryBase: 'https://github.com/tuliren/tuliren.github.io/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta property="og:title" content="海盘车的领地"/>
      <meta property="og:description" content="Liren personal site"/>
      <Script defer data-domain="tuliren.dev" src="https://plausible.io/js/script.js" />
    </>
  ),
  main({children}) {
    const {frontMatter} = useConfig();
    return <>
      {/*<h1>{frontMatter.title}</h1>*/}
      {/*<p>{new Date(frontMatter.date).toLocaleDateString()}</p>*/}
      {children}
    </>
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    titleComponent({ title, type, route }) {
      if (route.split('/').length < 4) {
        return <>{title}</>;
      } else {
        return <>{title} ({getDate(route)})</>;
      }
    }
  },
  toc: {
    float: true,
    backToTop: true,
  },
  feedback: {
    content: null
  },
  footer: {
    text: (
      <span>
        CC BY-NC-SA 4.0 {new Date().getFullYear()} © Liren Tu
      </span>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – 海盘车的领地'
      }
    }
  }
}

export default config
