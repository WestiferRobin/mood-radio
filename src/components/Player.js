// components/Player.js

import React from 'react';
import { BottomNavigation, BottomNavigationAction, Slider } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Player = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Previous" icon={<SkipPreviousIcon />} />
      <BottomNavigationAction label="Play" icon={<PlayCircleOutlineIcon />} />
      <BottomNavigationAction label="Next" icon={<SkipNextIcon />} />
      <BottomNavigationAction icon={<VolumeUpIcon />} />
      <Slider aria-label="Volume" />
    </BottomNavigation>
  );
};

export default Player;
