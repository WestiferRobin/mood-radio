import { 
  Box,
  Grid, 
  Paper
} from '@mui/material';
import NavigationPaper from '../papers/NavigationPaper';
import useMoodApi from '../../hooks/mood-library-hooks/useMoodApi';
import useSearchApi from '../../hooks/mood-library-hooks/useSearchApi';
import Player from '../Player';

const MainView = () => {
  const backgroundColor = "black";
  const paperColor = "grey";
  const paddingSize = 10;

  const { user } = useMoodApi();
  const { artists } = useSearchApi();

  return (<>
    <Grid container style={{backgroundColor: backgroundColor, height: "92.5vh"}}>
      <Grid item xs={2.35} style={{backgroundColor: "blue"}}>
        asdf
      </Grid>
      <Grid item xs={7.3} style={{backgroundColor: "green"}}>
        fdsa
      </Grid>
      <Grid item xs={2.35} style={{backgroundColor: "yellow"}}>
        asdf
      </Grid>
      {/* <Grid item xs={2.35} style={{ padding: paddingSize, paddingRight: paddingSize / 2, paddingLeft: paddingSize}}>
        <NavigationPaper paperColor={paperColor} paddingSize={paddingSize} height={"94%"} />
      </Grid>
      <Grid item xs={7.3} style={{ padding: paddingSize, paddingLeft: paddingSize / 2, paddingRight: paddingSize / 2}}>
        <Paper square={false} style={{height: "100%", backgroundColor: paperColor}}>
          { user === null ? "Not Found or Loading" : `Hello ${user.username}!` }
          { artists.map((value) => <div>{value.name}</div>)}
        </Paper>
      </Grid>
      <Grid item xs={2.35} style={{padding: paddingSize, paddingLeft: paddingSize / 2}}>
        <Paper square={false} style={{height: "100%", backgroundColor: paperColor}}>
        </Paper>
      </Grid> */}
    </Grid>
    <Player />
  </>);
};

export default MainView;
