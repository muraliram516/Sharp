import React from 'react';

const ExpenseDetails = (props) => (
  <div>
    <h2>{props.title}</h2>
    <div>${props.amount}</div>
    <div>Location: {props.location}</div>
  </div>
);

export default ExpenseDetails;
