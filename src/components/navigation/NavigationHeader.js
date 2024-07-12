import { Typography, Paper, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const NavigationHeader = ({paperColor, paddingSize}) => {
    const navigationButtonColor = "white";

    return (
    <Paper square={false} style={{backgroundColor: paperColor, marginBottom: paddingSize}}>
        <Stack spacing={1} sx={{height: "25%"}}>
            <Button style={{height: "7vh", margin: 0, paddingLeft: 0, paddingRight: "60%", color: navigationButtonColor}}>
                <HomeIcon style={{marginLeft: 15}}/>
                <Typography variant="h6" style={{marginLeft: 15}}>
                Home
                </Typography>
            </Button>
            <Button style={{height: "7vh", margin: 0, paddingLeft: 0, paddingRight: "50%", color: navigationButtonColor}}>
                <SearchIcon style={{marginLeft: 15}}/>
                <Typography variant="h6" style={{marginLeft: 15}}>
                Search
                </Typography>
            </Button>
        </Stack>
    </Paper>
  );
};

export default NavigationHeader;

