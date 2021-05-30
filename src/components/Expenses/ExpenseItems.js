import Card from "../UI/card";
import ExpenseDate from "./ExpenseDate.js";



import "./ExpenseItems.css"
function ExpenseItems(props){
  



    return (<div>
        
        <Card>
            <ExpenseDate date={props.date}  ></ExpenseDate>
            <div  className="dib">{props.title} </div>
            <div className="dib" id="amt" >{props.amt} </div>
      
        </Card>
        </div>
    );
}

export default ExpenseItems;