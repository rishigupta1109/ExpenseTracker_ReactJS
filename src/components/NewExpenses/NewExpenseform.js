import "./NewExpenseform.css";
import React ,{useState } from "react";
import Card from "../UI/card"

const NewExpenseform=(props)=>{
    const [state, setstate] = useState({
        Title:"",
        Date:"",
        Amt:""
    })
const ChangeHandlerTitle=(e)=>{
    setstate((state)=>{
      return { ...state,
        Title:e.target.value}
    })
   
}
const ChangeHandlerDate=(e)=>{
    setstate(state=>{return{
        ...state,
        Date:e.target.value
    }})
    
    

    
}
const ChangeHandlerAmt=(e)=>{
    setstate(state=>{return{
    ...state,
    Amt:e.target.value
}})

   
}



let submitHandler=(e)=>{
  e.preventDefault();
    let submittedForm={
        Title:state.Title,
        Date:new Date(state.Date),
        Amt:state.Amt

    }
    console.log("IN NEWEXPENSEFORM")
    console.log(submittedForm)
   
    props.OnFormSubmit(submittedForm);
    setstate({
        Title:"",
        Amt:"",
        Date:""
    })
    

   
}
    return (
        <Card >
          <form onSubmit={submitHandler}>
        <Card>
      
        <div className="Expense-form">
        ExpenseName <input required  value={state.Title} onChange={ChangeHandlerTitle} type="text"></input>
        </div>
        <div className="Expense-form">
        Date <input required value={state.Date} onChange={ChangeHandlerDate} type="date"></input>
        </div>
        <div className="Expense-form">
        Amount <input required value={state.Amt} onChange={ChangeHandlerAmt} type="number"></input>
        </div>
        
        </Card>
        <button  className="new-expense-button" style={{marginLeft:"420px"}} type="submit">Submit Expense</button>
        </form>
        
        
        </Card>
    )
}

export default NewExpenseform;