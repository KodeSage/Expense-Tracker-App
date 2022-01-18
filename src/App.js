import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Welcome to Expense Tracker",
    amount: "",
    date: new Date(),
  },
];

function App() {
  const [expenses, setExpenseData] = useState(Dummy_Expenses);

   
  const AddExpenseHandler = (expense) => {
    setExpenseData(previousExpense => {
        return [expense, ...previousExpense]
    });
  }
  return (
    <div className="App">
      <NewExpenses onAddExpense={AddExpenseHandler }/>
      
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
