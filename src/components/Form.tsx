import React, { useState } from 'react';

interface FormProps {
  addTransaction: (transaction: Transaction) => void;
}

interface Transaction {
  type: 'income' | 'expense';
  category: string;
  amount: number;
}

const Form: React.FC<FormProps> = ({ addTransaction }) => {
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState<number | string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category && amount) {
      addTransaction({ type, category, amount: Number(amount) });
      setCategory('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'income' | 'expense')}
          className="p-2 border rounded w-full"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">Description</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Transaction
      </button>
    </form>
  );
};

export default Form;
