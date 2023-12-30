import React, { useState } from 'react';
import BarChart from './BarChart';
import ExpenseForm from './ExpenseForm';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <BarChart expenses={expenses} />
    </div>
  );
};

export default ExpenseTracker;
