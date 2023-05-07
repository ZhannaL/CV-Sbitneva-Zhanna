import { createTheme } from '@mui/material/styles';

import { useMemo } from 'react';

export const useTheme = () => {
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#00af59',
        },
      },
    });
  }, []);

  return theme;
};
