import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter expenses..."
      />
      <Expense expenses={expenses} filter={filter} />
    </div>
  );
};

export default App;
