import { Center, Pill, Text, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

import ProjectTitle from './components/ProjectTitle';

const getDate = (route: string): string => {
  const tokens = route.split('/');
  if (tokens.length < 4) {
    return '';
  }
  return tokens[3].substring(5, 10);
};

const config: DocsThemeConfig = {
  logo: <ProjectTitle title="海盘车的领地" />,
  project: {
    link: 'https://github.com/tuliren/tuliren.github.io',
  },
  docsRepositoryBase: 'https://github.com/tuliren/tuliren.github.io/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:description" content="Liren personal site" />
    </>
  ),
  main({ children }) {
    const { frontMatter } = useConfig();
    const { asPath } = useRouter();
    if (asPath === '/') {
      return children;
    }
    return (
      <>
        <Title order={1} pt="xl">
          {frontMatter.title}
        </Title>
        {frontMatter.date != null && (
          <Center>
            <Text c="dimmed">{new Date(frontMatter.date).toLocaleDateString()}</Text>
          </Center>
        )}
        {children}
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    titleComponent({ title, type, route }) {
      if (route.split('/').length < 4) {
        return <>{title}</>;
      } else {
        return (
          <>
            {title} ({getDate(route)})
          </>
        );
      }
    },
  },
  toc: {
    float: true,
    backToTop: true,
    title: '目录',
    extraContent() {
      const { frontMatter } = useConfig();
      if (frontMatter.tags == null || frontMatter.tags.length === 0) {
        return null;
      }
      return (
        <>
          <Pill.Group>
            {frontMatter.tags.map?.((tag: string) => (
              <Pill key={tag} size="md">
                {tag}
              </Pill>
            ))}
          </Pill.Group>
        </>
      );
    },
  },
  feedback: {
    content: null,
  },
  footer: {
    text: <span>CC BY-NC-SA 4.0 {new Date().getFullYear()} © Liren Tu</span>,
  },
  gitTimestamp({ timestamp }) {
    const { asPath } = useRouter();
    if (asPath === '/') {
      return null;
    }
    return (
      <Text size="xs" c="dimmed">
        最近更新：{timestamp.toLocaleDateString()}
      </Text>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – 海盘车的领地',
      };
    }
  },
};

export default config;
