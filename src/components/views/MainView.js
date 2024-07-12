import { 
  Grid, 
  Paper
} from '@mui/material';
import NavigationPaper from '../papers/NavigationPaper';
import useMoodApi from "../../hooks/useMoodApi";

const MainView = () => {
  const backgroundColor = "black";
  const paperColor = "grey";
  const paddingSize = 10;

  const { username } = useMoodApi();

  return (
    <div style={{backgroundColor: backgroundColor, height: "93%"}}>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={2.35} style={{ padding: paddingSize, paddingRight: paddingSize / 2}}>
              <NavigationPaper paperColor={paperColor} paddingSize={paddingSize} />
            </Grid>
            <Grid item xs={7.3} style={{ padding: paddingSize, paddingLeft: paddingSize / 2, paddingRight: paddingSize / 2}}>
              <Paper square={false} style={{height: "100%", backgroundColor: paperColor}}>
                { username }
              </Paper>
            </Grid>
            <Grid item xs={2.35} style={{padding: paddingSize, paddingLeft: paddingSize / 2}}>
              <Paper square={false} style={{height: "100%", backgroundColor: paperColor}}>
              </Paper>
            </Grid>
        </Grid>
    </div>
  );
};

export default MainView;
