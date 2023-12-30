import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterYear, setFilterYear] = useState('');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <input
        type="text"
        value={filterYear}
        onChange={(e) => setFilterYear(e.target.value)}
        placeholder="Filter by Year..."
      />
      <Expense expenses={expenses} filterYear={filterYear} />
    </div>
  );
};

export default App;
