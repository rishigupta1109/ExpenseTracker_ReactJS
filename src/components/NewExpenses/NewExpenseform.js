import "./NewExpenseform.css";
import React ,{useState } from "react";
// import Card from "../UI/card";
import PopUpBox from "../UI/PopUpBox";



const NewExpenseform=(props)=>{
    const [state, setstate] = useState({
        Title:"",
        Date:"",
        Amt:""
    })

    const[Bool,setBool]=useState(false);


    
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



let submitHandler=(e)=>{e.preventDefault();
  
  if(state.Title===""||state.Amt===""||state.Date===""){
      setBool(true);
  }
  else{  let submittedForm={
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

   
}
const clickHandler=()=>{
    setBool(false);
}
    return (
        <div className="expense-form-container" >
       {Bool&& <PopUpBox click={clickHandler} ><>Please fill all inputs</></PopUpBox>}
          <form onSubmit={submitHandler}>
        <div className="expense-form-container">
      
        <div className="Expense-form">
        ExpenseName <input   value={state.Title} onChange={ChangeHandlerTitle} type="text"></input>
        </div>
        <div className="Expense-form">
        Date <input  value={state.Date} onChange={ChangeHandlerDate} type="date"></input>
        </div>
        <div className="Expense-form">
        Amount <input  value={state.Amt} onChange={ChangeHandlerAmt} type="number"></input>
        </div>
        
        </div>
        <div className="button-box">
        <button  className="new-expense-button" id="but" style={{marginLeft:"420px"}} type="submit">Submit Expense</button>
        </div>
        </form>
        
        
        </div>
    )
}

export default NewExpenseform;