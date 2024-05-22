import { Text, Title } from '@mantine/core';
import React, { FC } from 'react';

interface ProjectTitleProps {
  title: string;
}

const ProjectTitle: FC<ProjectTitleProps> = ({ title }) => {
  return (
    <Text
      component="span"
      variant="gradient"
      fw={800}
      gradient={{ from: '#0070c9', to: '#e66465', deg: 45 }}
      inherit
    >
      {title}
    </Text>
  );
};

export default ProjectTitle;
