import { Box, Typography } from '@mui/material';

export const NameAndTitle = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" py={3}>
      <Typography variant="h4" fontWeight={700}>
        Zhanna Sbitneva
      </Typography>
      <Typography color="primary" variant="h6">
        Front-End Developer
      </Typography>
    </Box>
  );
};
