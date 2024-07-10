import { useState } from 'react';
import {
  Paper, 
  Typography, 
  Toolbar, 
  IconButton, 
  Tooltip,
} from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AddIcon from '@mui/icons-material/Add';
import NewPlaylistDialog from '../dialogs/NewPlaylistDialog';

const NavigationLibraryPaper = ({paperColor}) => {
    const [newPlaylistOpen, setNewPlaylistOpen] = useState(false);

    return <Paper square={false} style={{height: "11.5%", backgroundColor: paperColor}}>
        <Toolbar>
            <AutoAwesomeMotionIcon 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Library
            </Typography>
            <Tooltip title="Create playlist">
                <IconButton color='inherit' onClick={() => setNewPlaylistOpen(true)}>
                <AddIcon />
                </IconButton>
            </Tooltip>
        </Toolbar>
        <NewPlaylistDialog open={newPlaylistOpen} handleDialog={setNewPlaylistOpen} />
    </Paper>
};

export default NavigationLibraryPaper;

