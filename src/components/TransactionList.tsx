import React from "react";

interface TransactionListProps {
  transactions: Transaction[];
}

interface Transaction {
  type: "income" | "expense";
  category: string;
  amount: number;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <div className="text-center text-gray-500">No transactions yet.</div>
    );
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className={`p-4 border rounded ${
            transaction.type === "income" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <p>Type: {transaction.type}</p>
          <p>Category: {transaction.category}</p>
          <p>Amount: ${transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
