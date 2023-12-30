// App.js (Parent Component)
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
