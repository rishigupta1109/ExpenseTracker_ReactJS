import "./ChartBar.css";


const ChartBar=(props)=>{
const month=["jan","feb","mar","apr",'may',"jun","jul","aug","sep","oct","nov","dec"];
const year=["2021","2020","2019","2018","2017"];
let label= <label>{month[props.index]}</label>;
console.log("label"+props.length);
if(props.length===5){
    
    label=  <label>{year[props.index]}</label>
}

return (<div id="c">
<div id="barC">
    <div id="bar" style={{height:props.height}}></div>
   
    </div>
    {label}
    </div>
)
}

export default ChartBar;