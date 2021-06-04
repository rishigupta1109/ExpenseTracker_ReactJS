import "./PopUpBox.css";
import React from 'react';
import ReactDOM from 'react-dom';
// import Card from "./card.js";

const BackDrop=(props)=>{
  return (<div id="backdrop-box"></div>)

}
const Modal=(props)=>{

  const clickHandler=()=>{
    props.click();
  }
  return (   <div  id="pop-box">
     
  <div id="fr">
    <div>Error</div>
    </div>
    <div id="sr">
    <div>{props.child}</div>
    <button className="new-expense-button" id="pop-button" onClick={clickHandler} >OK!</button>
    </div>
   
 </div>);
}


const PopUpBox = (props) => {

  
    
  return (<React.Fragment>
    {ReactDOM.createPortal( <BackDrop />,document.getElementById("backdrop")) }
    {ReactDOM.createPortal( <Modal child={props.children} click={props.click} />,document.getElementById("pop-up-box")) }

    </React.Fragment>
  );
  }

export default PopUpBox;
