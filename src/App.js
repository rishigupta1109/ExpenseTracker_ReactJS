import "./App.css";
import React, { useState,useEffect} from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import Card from "./components/UI/card";
import CardV from "./components/UI/Card-V";
import NewExpenseform from "./components/NewExpenses/NewExpenseform";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import Chart from "./components/chart/Chart";
import NavBar from "./components/UI/NavBar";
import Login from "./components/Login/Login";
import Signup from "./components/signup/signup";

function App() {
  // const [selectedYear, setselectedYear] = useState("2020");
  
  let Expensedata = [
    { Title: "Food", Amt: "100", Date: "2020-06-06" },
    { Title: "Goods", Amt: "200", Date: "2021-06-07" },
    { Title: "shopping", Amt: "300", Date: "2019-05-05" },
  ];
  const [ExpenseData, setExpenseData] = useState(Expensedata);
  const [selectedYear, setselectedYear] = useState("Set Year");
  if (selectedYear === "Set Year") {
    var filteredData = ExpenseData;
  } else {
    filteredData = ExpenseData.filter((data) => {
      let date = new Date(data.Date);
      return date.getFullYear() === Number(selectedYear);
    });
  }
  var datapoints = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var Yeardatapoints = [0, 0, 0, 0, 0];
  var totalAmt = 1;
  var YeartotalAmt = 1;
  for (let value of filteredData) {
    // console.log(value);
    let date = new Date(value.Date);
    datapoints[date.getMonth()] = +Number(value.Amt);
   
    totalAmt = totalAmt + Number(value.Amt);
   
  }

  datapoints.forEach((element, index) => {
    let x = (element / totalAmt) * 100 + "%";
    datapoints[index] = x;
  });
 

  for (let index = 0; index < ExpenseData.length; index++) {
    // console.log(value);
    let date = new Date(ExpenseData[index].Date);
    if (date.getFullYear() === 2021) {
      Yeardatapoints[0] =+Number(ExpenseData[index].Amt);

      YeartotalAmt = YeartotalAmt + Number(ExpenseData[index].Amt);
    } else if (date.getFullYear() === 2020) {
      Yeardatapoints[1] =+Number(ExpenseData[index].Amt);

      YeartotalAmt = YeartotalAmt + Number(ExpenseData[index].Amt);
    } else if (date.getFullYear() === 2019) {
      Yeardatapoints[2] =+Number(ExpenseData[index].Amt);

      YeartotalAmt = YeartotalAmt + Number(ExpenseData[index].Amt);
    } else if (date.getFullYear() === 2018) {
      Yeardatapoints[3] =+Number(ExpenseData[index].Amt);

      YeartotalAmt = YeartotalAmt + Number(ExpenseData[index].Amt);
    } else if (date.getFullYear() === 2017) {
      Yeardatapoints[4] =+Number(ExpenseData[index].Amt);

      YeartotalAmt = YeartotalAmt + Number(ExpenseData[index].Amt);
    }
  }
  console.log(Yeardatapoints , YeartotalAmt);
  Yeardatapoints.forEach((element, index) => {
    let x = (element / YeartotalAmt) * 100 + "%";
    Yeardatapoints[index] = x;
  });
  console.log(Yeardatapoints , YeartotalAmt);

  let selectedyear = (selectedyear) => {
    setselectedYear(selectedyear);
  };

  let ExpenseDataCollect = (Expensedata) => {
    let ED = Expensedata;
    // console.log(Expensedata);
    setbool(true);

    setExpenseData([ED, ...ExpenseData]);

    // console.log(ExpenseData)
  };
  const [bool, setbool] = useState(true);
  const buttonHandler = () => {
    setbool(false);
  };
  let button = (
    <Card>
      <button className="new-expense-button" onClick={buttonHandler}>
        New Expense
      </button>
    </Card>
  );
  if (bool) {
  } else {
    button = <NewExpenseform OnFormSubmit={ExpenseDataCollect} />;
  }
  let chart = <Chart datapoints={datapoints} />;
  if (selectedYear === "Set Year") {
    chart = <Chart datapoints={Yeardatapoints} />;
  }
  const deleteHandler=(title)=>{
   let Deleteddata=ExpenseData.filter((data)=>{
     return data.Title!==title;
   })
   setExpenseData(Deleteddata);

  }
  const [IsLoggedIn,setIsLoggedIn]=useState(false);
  const [signUp,setsignup]=useState(false);
const LoginformSubmitHandler=()=>{
  setIsLoggedIn(true);
}
 const logout=()=>{
  setIsLoggedIn(false);
  localStorage.removeItem("LoggedIn")
 }
 useEffect(()=>{
  if(localStorage.getItem("LoggedIn")==='1'){setIsLoggedIn(true);}
  else{setIsLoggedIn(false);}
  
},[])
const signup=()=>{
setsignup(true);
}
const login=()=>{
  setsignup(false);
}
const SignupformSubmitHandler=()=>{
  setsignup(false);

}
const [email,setemail]=useState("");
const getEmail=(Email)=>{
  setemail(Email);
}


  return (
    <div id="container">
    <NavBar email={email} bool={IsLoggedIn} bool2={signUp} signup={signup} logout={logout} login={login}></NavBar>
    {!IsLoggedIn && !signUp && <Login getEmail={getEmail} OnFormSubmit={LoginformSubmitHandler}></Login>}
    {!IsLoggedIn && signUp && <Signup OnFormSubmit={SignupformSubmitHandler}></Signup> }
      {IsLoggedIn &&<React.Fragment>(
      {button}
      <CardV>
        {chart}
        <Card>
          <legend>Expense Year</legend>
          <ExpenseFilter
            selected={selectedYear}
            Onselect={selectedyear}
          ></ExpenseFilter>
        </Card>

        {filteredData.length === 0 && <legend id="nda">No Data Available</legend>}
        {filteredData.length > 0 &&
          filteredData.map((Data) => {
            return (
              <ExpenseItems
                Ondelete={deleteHandler}
                key={Data.Title}
                title={Data.Title}
                amt={Data.Amt}
                date={Data.Date}
              ></ExpenseItems>
            );
          })}
      </CardV>)</React.Fragment>}
    </div>
  );
}

export default App;
