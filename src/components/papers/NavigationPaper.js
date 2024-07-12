import NavigationHeader from "../navigation/NavigationHeader";
import NavigationLibrary from "../navigation/NavigationLibrary";

const NavigationPaper = ({paperColor, paddingSize, height}) => {
    return <div style={{height: height}}>
        <NavigationHeader paperColor={paperColor} paddingSize={paddingSize} />
        <NavigationLibrary paperColor={paperColor} />
    </div>
};

export default NavigationPaper;