import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {

    const saveExpenseDataHandler = (retrievedExpenseData) => {
        const ExpenseData = {
             id: Math.random().toString(),
            ...retrievedExpenseData,
           
        }
        props.onAddExpense(ExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpenses;