import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredCollege, setEnteredCollege] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
  
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollege.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter valid values for name, age, and college.',
      });
      return;
    }
  
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
  
    // Additional check for College Name
    if (enteredCollege.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid College Name.',
      });
      return;
    }
  
    // If all validations pass, call the onAddUser function
    props.onAddUser(enteredUsername, enteredAge, enteredCollege);
    setEnteredUsername('');
    setEnteredAge('');
    setEnteredCollege('');
  };
  
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            value={enteredCollege}
            onChange={collegeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
