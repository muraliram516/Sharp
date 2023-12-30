import React from 'react';

const ExpenseForm = () => {
  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value);
  };

  return (
    <div>
      <h2>Expense Form</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
