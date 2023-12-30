// (Child Component)
import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    // Pass the expenseData to the parent component
    props.onAddExpense(expenseData);

    // Clear the form after submitting
    setTitle('');
    setAmount('');
    setDate('');
  };

  // Rest of the component...
};

export default ExpenseForm;
