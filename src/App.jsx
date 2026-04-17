import { FinanceProvider } from './contexts/FinanceContext';
import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <FinanceProvider>
      <div className="app">
        <h1>💰 Учёт личных финансов</h1>
        <Summary />
        <TransactionForm />
        <TransactionList />
      </div>
    </FinanceProvider>
  );
}

export default App;