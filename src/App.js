import React from 'react';
// import PropTypes from 'prop-types';
import Counter from 'Counter';
import Message from 'Message';
import Profile from 'Profile';

import 'App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Profile></Profile>
                <Message></Message>
                <Counter></Counter>
                <Counter color="green"></Counter>
                <Counter color="blue"></Counter>
            </div>
        );
    }
}

export default App;
