import React, { useState } from 'react';
import { useFinance } from '../contexts/FinanceContext';

const TransactionForm = () => {
  const { addTransaction } = useFinance();
  const [formData, setFormData] = useState({
    type: 'expense',
    category: '',
    amount: ''
  });

  const categories = {
    income: ['Зарплата', 'Фриланс', 'Подарок', 'Инвестиции', 'Другое'],
    expense: ['Еда', 'Транспорт', 'Жильё', 'Развлечения', 'Здоровье', 'Другое']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.amount || formData.amount <= 0) {
      alert('Заполните все поля корректно');
      return;
    }
    
    addTransaction({
      type: formData.type,
      category: formData.category,
      amount: Number(formData.amount)
    });
    
    setFormData({ type: 'expense', category: '', amount: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Тип операции</label>
          <select 
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value, category: '' })}
          >
            <option value="expense">Расход</option>
            <option value="income">Доход</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Категория</label>
          <select 
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Выберите категорию</option>
            {categories[formData.type].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Сумма (₽)</label>
          <input 
            type="number"
            placeholder="0"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          />
        </div>
        
        <button type="submit">➕ Добавить операцию</button>
      </form>
    </div>
  );
};

export default TransactionForm;