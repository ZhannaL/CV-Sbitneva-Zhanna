import { Box, Link, Typography } from '@mui/material';
import { HeadLine } from '../HeadLine';

export const Certifications = () => {
  return (
    <Box display="flex" flexDirection="column">
      <HeadLine> Licenses & Certifications</HeadLine>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Typography fontWeight={700}> freeСodeСamp </Typography>
            <Typography color="gray" fontStyle="italic">
              {' '}
              &nbsp; – &nbsp;freecodecamp.org
            </Typography>
          </Box>
          <Typography color="gray" variant="caption">
            January 2020 -{' '}
            <Link
              target="_blank"
              color="#000"
              href="https://www.freecodecamp.org/certification/fccd965dc7c-f69d-49bd-89c6-0f31dac86f0e/responsive-web-design"
            >
              Certificate
            </Link>
          </Typography>
          <Typography> Responsive Web Design </Typography>

          <Typography color="gray" variant="caption">
            February 2020 -{' '}
            <Link
              target="_blank"
              color="#000"
              href="https://www.freecodecamp.org/certification/fccd965dc7c-f69d-49bd-89c6-0f31dac86f0e/javascript-algorithms-and-data-structures"
            >
              Certificate
            </Link>
          </Typography>
          <Typography> JavaScript Algorithms and Data Structures</Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Typography fontWeight={700}> SoloLearn </Typography>
            <Typography color="gray" fontStyle="italic">
              {' '}
              &nbsp; – &nbsp;sololearn.com
            </Typography>
          </Box>
          <Typography color="gray" variant="caption">
            February 2020 -{' '}
            <Link
              target="_blank"
              color="#000"
              href="https://www.sololearn.com/Certificate/1023-17309120/pdf/"
            >
              Certificate
            </Link>
          </Typography>
          <Typography> CSS Fundamentals course </Typography>

          <Typography color="gray" variant="caption">
            February 2020 -{' '}
            <Link
              target="_blank"
              color="#000"
              href="https://www.sololearn.com/Certificate/1024-17309120/pdf/"
            >
              Certificate
            </Link>
          </Typography>
          <Typography> JavaScript Tutorial course</Typography>
        </Box>
      </Box>
    </Box>
  );
};
