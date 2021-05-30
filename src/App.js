import "./App.css";
import React, { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import Card from "./components/UI/card";
import CardV from "./components/UI/Card-V";
import NewExpenseform from "./components/NewExpenses/NewExpenseform";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import Chart from "./components/chart/Chart";
import NavBar from "./components/UI/NavBar"
function App() {
  // const [selectedYear, setselectedYear] = useState("2020");
  let Expensedata = [
    { Title: "Food", Amt: "100", Date: "2020-06-06" },
    { Title: "Goods", Amt: "200", Date: "2021-06-07" },
    { Title: "shopping", Amt: "300", Date: "2019-05-05" },
  ];
  const [ExpenseData, setExpenseData] = useState(Expensedata);
  const [selectedYear, setselectedYear] = useState("Set Year");
  if(selectedYear=="Set Year"){var filteredData=ExpenseData;}
  else
 {  filteredData = ExpenseData.filter((data) => {
    let date = new Date(data.Date);
    return date.getFullYear() == selectedYear;
  });}
var datapoints=[0,0,0,0,0,0,0,0,0,0,0,0];
var totalAmt=1;
  for(let value of filteredData){
    // console.log(value);
    let date=new Date(value.Date);
   datapoints[date.getMonth()] =+ Number(value.Amt);
   console.log(datapoints[date.getMonth()])
   console.log("datapoints")
   totalAmt = (totalAmt) +Number (value.Amt);
   console.log(datapoints[date.getMonth()]/totalAmt)
   console.log(date.getMonth())
  }
  console.log(datapoints[5])
  datapoints.forEach( (element,index)=>{let x=(element/totalAmt)*100+"%";
; datapoints[index]= (x) ;});
console.log(datapoints[5] )

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
const [bool,setbool]=useState(true);
 const buttonHandler=()=>{
    setbool(false);
 }
  let button=<Card><button className="new-expense-button" onClick={buttonHandler}>New Expense</button></Card>;
  if(bool){}
  else{button=<NewExpenseform OnFormSubmit={ExpenseDataCollect} />;}


  return (
    <div id="container">
  <NavBar></NavBar>
      {button}
      <CardV>
      <Chart datapoints={datapoints} />
        <Card>
          <legend>Expense Year</legend>
          <ExpenseFilter
            selected={selectedYear}
            Onselect={selectedyear}
          ></ExpenseFilter>
        </Card>
      

        {filteredData.length === 0 && <legend>No Data Available</legend>}
        {filteredData.length > 0 &&
          filteredData.map((Data) => {
            return (
              <ExpenseItems
                key={Data.Title}
                title={Data.Title}
                amt={Data.Amt}
                date={Data.Date}
              ></ExpenseItems>
            );
          })}
      </CardV>
    </div>
  );
}

export default App;
