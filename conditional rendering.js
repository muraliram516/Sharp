import React from 'react';

const Expense = ({ expenses, filterYear }) => {
  const filteredExpenses = expenses.filter((expense) => {
    if (!filterYear) {
      return true; // No filter applied if filterYear is empty
    }
    const expenseYear = expense.date.getFullYear().toString();
    return expenseYear.includes(filterYear);
  });

  let expensesContent;

  if (filteredExpenses.length === 0) {
    expensesContent = <p>No expenses found.</p>;
  } else if (filteredExpenses.length === 1) {
    expensesContent = (
      <div>
        <ul>
          {filteredExpenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ${expense.amount} - {expense.date.toISOString()}
            </li>
          ))}
        </ul>
        <p>Only a single expense here. Please add more.</p>
      </div>
    );
  } else {
    expensesContent = (
      <ul>
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount} - {expense.date.toISOString()}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Expense List</h2>
      {expensesContent}
    </div>
  );
};

export default Expense;
