import { Box, Link, Typography } from '@mui/material';
import { HeadLine } from '../HeadLine';

export const Education = () => {
  return (
    <Box display="flex" flexDirection="column">
      <HeadLine> Education </HeadLine>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Typography fontWeight={700}> The Rolling Scopes Poland </Typography>
          <Typography color="gray" fontStyle="italic">
            {' '}
            &nbsp; – &nbsp;student
          </Typography>
        </Box>
        <Typography color="gray" variant="caption">
          March 2020 - August 2020 -{' '}
          <Link target="_blank" color="#000" href="https://app.rs.school/certificate/q3444sf9">
            Certificate
          </Link>
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Typography fontWeight={700}> Belgorod state technological university (BSTU) </Typography>
          <Typography color="gray" fontStyle="italic">
            {' '}
            &nbsp; – &nbsp;Bachelor’s degree
          </Typography>
        </Box>
        <Typography color="gray" variant="caption">
          2017 – present
        </Typography>
        <Typography variant="caption">Information technologies</Typography>
      </Box>

      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Typography fontWeight={700}> Belgorod state technological university (BSTU) </Typography>
          <Typography color="gray" fontStyle="italic">
            {' '}
            &nbsp; – &nbsp;Masters Degree in Economics
          </Typography>
        </Box>
        <Typography color="gray" variant="caption">
          2010 – 2015
        </Typography>
        <Typography variant="caption">Accounting, analysis, and audit</Typography>
      </Box>
    </Box>
  );
};
