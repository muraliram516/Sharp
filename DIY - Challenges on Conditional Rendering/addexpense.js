import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: title,
      amount: parseFloat(amount),
      date: new Date(date),
    };

    onAddExpense(expenseData);

    // Clear the form after submitting
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} required />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} required />
        </label>
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
