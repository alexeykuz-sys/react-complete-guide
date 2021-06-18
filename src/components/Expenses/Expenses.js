import React, {useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const ExpenseFilterHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterExpense ={ExpenseFilterHandler} />
        {props.items.map((expense)=>(
        <ExpenseItem
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
        />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
