import * as React from 'react';
import {
  AdditionalExperience,
  Certifications,
  Education,
  Experience,
  MainInfo,
  Summary,
} from '../Components';
import { ThemeProvider } from '@mui/material';
import { useTheme } from '../styles/mui-theme';

const pageStyles = {
  width: '700px',
  margin: '0 auto',
  padding: '4px',
};

const IndexPage = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <main style={pageStyles}>
        <MainInfo />
        <Summary />
        <Experience />
        <Certifications />
        <AdditionalExperience />
        <Education />
      </main>
    </ThemeProvider>
  );
};

export default IndexPage;
