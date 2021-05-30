import "./ChartBar.css";


const ChartBar=(props)=>{
const month=["jan","feb","mar","apr",'may',"jun","jul","aug","sep","oct","nov","dec"];
return (<div id="c">
<div id="barC">
    <div id="bar" style={{height:props.height}}></div>
   
    </div>
    <label>{month[props.index]}</label>
    </div>
)
}

export default ChartBar;