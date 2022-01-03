import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem(props) {
 //Date Month Starts counting from 0
 const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
   
    setTitle('Updated!!!');
    console.log(title);
   }
    return (
      // In React You only have one component root element
      <Card className="expense-item">
          <ExpenseDate date = {props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler} > Click me</button>
          </Card>
    );
}

export default ExpenseItem;