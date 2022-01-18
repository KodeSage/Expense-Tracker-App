import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

    
const ExpenseList = (props) => {

    if (props.filter.length === 0) {
        return <h2 className="expense-list__fallback">Found No Expense</h2>;
    };
    return <ul className=".expense-list">
        {props.filter.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))};</ul>;
}

export default ExpenseList
