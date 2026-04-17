import React from 'react';
import { useFinance } from '../contexts/FinanceContext';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useFinance();

  if (transactions.length === 0) {
    return (
      <div className="transaction-list">
        <div className="empty">Нет операций. Добавьте первую!</div>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {transactions.map(transaction => (
        <div key={transaction.id} className="transaction-item">
          <div className="transaction-info">
            <div className="transaction-category">{transaction.category}</div>
            <div className="transaction-type">
              {transaction.type === 'income' ? '💰 Доход' : '💸 Расход'}
            </div>
          </div>
          <div className={`transaction-amount ${transaction.type === 'income' ? 'income-amount' : 'expense-amount'}`}>
            {transaction.type === 'income' ? '+' : '-'}{transaction.amount} ₽
          </div>
          <button 
            className="delete-btn"
            onClick={() => deleteTransaction(transaction.id)}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;