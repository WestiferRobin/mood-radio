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
import useMoodApi from '../../hooks/useMoodApi';

const NavigationLibrary = ({paperColor}) => {
    // TODO: consider design for AI Artists and Albums later on
    const [newPlaylistOpen, setNewPlaylistOpen] = useState(false);

    // TODO: create an endpoint to get a user's playlist
    const { userLibrary } = useMoodApi();

    // TODO: Need to create an update request when a playlist is suggested.. consider doing this on the child component
    const addPlaylist = useCallback((playlistName) => {
        // setLibraryItems([...userLibrary, playlistName]); => TODO: Fix this shit with backend
        alert(`added playlist ${playlistName}`);
        setNewPlaylistOpen(false);
    }, [userLibrary]);

    const dialogCancel = useCallback(() => {
        setNewPlaylistOpen(false);
    }, [setNewPlaylistOpen]);

    const renderDialog = () => {
        return <NewPlaylistDialog 
            open={newPlaylistOpen} 
            handleConfirm={addPlaylist} 
            handleCancel={dialogCancel} 
        />;
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

    const renderLibraryCards = () => {
        // TODO: Needs to be refactored when Cards for LibraryItems become more of a thing (checkout )
        return  <div style={{backgroundColor: "red"}}>
            {userLibrary.map((name) => <div>{name}</div>)}
        </div>;
    };

    // TODO: Make LibraryItems for Playlists, Artists, Albums, Discographies first and Generas later
    const renderLibraryItems = () => {
        return <Box
            sx={{ 
                height: "70vh",  // Adjust the height as needed
                overflowY: 'scroll',
                backgroundColor: "red",
                borderRadius: 1
            }}
        >
            {renderSearchToolbar()}
            {renderLibraryCards()}
        </Box>
    };

    return <Paper square={false} style={{height: "89%", backgroundColor: paperColor}}>
        {renderDialog()}
        {renderMainToolbar()}
        {renderLibraryFilters()}
        {renderLibraryItems()}
    </Paper>;
};

export default NavigationLibrary;

