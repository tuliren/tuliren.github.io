import { FC } from "react";
import { Title } from "@mantine/core";

interface ProjectTitleProps {
  title: string;
}

const ProjectTitle: FC<ProjectTitleProps> = ({title}) => {
  return (
    <Title
      order={2}
      size="30px"
      fw={800}
      style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg, #0070c9, #e66465 25%)',
      }}
    >
      {title}
    </Title>
  );
}

export default ProjectTitle;
