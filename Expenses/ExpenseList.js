import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  const { expenses } = props;

  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          amount={expense.amount}
          location={expense.location}
          title={expense.title}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
