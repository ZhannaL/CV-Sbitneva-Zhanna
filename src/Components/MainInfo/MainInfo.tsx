import { Box } from '@mui/material';
import { NameAndTitle } from './MainInfoItems/NameAndTitle';
import { ContactDetails } from './MainInfoItems/ContactDetails';

import foto from '../../images/foto.jpg';

export const MainInfo = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column">
        <NameAndTitle />
        <ContactDetails />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <img style={{ width: 'auto', height: '205px' }} src={foto} alt="arrowfn" />
      </Box>
    </Box>
  );
};
