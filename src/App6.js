import React, { useReducer, useState } from 'react';

const reducer = (prevState, action) => {
    const { type, value } = action;
    if (type === 'SET_NAME') {
        return { ...prevState, name: value };
    } else if (type === 'SET_AGE') {
        return { ...prevState, age: value };
    }
    return prevState;
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, { name: '', age: '' });
    const { name, age } = state;
    const onChange = (e) => {
        const { name: type, value } = e.target;
        dispatch({ type: type, value: value });
    };
    // const [person, setPerson] = useState({ name: '', age: '' });
    // const { name, age } = person;
    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setPerson((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };
    return (
        <div>
            name: {name}, age: {age}
            <br />
            <input
                type="text"
                name="SET_NAME"
                placeholder="name"
                onChange={onChange}
            ></input>
            <input
                type="text"
                name="SET_AGE"
                placeholder="age"
                onChange={onChange}
            ></input>
        </div>
    );
};

export default App;
