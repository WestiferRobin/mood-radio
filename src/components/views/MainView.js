import { 
  Box,
  Grid, 
  Paper,
  Typography,
  Stack,
  Button
} from '@mui/material';
import NavigationPaper from '../papers/NavigationPaper';
import useMoodApi from '../../hooks/mood-library-hooks/useMoodApi';
import useSearchApi from '../../hooks/mood-library-hooks/useSearchApi';
import Player from '../Player';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const MainView = () => {
  const backgroundColor = "black";
  const paperColor = "grey";
  const paddingSize = 10;

  const { user } = useMoodApi();
  const { artists } = useSearchApi();

  const height = 94;
  const navigationButtonColor = "white";

  return <Box>
    <Grid container style={{backgroundColor: backgroundColor, height: `${height}vh`}}>
      <Grid item xs={2.35} style={{ padding: paddingSize, paddingRight: paddingSize / 2, paddingLeft: paddingSize}}>
        {/* <NavigationPaper paperColor={paperColor} paddingSize={paddingSize} height={"95%"} /> */}
        <Box>
          <Paper square={false} style={{backgroundColor: paperColor, paddingSize: paddingSize, height: `${height / 8}vh`}}>
            <Stack spacing={1}>
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
          <Paper square={false} style={{backgroundColor: paperColor, paddingSize: paddingSize, height: `${height / 2.66}vh`}} />
        </Box>
      </Grid>
      <Grid item xs={7.3} style={{ padding: paddingSize, paddingLeft: paddingSize / 2, paddingRight: paddingSize / 2}}>
        <Paper square={false} style={{backgroundColor: paperColor, height: `100%`}}>
          { user === null ? "Not Found or Loading" : `Hello ${user.username}!` }
          <Box style={{overflow: "scroll", height: `${height / 1.05}vh`}}>
            { artists.map((value) => <div>{value.name}</div>)}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={2.35} style={{padding: paddingSize, paddingLeft: paddingSize / 2}}>
        <Paper square={false} style={{backgroundColor: paperColor, height: `100%`}}>
          <Box style={{overflow: "scroll", height: `${height / 1.022}vh`}}>
            { artists.map((value) => <div>{value.name}</div>)}
          </Box>
        </Paper>
      </Grid>
    </Grid>
    <Player />
  </Box>;
};

export default MainView;
