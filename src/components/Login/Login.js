import Card from "../UI/card";
import PopUpBox from "../UI/PopUpBox";
import React ,{useState,useEffect,useReducer} from "react"
import "./Login.css"
const UserNamereducerFn=(state,action)=>{
if(action.type==="change"){
    return {...state,UserName:action.val}
}
else if(action.type==="Blur"){
    return {...state,isValid:action.val}
}
else{return {UserName:"" ,isValid:false} }
}
const UserPasswordreducerFn=(state,action)=>{
    if(action.type==="change"){
        return {...state,UserPassword:action.val}
    }
    else if(action.type==="Blur"){
        return {...state,isValid:action.val}
    }
    else{return {UserPassword:"" ,isValid:false} }
    }
const Login=(props)=>{
    // const [UserName,setUserName]=useState("");
    const [pop,setpop]=useState(false)
    // const [UserPassword,setUserPassword]=useState("");
    const [valid,setValid]=useState(false);
    const[userNameState,setuserNameState]=useReducer(UserNamereducerFn,{UserName:"" ,isValid:false})
    const[UserPasswordState,setUserPasswordState]=useReducer(UserPasswordreducerFn,{UserPassword:"" ,isValid:false})

const formSubmitHandler=(e)=>{

    e.preventDefault();
    if(valid){if(UserPasswordState.UserPassword===localStorage.getItem(`${userNameState.UserName}`)){
        props.getEmail(userNameState.UserName);
        props.OnFormSubmit();
        localStorage.setItem("UserName",userNameState.UserName);

    localStorage.setItem("LoggedIn",'1');}
else{setpop(true)}}
 
}

const ChangeHandlerUserName=(e)=>{
    setuserNameState({type:"change",val:e.target.value});
   
}

const ChangeHandlerUserPassword=(e)=>{
    setUserPasswordState({type:"change",val:e.target.value});
  
}
useEffect(()=>{
    const identifier=setTimeout(()=>{
        if(userNameState.UserName.includes('@')&&UserPasswordState.UserPassword.trim().length>6){setValid(true);}
    },500);
    return ()=>{clearTimeout(identifier);}},[userNameState.UserName,UserPasswordState.UserPassword]
);
const BlurHandlerUserName=()=>{ if(userNameState.UserName.includes('@')){setuserNameState({type:"Blur",val:false})}
else{setuserNameState({type:"Blur",val:true})}}

 const BlurHandlerUserPassword=()=>{
            if(UserPasswordState.UserPassword.trim().length>6){setUserPasswordState({type:"Blur",val:false})}
        else{setUserPasswordState({type:"Blur",val:true})}
        }
        const popclick=()=>{
            setpop(false);
        }

    return (
        <Card>
        {pop&&<PopUpBox click={popclick}><div>Wrong User Name or Password</div></PopUpBox>}
            <form onSubmit={formSubmitHandler}>
            <h1 id="heading">LOGIN</h1>
                <div className={`Expense-form `}  >
               
                    <label>Email</label><input onBlur={BlurHandlerUserName} onChange={ChangeHandlerUserName} style={{borderColor:userNameState.isValid?'red':'white'}} type="text"></input>
                </div>
                <div className={`Expense-form `}>
                    <label>Password</label><input onBlur={BlurHandlerUserPassword} style={{borderColor:UserPasswordState.isValid?'red':'white'}} onChange={ChangeHandlerUserPassword} type="password"></input>
                </div>
                <div >
                <button className="new-expense-button" style={{marginLeft:"120px",backgroundColor:valid?"#440BD4":"grey"}}>Login</button>
                </div>
            </form>
        </Card>
    )

}

export default Login; 