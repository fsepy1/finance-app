import React from 'react';
import { useFinance } from '../contexts/FinanceContext';

const Summary = () => {
  const { getTotalIncome, getTotalExpense, getBalance } = useFinance();

  return (
    <div className="summary">
      <div className="summary-card">
        <h3>💰 Доходы</h3>
        <div className="income">+{getTotalIncome()} ₽</div>
      </div>
      <div className="summary-card">
        <h3>💸 Расходы</h3>
        <div className="expense">-{getTotalExpense()} ₽</div>
      </div>
      <div className="summary-card">
        <h3>⚖️ Баланс</h3>
        <div className="balance">{getBalance()} ₽</div>
      </div>
    </div>
  );
};

export default Summary;