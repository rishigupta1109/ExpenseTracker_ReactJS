import "./ExpenseFilter.css"

const ExpenseFilter=(props)=>{
    let ChangeHandler=(e)=>{
        props.Onselect(e.target.value);
    }

    return (
        <div id="selectBG">
            <select onChange={ChangeHandler} >
           
                <option  value="Set Year">Set Year</option>
                <option  value="2021">2021</option>
                <option  value="2020">2020</option>
                <option  value="2019">2019</option>
                <option  value="2018">2018</option>
                <option  value="2017">2017</option>
            </select>
        </div>
    )

}


export default ExpenseFilter;