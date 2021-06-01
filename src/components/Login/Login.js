import Card from "../UI/card";
import React ,{useState,useEffect} from "react"
import "./Login.css"
const Login=(props)=>{
    const [UserName,setUserName]=useState("");
    const [UserPassword,setUserPassword]=useState("");
    const [valid,setValid]=useState(false);

const formSubmitHandler=(e)=>{

    e.preventDefault();
    if(valid){if(UserPassword===localStorage.getItem(`${UserName}`)){
        props.getEmail(UserName);
        props.OnFormSubmit();
       
    localStorage.setItem("LoggedIn",'1');}
else{alert("wrong UserName or Password")}}
 
}
const [string,setstring]=useState({string1:false,string2:false});
const ChangeHandlerUserName=(e)=>{
    setUserName(e.target.value);
   
}

const ChangeHandlerUserPassword=(e)=>{
    setUserPassword(e.target.value);
  
}
useEffect(()=>{
    const identifier=setTimeout(()=>{
        if(UserName.includes('@')&&UserPassword.trim().length>6){setValid(true);}
    },500);
    return ()=>{clearTimeout(identifier);}},[UserName,UserPassword]
);
const BlurHandlerUserName=()=>{ if(UserName.includes('@')){setstring((string)=>{return {...string ,string1: false
    
        }})}
else{setstring((string)=>{return { ...string ,string1: true
   
        }})}}

 const BlurHandlerUserPassword=()=>{
            if(UserPassword.trim().length>6){setstring((string)=>{return {...string ,string2: false
                
                    }})}
            else{setstring((string)=>{return {  ...string ,string2: true
          
                }})}
        }

    return (
        <Card>
            <form onSubmit={formSubmitHandler}>
            <h1 id="heading">LOGIN</h1>
                <div className={`Expense-form `}  >
               
                    <label>Email</label><input onBlur={BlurHandlerUserName} onChange={ChangeHandlerUserName} style={{borderColor:string.string1?'red':'white'}} type="text"></input>
                </div>
                <div className={`Expense-form `}>
                    <label>Password</label><input onBlur={BlurHandlerUserPassword} style={{borderColor:string.string2?'red':'white'}} onChange={ChangeHandlerUserPassword} type="password"></input>
                </div>
                <div >
                <button className="new-expense-button" style={{marginLeft:"120px",backgroundColor:valid?"#440BD4":"grey"}}>Login</button>
                </div>
            </form>
        </Card>
    )

}

export default Login; 