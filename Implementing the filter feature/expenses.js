import React from 'react';

const Expense = ({ expenses, filterYear }) => {
  const filteredExpenses = expenses.filter((expense) => {
    if (!filterYear) {
      return true; // No filter applied if filterYear is empty
    }
    const expenseYear = expense.date.getFullYear().toString();
    return expenseYear.includes(filterYear);
  });

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
