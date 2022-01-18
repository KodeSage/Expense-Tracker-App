
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem(props) {
 //Date Month Starts counting from 0

    return (
      // In React You only have one component root element
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    );
}

export default ExpenseItem;