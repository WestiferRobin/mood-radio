import { useCallback, useState } from 'react';
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
        return <div>
            {renderSearchToolbar()}
            <div>
                {libraryItems.map((name) => <div>{name}</div>)}
            </div>
        </div>
    };

    return <Paper square={false} style={{height: "25.5%", backgroundColor: paperColor}}>
        {renderDialog()}
        {renderMainToolbar()}
        {renderLibraryFilters()}
        {renderLibraryItems()}
    </Paper>;
};

export default NavigationLibraryPaper;

