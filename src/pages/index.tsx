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
import '../styles/normalize.css';

const pageStyles = {
  width: 'min(700px, 100%)',
  margin: '0 auto',
  padding: '2px',
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
