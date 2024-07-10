import { 
  Grid, 
  Paper
} from '@mui/material';
import NavigationHeaderPaper from './papers/NavigationHeaderPaper';
import NavigationLibraryPaper from './papers/NavigationLibraryPaper';

const MainContent = () => {
  const backgroundColor = "black";
  const paperColor = "grey";
  const paddingSize = 10;

  return (
    <div style={{backgroundColor: backgroundColor, height: "93%"}}>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={2.35} style={{ padding: paddingSize, paddingRight: paddingSize / 2}}>
                <NavigationHeaderPaper paperColor={paperColor} paddingSize={paddingSize} />
                <NavigationLibraryPaper paperColor={paperColor} />
            </Grid>
            <Grid item xs={7.3} style={{ padding: paddingSize, paddingLeft: paddingSize / 2, paddingRight: paddingSize / 2}}>
                <Paper square={false} style={{height: "100%", backgroundColor: paperColor}}>
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

export default MainContent;
