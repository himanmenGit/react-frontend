import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const App = () => {
    const [value, setValue] = useState(0);
    const onIncrement = () => {
        setValue((prevState) => prevState + 1);
    };

    return (
        <div>
            App: {value}
            <button onClick={onIncrement}>+1</button>
            <CounterContext.Provider value={{ value, onIncrement }}>
                <Level1 />
            </CounterContext.Provider>
        </div>
    );
};

const Level1 = () => {
    return <Level2></Level2>;
};

const Level2 = () => {
    return <Level3></Level3>;
};

const Level3 = () => {
    const { value, onIncrement } = useContext(CounterContext);
    return (
        <div>
            Level3: {value}
            <button onClick={onIncrement}>+1</button>
        </div>
    );
};

export default App;
