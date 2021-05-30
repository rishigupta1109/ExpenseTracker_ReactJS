// import React,{useState} from "react";
import "./ExpenseDate.css";
function ExpenseDate(props){
   let date=new Date(props.date);
  
    return (
        <div id="datebox">
          <div> {date.getDate()}</div> 
            <div>{date.toLocaleString("en",{month:"short"})}</div>
            <div>{date.getFullYear()}</div>  
        </div>
    );
}

export default ExpenseDate;