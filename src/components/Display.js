import React from 'react';
import './Child.css';

export const Display = ({ number }) => {
    return (
        <div className="Child">
            <h1>Display</h1>
            <h3>from DisplayRoot : {number}</h3>
        </div>
    );
};