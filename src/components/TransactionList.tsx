import React from 'react';

interface TransactionListProps {
  transactions: Transaction[];
}

interface Transaction {
  type: 'income' | 'expense';
  category: string;
  amount: number;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="space-y-4 mt-4">
      {transactions.map((transaction, index) => (
        <div key={index} className="p-4 border rounded">
          <p>Type: {transaction.type}</p>
          <p>Category: {transaction.category}</p>
          <p>Amount: #{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
