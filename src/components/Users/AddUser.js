import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputAge, setInputAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(inputUsername, inputAge)
    };

    const usernameChangeHandler = (event) => {
        setInputUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;