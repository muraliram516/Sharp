import React, { useState } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Expense 1', amount: 50 },
    { id: 2, description: 'Expense 2', amount: 75 },
    // Add more expenses as needed
  ]);

  const updateExpenseAmount = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id ? { ...expense, amount: 100 } : expense
      )
    );
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
            <button onClick={() => updateExpenseAmount(expense.id)}>
              Set to $100
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
