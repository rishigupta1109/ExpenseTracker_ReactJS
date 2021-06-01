import React ,{useState ,useEffect} from "react"
import Card from "../UI/card";
const SignUp=(props)=>{  const [UserName,setUserName]=useState("");
const [UserPassword,setUserPassword]=useState("");
const [valid,setValid]=useState(false);
const formSubmitHandler=(e)=>{

    e.preventDefault();
    if(valid){props.OnFormSubmit();
        localStorage.setItem(`${UserName}`,UserPassword);
        
    }
 
}
useEffect(()=>{
    const identifier=setTimeout(()=>{
        if(UserName.includes('@')&&UserPassword.trim().length>6){setValid(true);}
    },500);
    return ()=>{clearTimeout(identifier);}},[UserName,UserPassword]
);
const ChangeHandlerUserName=(e)=>{
    setUserName(e.target.value);
   
}

const ChangeHandlerUserPassword=(e)=>{
    setUserPassword(e.target.value);
  
}

    return( <Card>
        <form onSubmit={formSubmitHandler}>
        <h1 id="heading">SIGNUP</h1>
            <div className={`Expense-form `}  >
           
                <label>Email</label><input  onChange={ChangeHandlerUserName}  type="text"></input>
            </div>
            <div className={`Expense-form `}>
                <label>Password</label><input   onChange={ChangeHandlerUserPassword} type="password"></input>
            </div>
            <div >
            <button className="new-expense-button" style={{marginLeft:"120px",backgroundColor:valid?"#440BD4":"grey"}}>SignUp</button>
            </div>
        </form>
    </Card>)

}
export default SignUp; 