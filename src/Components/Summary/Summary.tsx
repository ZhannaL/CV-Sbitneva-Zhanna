import { Box, Typography } from '@mui/material';
import { HeadLine } from '../HeadLine';

export const Summary = () => {
  return (
    <Box display="flex" flexDirection="column">
      <HeadLine> Summary </HeadLine>

      <Typography>Self-educated web developer with lots of own pet-projects on GiHub.</Typography>
      <Typography>
        JavaScript/Typescript, React, Redux, Redux-Saga, HTML, CSS, Sass/SCSS, Storybook, Semantic
        UI, Material-UI, Git, Gatsby, Jest, React Testing Library, an Ubuntu user.
      </Typography>
    </Box>
  );
};
