import React from 'react';

const Expense = ({ expenses, filter }) => {
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount} - {expense.date.toISOString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expense;
