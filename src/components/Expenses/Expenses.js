import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
  };
   
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
      return (
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpenseChart expenses={filteredExpenses} />
          <ExpenseList filter={filteredExpenses} />
          {/* {filteredExpenses.length === 0 && <p>No Expense Item</p>}
          {filteredExpenses.length > 0 &&
            filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))} */}
          {/* {filteredExpenses.length === 0 ? (
        <p>No Expense Item</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
        </Card>
      );
}
export default Expenses;
