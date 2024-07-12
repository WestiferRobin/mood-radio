import { useCallback, useState } from 'react';
import {
  Paper, 
  Typography, 
  Toolbar, 
  IconButton, 
  Tooltip,
  Box,
} from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AddIcon from '@mui/icons-material/Add';
import NewPlaylistDialog from '../dialogs/NewPlaylistDialog';

const NavigationLibrary = ({paperColor}) => {
    // TODO: consider design for AI Artists and Albums later on
    const [newPlaylistOpen, setNewPlaylistOpen] = useState(false);

    // TODO: create an endpoint to get a user's playlist
    const [libraryItems, setLibraryItems] = useState([]);

    // TODO: Needs to be refactored when Cards for LibraryItems become more of a thing (checkout )
    const addPlaylist = useCallback((playlistName) => {
        setLibraryItems([...libraryItems, playlistName]);
        setNewPlaylistOpen(false);
    }, [setLibraryItems, libraryItems]);

    const renderDialog = () => {
        return (<NewPlaylistDialog open={newPlaylistOpen} handleDialog={addPlaylist} />);
    };

    const renderMainToolbar = () => {
        return <Toolbar>
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
                {/* TODO: Implement exapand all feature (aka look at the arrow in spotify)*/}
            </Tooltip>
        </Toolbar>
    }

    const renderLibraryFilters = () => {
        // TODO: add the stuff
    }

    const renderSearchToolbar = () => {
        // TODO: Add search bar, sort by, and view by components... consider making render functions per each
    }

    // TODO: Make LibraryItems for Playlists, Artists, Albums, Discographies, Stations
    const renderLibraryItems = () => {
        return <Box
            sx={{ 
                height: "66.5vh",  // Adjust the height as needed
                overflowY: 'scroll',
                // padding: 2,
                borderRadius: 1
            }}
        >
            {renderSearchToolbar()}
            <div style={{backgroundColor: "red"}}>
                {libraryItems.map((name) => <div>{name}</div>)}
            </div>
        </Box>
    };

    return <Paper square={false} style={{height: "83%", backgroundColor: paperColor}}>
        {renderDialog()}
        {renderMainToolbar()}
        {renderLibraryFilters()}
        {renderLibraryItems()}
    </Paper>;
};

export default NavigationLibrary;

