import React, { useState } from 'react';
import '../Child.css';

export const Input = ({ number, sum, sumClear, onClickResultSend }) => {
    //비구조화할당문법을 파라미터에. = const { number, children } = props

    return (
        <div className="Child">
            <h1>Input</h1>
            <h3>input number (prop value) : {number}</h3>
            <h3>result : {sum}</h3>
            <input type="button" value="Send result to DisplayRoot" onClick={onClickResultSend} />
            <input type="button" value="Clear" onClick={sumClear}></input>
        </div>
    );
};

Input.defaultProps = {
    number: '1'
    //useState 를 써서 number 를 초기화 해줬기 때문에 이게 안먹는듯?
}