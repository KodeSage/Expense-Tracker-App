import { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    
    const [EnteredTitle, setEnteredTitle] = useState('');
    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const [EnteredAmount, setEnteredAmount] = useState('');
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    }
     const [EnteredDate, setEnteredDate] = useState('');
     const DateChangeHandler = (event) => {
       setEnteredDate(event.target.value);
       console.log(event.target.value);
     };
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })

    // const TitleChangeHandler = (events) => {
    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             enteredTitle: events.target.value
    //         }
    //     })
    // }

    // const AmountChangeHandler = (events) => {
    //  setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             enteredAmount: events.target.value
    //         }         
    //   })
    // };
    
    // const DateChangeHandler = (events) => {
    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             enteredDate: events.target.value
    //         }
                 
    //     })
    
    const submitHandler = (events) => {
        events.preventDefault();

        const expenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate)         
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            {
              <input
                type="text"
                value={EnteredTitle}
                onChange={TitleChangeHandler}
              /> /*  Use either onChange or onInput to listen to input Change */
            }
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={EnteredAmount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={EnteredDate}
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">ADD EXPENSE</button>
        </div>
      </form>
    );
}
export default ExpenseForm;