import { Button, Container, Group, Text } from '@mantine/core';

import classes from './HeroTitle.module.css';
import ProjectTitle from './ProjectTitle';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <ProjectTitle title="海盘车的领地" />
        </h1>

        {/*<Text className={classes.description} c="dimmed">*/}
        {/*  在达尔文宇宙中寻找意义*/}
        {/*</Text>*/}

        <Group className={classes.controls}>
          <Button
            component="a"
            href="/blog/2024/2024-05-19-why-is-ai-so-important"
            size="xl"
            variant="default"
            className={classes.control}
          >
            博客
          </Button>

          <Button
            component="a"
            href="/projects"
            size="xl"
            variant="default"
            className={classes.control}
          >
            项目
          </Button>
        </Group>
      </Container>
    </div>
  );
}
