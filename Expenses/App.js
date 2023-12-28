import React from 'react';
import ExpenseList from './components/ExpenseList';

const App = () => {
  // Example array of expenses
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2023, 3, 15), location: 'Gas Station' },
    // Add more expense objects as needed
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
