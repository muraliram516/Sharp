import React, {useState} from "react";
import Card from "../UI/Card";
import classes from'./AddUser.module.css';
import ErrorModule from './AddUser.module.css';
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        console.log(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    };
    const usernameChangeHandler = {event} => {
    setEnteredUsername(event.target.value);


    const ageChangeHandler = {event} => {
        setEnteredUsername(event.target.value);
        }; 
    
    return {
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge}/>
        <button type="submit"> Add user</button>
        </form>

        </Card>
    };
};
export  default AddUser;