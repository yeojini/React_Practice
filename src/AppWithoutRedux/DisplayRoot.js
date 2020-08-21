import React from 'react';
import '../style/Parent.css';
import { Display } from './Display';

const DisplayRoot = ({ number }) => {
    return (
        <div className="Parent">
            <h1>DisplayRoot</h1>
            <h2>from InputRoot : {number}</h2>
            <Display number={number}></Display>
        </div>
    );
}

export default DisplayRoot;