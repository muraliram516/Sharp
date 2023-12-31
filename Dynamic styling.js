import React, { useState } from 'react';

const GoalForm = () => {
  const [goal, setGoal] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setGoal(input);

    // Enable the button if there is at least one character in the input
    setIsButtonDisabled(input.length === 0);
  };

  const handleAddGoalClick = () => {
    // Handle the click event, e.g., add the goal to a list, etc.
    console.log('Adding goal:', goal);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddGoalClick}
        style={{ backgroundColor: isButtonDisabled ? 'lightcoral' : 'red' }}
        disabled={isButtonDisabled}
      >
        Add Goal
      </button>
    </div>
  );
};

export default GoalForm;
