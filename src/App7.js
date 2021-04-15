import React, { createContext, useContext } from 'react';

const MessageContext = createContext();

const App = () => (
    <MessageContext.Provider value="provider values">
        <Level2Wrapper />;
    </MessageContext.Provider>
);

const Level2Wrapper = () => {
    const message = useContext(MessageContext);
    return (
        <div>
            <Level2 message={message} />
        </div>
    );
};

const Level2 = ({ message }) => {
    return <div>Level2: {message}</div>;
};

export default App;
