import { Box, Typography } from '@mui/material';
import { HeadLine } from '../HeadLine';

export const Summary = () => {
  return (
    <Box display="flex" flexDirection="column">
      <HeadLine> Summary </HeadLine>

      <Typography whiteSpace="pre-line">
        I have over 3 years of professional experience in Frontend Web Development, working with
        &#10; JavaScript/Typescript, React, Redux, Redux-Saga, HTML, CSS, SCSS, Material-UI,
        Semantic UI, Storybook, Git, Gatsby, Jest, React Testing Library, an Ubuntu user.
      </Typography>
    </Box>
  );
};
