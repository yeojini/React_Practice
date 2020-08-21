import React from 'react';
import '../../style/Parent.css';
import Display from './Display';

const DisplayRoot = () => {
    return (
        <div className="Parent">
            <h1>DisplayRoot</h1>
            <Display></Display>
        </div>
    );
}

export default DisplayRoot;