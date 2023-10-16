import { Box, Link, Theme, Typography, useMediaQuery } from '@mui/material';
import { HeadLine } from '../HeadLine';

export const Certifications = () => {
  const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <Box display="flex" flexDirection="column">
      <HeadLine> Licenses & Certifications</HeadLine>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Typography fontWeight={700}> freeСodeСamp </Typography>
            <Typography> &nbsp; – &nbsp;freecodecamp.org</Typography>
          </Box>
          <Typography variant="caption">
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

          <Typography variant="caption">
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

        <Box display="flex" flexDirection="column" pt={isMobile ? 2 : 0}>
          <Box display="flex" alignItems="center">
            <Typography fontWeight={700}> SoloLearn </Typography>
            <Typography> &nbsp; – &nbsp;sololearn.com</Typography>
          </Box>
          <Typography variant="caption">
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

          <Typography variant="caption">
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
