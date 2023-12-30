import React, { useState } from 'react';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    console.log(expenseData);
  };

  return (
    <div>
      <h2>Expense Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </label>
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
