import './App.css';
// import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
      <div className='container'>
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
