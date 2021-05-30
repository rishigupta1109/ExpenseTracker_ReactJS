import ChartBar from "../chart/ChartBar"
import CardV from "../UI/Card-V";
import  "./Chart.css";
import "../../components/media.css"
const Chart=(props)=>{
    let dp=props.datapoints;
    return(
        <CardV>
        <div id="chart">
            {dp.map((element,index)=>{return (<ChartBar key={index} height={element} index={index}></ChartBar>)} )}
        </div>
        </CardV>
    )

}

export default Chart;