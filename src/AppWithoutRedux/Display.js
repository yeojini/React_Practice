import React from 'react';
import '../style/Child.css';

export const Display = ({ number }) => {
    return (
        <div className="Child">
            <h1>Display</h1>
            <h3>from DisplayRoot : {number}</h3>
        </div>
    );
};