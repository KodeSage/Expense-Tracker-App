import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";


function App() {

  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "300",
      date: new Date(2021, 11, 8),
    },
    {
      id: "e2",
      title: "Bottle Firm",
      amount: "200",
      date: new Date(2021, 1, 8),
    },
    {
      id: "e3",
      title: "Trip to Paris",
      amount: "400",
      date: new Date(2011, 11, 8),
    },
    {
      id: 'e4',
      title: "Trip to London",
      amount: "500",
      date: new Date(2002, 13, 5)
    }
  ];
  const AddExpenseHandler = (expense) => {
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpenses onAddExpense={AddExpenseHandler }/>
      
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
