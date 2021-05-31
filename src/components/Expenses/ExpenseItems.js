import Card from "../UI/card";
import ExpenseDate from "./ExpenseDate.js";



import "./ExpenseItems.css"
function ExpenseItems(props){
  
const clickHandler=(e)=>{
    props.Ondelete(e.target.value);
}


    return (<div >
        
        <Card>
            <ExpenseDate date={props.date}  ></ExpenseDate>
            <div  className="dib">{props.title} </div>
            <div className="dib" id="amt" >{props.amt}$ </div>
            <button value={props.title} className="new-expense-button" onClick={clickHandler}>Delete</button>
        </Card>
        </div>
    );
}

export default ExpenseItems;