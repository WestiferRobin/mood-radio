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

const NewPlaylistDialog = ({handleConfirm, handleCancel, open = false}) => {
    const backgroundColor = "black";

    const [playlistName, setPlaylistName] = useState("");

    const handleCreatePlaylist = () => {
        handleConfirm(playlistName);
        setPlaylistName("");
    };

    const handleConfirmCancel = () => {
        handleCancel();
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
        <Dialog open={open}>
            <DialogTitle style={{backgroundColor: backgroundColor}}>{renderTitle()}</DialogTitle>
            <DialogContent style={{backgroundColor: backgroundColor}} noValidate>
                <DialogContentText sx={{mb: 2}}>
                    Please enter a name for your new playlist. 
                    This playlist will be added to your library and you can add songs to it later.
                </DialogContentText>
                <TextField
                    margin="dense"
                    label="Playlist Name"
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
                <Button variant="outlined" onClick={handleConfirmCancel}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default NewPlaylistDialog;

