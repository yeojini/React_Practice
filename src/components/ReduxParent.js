import React from 'react';
import './Parent.css';
import ReduxChild from './ReduxChild';

const ReduxParent = () => {
    return (
        <div className="Parent">
            <h1>ReduxParent</h1>
            <ReduxChild></ReduxChild>
        </div>
    );
}

export default ReduxParent;