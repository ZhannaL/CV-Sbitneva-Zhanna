import { Box, Theme, useMediaQuery } from '@mui/material';
import { NameAndTitle } from './MainInfoItems/NameAndTitle';
import { ContactDetails } from './MainInfoItems/ContactDetails';

import foto from '../../images/foto.jpg';

export const MainInfo = () => {
  const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return isMobile ? (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between" width="100%">
        <NameAndTitle />
        <img
          style={{ width: 'auto', height: '110px', marginRight: '20px' }}
          src={foto}
          alt="profileFoto"
        />
      </Box>

      <ContactDetails />
    </Box>
  ) : (
    <Box display="flex" justifyContent="space-between" width="100%">
      <Box display="flex" flexDirection="column">
        <NameAndTitle />
        <ContactDetails />
      </Box>
      <Box display="flex" alignItems={isMobile ? 'flex-start' : 'center'}>
        <img style={{ width: 'auto', height: '205px' }} src={foto} alt="profileFoto" />
      </Box>
    </Box>
  );
};
