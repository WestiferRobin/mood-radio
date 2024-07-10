import { 
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from '@mui/material';
import { useState } from 'react';

const NewPlaylistDialog = ({handleDialog, open = false}) => {
    const backgroundColor = "black";

    const [playlistName, setPlaylistName] = useState("");

    const handleCreatePlaylist = () => {
        handleDialog(playlistName);
        setPlaylistName("");
    };

    const handleCancel = () => {
        setPlaylistName("");
    }

    const renderTitle = () => {
        let title = "New Playlist";
        if (playlistName.length > 0) 
        {
            title += `: ${playlistName}`   
        }
        return title;
    }

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
        >
            <DialogTitle style={{backgroundColor: backgroundColor}}>{renderTitle()}</DialogTitle>
            <DialogContent style={{backgroundColor: backgroundColor}} noValidate>
                <DialogContentText sx={{mb: 2}}>
                    Please enter a name for your new playlist. 
                    This playlist will be added to your library and you can add songs to it later.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="new-playlist"
                    name="new-playlist"
                    label="Playlist Name"
                    type="new-playlist"
                    fullWidth
                    variant="outlined"
                    onChange={(event) => setPlaylistName(event.target.value)}
                    InputProps={{
                        style: {
                            borderColor: 'white',
                        },
                        classes: {
                            notchedOutline: 'custom-outline',
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                    }}
                />
            </DialogContent>
            <DialogActions style={{backgroundColor: backgroundColor}}>
                <Button variant="contained" onClick={handleCreatePlaylist}>
                    Create
                </Button>
                <Button variant="outlined" onClick={handleCancel}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default NewPlaylistDialog;

