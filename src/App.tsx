import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TransactionForm from './components/Form';
import TransactionList from './components/TransactionList';

interface Transaction {
  type: 'income' | 'expense';
  category: string;
  amount: number;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
