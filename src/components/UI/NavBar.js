import "./NavBar.css"
import React from "react"
const NavBar=(props)=>{
    let UserName=localStorage.getItem("UserName");
    const LogoutclickHandler=(e)=>{
        props.logout();
    }
    const SignUpclickHandler=(e)=>{
        props.signup();
    }
    const LoginclickHandler=(e)=>{
        props.login();
    }


    return(
        <div id="navBar">
            <h1>Expense Tracker</h1>
            {props.bool &&<React.Fragment><h3 id="User" style={{marginLeft:"700px",paddingTop:"8px"}}>{UserName}</h3><button id="logout-button" onClick={LogoutclickHandler} className="new-expense-button"> logout</button></React.Fragment>}
            {!props.bool &&!props.bool2&&<button id="logout-button" onClick={SignUpclickHandler} className="new-expense-button"> Signup</button>}
            {!props.bool &&props.bool2&& <button id="logout-button" onClick={LoginclickHandler} className="new-expense-button"> Login</button>}
        </div>
    )
}

export default NavBar;