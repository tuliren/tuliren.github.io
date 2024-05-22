import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";
import ProjectTitle from "./components/ProjectTitle";
import {Center, Text, Title} from "@mantine/core";

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
  main({children}) {
    const {frontMatter} = useConfig();
    const {asPath} = useRouter();
    if (asPath === '/') {
      return children;
    }
    return <>
      <Title order={1} pt="xl">{frontMatter.title}</Title>
      {frontMatter.date != null && (
        <Center>
          <Text c="dimmed">{new Date(frontMatter.date).toLocaleDateString()}</Text>
        </Center>
      )}
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
  gitTimestamp({ timestamp }) {
    const {asPath} = useRouter();
    if (asPath === '/') {
      return null;
    }
    return <Text size="xs" c="dimmed">最近更新：{timestamp.toLocaleDateString()}</Text>;
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
