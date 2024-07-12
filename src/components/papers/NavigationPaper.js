import NavigationHeader from "../navigation/NavigationHeader";
import NavigationLibrary from "../navigation/NavigationLibrary";

const NavigationPaper = ({paperColor, paddingSize}) => {
    return <div style={{height: "100%"}}>
        <NavigationHeader paperColor={paperColor} paddingSize={paddingSize} />
        <NavigationLibrary paperColor={paperColor} />
    </div>
};

export default NavigationPaper;