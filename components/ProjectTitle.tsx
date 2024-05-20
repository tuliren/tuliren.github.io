import { FC } from "react";

interface ProjectTitleProps {
  title: string;
}

const ProjectTitle: FC<ProjectTitleProps> = ({title}) => {
  return (
    <h1
      style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg, #0070c9, #e66465 25%)',
      }}
    >
      {title}
    </h1>
  );
}

export default ProjectTitle;
