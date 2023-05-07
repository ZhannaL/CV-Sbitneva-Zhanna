import { Box, Typography, Link } from '@mui/material';
import { HeadLine } from '../HeadLine';

export const AdditionalExperience = () => {
  return (
    <Box display="flex" flexDirection="column">
      <HeadLine> Additional Experience / Own projects</HeadLine>
      <Box display="flex" flexDirection="column" sx={{ fontSize: '14px' }}>
        <Box display="flex" alignItems="center">
          <Typography>Timer for Mars Terraforming board game&nbsp;-&nbsp;</Typography>
          <Link target="_blank" color="#000" href="https://timer-mars.netlify.app/">
            https://timer-mars.netlify.app/
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>Mine game (React, Gatsby)&nbsp;-&nbsp;</Typography>
          <Link target="_blank" color="#000" href="https://mines-react.netlify.app/">
            https://mines-react.netlify.app/
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>Weather app (React, Gatsby, Redux)&nbsp;-&nbsp;</Typography>
          <Link target="_blank" color="#000" href="https://weather-app-gatsby.netlify.app/">
            https://weather-app-gatsby.netlify.app/
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>React-based app chat (React, Redux, Websocket)&nbsp;-&nbsp;</Typography>
          <Link
            target="_blank"
            color="#000"
            href="https://zhannal.github.io/simple-chat-react-rss/"
          >
            https://zhannal.github.io/simple-chat-react-rss/
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>React-based app. SongBird Quiz (React, Redux)&nbsp;-&nbsp;</Typography>
          <Link target="_blank" color="#000" href="https://zhannal.github.io/song-bird-quiz/">
            https://zhannal.github.io/song-bird-quiz/
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>Restaurant landing page (HTML, CSS)&nbsp;-&nbsp;</Typography>
          <Link
            target="_blank"
            color="#000"
            href="https://zhannal.github.io/restaurant-landing-page/"
          >
            https://zhannal.github.io/restaurant-landing-page/
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>WebGL game UI with React/SASS/CSS modules&nbsp;-&nbsp;</Typography>
          <Link
            target="_blank"
            color="#000"
            href="https://github.com/SphericalWorld/spherical-world"
          >
            https://github.com/SphericalWorld/spherical-world
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
