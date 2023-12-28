import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  const handleDeleteClick = () => {
    // Assuming onDelete is a prop function passed from a parent component
    // that handles the deletion of the expense
    if (props.onDelete) {
      props.onDelete();
    }
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
      <button onClick={handleDeleteClick}>Delete Expense</button>
    </div>
  );
};

export default ExpenseItem;
