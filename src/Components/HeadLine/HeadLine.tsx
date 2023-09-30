import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const HeadLine = ({ children }: Props) => {
  return (
    <Box py={0.5}>
      <Typography color="primary" variant="h6" fontWeight={700}>
        {children}
      </Typography>
    </Box>
  );
};
