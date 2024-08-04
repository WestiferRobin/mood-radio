import { 
  Box,
  Grid, 
  Paper,
  Typography,
  Stack,
  Button,
  // Slider
} from '@mui/material';
import NavigationPaper from '../papers/NavigationPaper';
import useMoodApi from '../../hooks/mood-library-hooks/useMoodApi';
import useSearchApi from '../../hooks/mood-library-hooks/useSearchApi';
// import Player from '../Player';

// Remove when doing NavigationPaper
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

// Remove when doing PlayerBar
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';

const MainView = () => {
  const backgroundColor = "black";
  const paperColor = "grey";
  const paddingSize = 10;

  const { user } = useMoodApi();
  const { artists } = useSearchApi();

  const height = 94;
  const navigationButtonColor = "white";

  // const [value, setValue] = useState(30);

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  return <Box>
    <Grid container style={{backgroundColor: backgroundColor, height: `${height}vh`}}>
      <Grid item xs={2.35} style={{ padding: paddingSize, paddingRight: paddingSize / 2, paddingLeft: paddingSize}}>
        <NavigationPaper paperColor={paperColor} paddingSize={paddingSize} height={"95%"} />
        {/* <Box>
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
        </Box> */}
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
    <Box style={{height: `${100 - height}vh`, backgroundColor: "yellow"}}>
      <Button style={{backgroundColor: "orange", height: "100%"}}>
        <SkipPreviousIcon />
      </Button>
      <Button style={{backgroundColor: "orange", height: "100%"}}>
        <PlayCircleOutlineIcon />
      </Button>
      <Button style={{backgroundColor: "orange", height: "100%"}}>
        <SkipNextIcon />
      </Button>
      {/* <Slider
        aria-label="Custom marks"
        defaultValue={20}
        // getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={[
          {
            value: 0,
            label: '0°C',
          },
          {
            value: 100,
            label: '100°C',
          },
        ]}
      /> */}
      {/* <Stack spacing={2} direction="row" sx={{ mb: 1, width: "15%" }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack> */}
    </Box>
  </Box>;
};

export default MainView;
