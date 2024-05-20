import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const getDate = (route: string): string => {
  const tokens = route.split('/')
  if (tokens.length < 4) {
    return ''
  }
  return tokens[3].substring(5, 10);
}

const config: DocsThemeConfig = {
  logo: <span>海盘车的领地</span>,
  project: {
    link: 'https://github.com/tuliren/tuliren.github.io',
  },
  docsRepositoryBase: 'https://github.com/tuliren/tuliren.github.io/tree/main',
  main({children}) {
    const { frontMatter } = useConfig();
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
}

export default config
