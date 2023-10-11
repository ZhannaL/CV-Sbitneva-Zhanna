import { Box, Theme, Typography, useMediaQuery } from '@mui/material';

export const NameAndTitle = () => {
  const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" py={3}>
      <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight={700}>
        Zhanna Sbitneva
      </Typography>
      <Typography color="primary" variant="h6">
        Front-End Developer
      </Typography>
    </Box>
  );
};
