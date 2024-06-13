import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TransactionForm from './components/Form';
import TransactionList from './components/TransactionList';
import Search from './components/Search';

interface Transaction {
  type: 'income' | 'expense';
  category: string;
  amount: number;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
        <TransactionForm addTransaction={addTransaction} />
       <div className='mt-4'>
       <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
       </div>
        <TransactionList transactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default App;
