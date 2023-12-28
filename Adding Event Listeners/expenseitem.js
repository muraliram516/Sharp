import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { title: 'Car Insurance', amount: 294.67, date: new Date(2023, 3, 15), location: 'Gas Station' },
    // Add more expense objects as needed
  ]);

  const handleDeleteExpense = (index) => {
    // Use the spread operator to create a new array without the deleted expense
    const updatedExpenses = [...expenses.slice(0, index), ...expenses.slice(index + 1)];
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          amount={expense.amount}
          location={expense.location}
          title={expense.title}
          onDelete={() => handleDeleteExpense(index)}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
