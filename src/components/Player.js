// components/Player.js

import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Slider, IconButton, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Player = () => {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'pink', height: "7%" }}>
      {/* <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
        Now Playing: Song Title
      </Typography> */}
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Previous" icon={<SkipPreviousIcon />} />
        <BottomNavigationAction label="Play" icon={<PlayCircleOutlineIcon />} />
        <BottomNavigationAction label="Next" icon={<SkipNextIcon />} />
        <BottomNavigationAction icon={<VolumeUpIcon />} />
        <Slider aria-label="Volume" />
      </BottomNavigation>
    </Box>
  );
};

export default Player;
