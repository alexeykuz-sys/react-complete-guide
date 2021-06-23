import React, {useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const ExpenseFilterHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterExpense ={ExpenseFilterHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
