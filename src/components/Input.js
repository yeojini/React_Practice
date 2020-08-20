import React, { useState } from 'react';
import './Child.css';

export const Input = ({ number, sum, children, onClickClear, onClickResultSend }) => {
    //비구조화할당문법을 파라미터에. = const { number, children } = props
    const resultClear = () => {
        onClickClear();
    }

    const resultSend = () => {
        onClickResultSend();
    }

    return (
        <div className="Child">
            <h1>Input</h1>
            <h3>input number (prop value) : {number}</h3>
            <h3>result : {sum}</h3>
            <input type="button" value="Send result to DisplayRoot" onClick={resultSend} />
            <input type="button" value="Clear" onClick={resultClear}></input>
            <h3>prop children : {children}</h3>
        </div>
    );
};

Input.defaultProps = {
    number: 'defaultNumber',
    children: 'defaultChildren'
}