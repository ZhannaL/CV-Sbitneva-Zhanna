import { Box, Typography } from '@mui/material';
import { HeadLine } from '../HeadLine';

export const Experience = () => {
  return (
    <Box display="flex" flexDirection="column">
      <HeadLine> Experience </HeadLine>

      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Typography fontWeight={700}> EPAM Systems </Typography>
          <Typography color="gray" fontStyle="italic">
            {' '}
            &nbsp; – &nbsp;Front-End Developer
          </Typography>
        </Box>
        <Typography color="gray" variant="caption">
          Oct 2021 – Present
        </Typography>
        <Typography> Working on UI for car insurance product </Typography>
        <Typography> Developing of promo/discount system and covering by A/B testing</Typography>
        <Typography>
          Developing a new design for the checkout process for the retail website
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" pt={1}>
        <Box display="flex" alignItems="center">
          <Typography fontWeight={700}> EPAM Systems </Typography>
          <Typography color="gray" fontStyle="italic">
            {' '}
            &nbsp; – &nbsp;Junior Front-End Developer
          </Typography>
        </Box>
        <Typography color="gray" variant="caption">
          Feb 2021 – Sep 2021
        </Typography>
        <Typography> Rewrite car parking system ui from Angular to React </Typography>
      </Box>
    </Box>
  );
};
