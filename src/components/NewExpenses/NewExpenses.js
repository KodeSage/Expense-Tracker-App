import './NewExpenses.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseDataHandler = (retrievedExpenseData) => {
        const ExpenseData = {
             id: Math.random().toString(),
            ...retrievedExpenseData,  
        }
        props.onAddExpense(ExpenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
      setIsEditing(true);
    };

    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    return (
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
}

export default NewExpenses;