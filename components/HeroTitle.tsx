import { Container, Text, Button, Group } from '@mantine/core';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>

            <Text component="span" variant="gradient" gradient={{ from: '#0070c9', to: '#e66465' }} inherit>
              海盘车的领地
            </Text>

          </h1>

          {/*<Text className={classes.description} color="dimmed">*/}
          {/*  Build fully functional accessible web applications with ease – Mantine includes more than*/}
          {/*  100 customizable components and hooks to cover you in any situation*/}
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
