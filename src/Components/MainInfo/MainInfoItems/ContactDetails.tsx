import { Box, Link, Typography } from '@mui/material';

const firstColumn = {
  minWidth: '65px',
  paddingBottom: '2px',
} as const;

export const ContactDetails = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          Phone:
        </Typography>
        <Typography variant="body2">+48576315961</Typography>
      </Box>

      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          E-mail:
        </Typography>
        <Link target="_blank" href="mailto:zhannet1814@gmail.com">
          <Typography variant="body2" color="black">
            zhannet1814@gmail.com
          </Typography>
        </Link>
      </Box>

      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          GitHub:
        </Typography>
        <Link target="_blank" href="https://github.com/ZhannaL">
          <Typography variant="body2" color="black">
            https://github.com/ZhannaL
          </Typography>
        </Link>
      </Box>
      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          Linkedin:
        </Typography>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/zhanna-sbitneva-9a05a0b0/?locale=en_US"
        >
          <Typography variant="body2" color="black">
            https://www.linkedin.com/in/zhanna-sbitneva
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
