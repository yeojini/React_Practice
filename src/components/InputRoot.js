import React, { useState } from 'react';
import './Parent.css';
import { Input } from './Input';

const InputRoot = ({ handleSend }) => {
    const [inputNumber, setInputNumber] = useState('');
    const [sum, setSum] = useState('');
    const onClickSend = () => {
        console.log('Send');
        handleSend(inputNumber);
        //Root의 <InputRoot> 태그에서 프로퍼티로 설정한 onClick 함수
    }
    const onClickClearAll = () => {
        console.log('ClearAll');
        setInputNumber('');
        setSum('');
    }
    const onClickAdd = () => {
        console.log('Add');
        setSum(Number(sum) + Number(inputNumber));
    }

    const onClickResultSend = () => {
        handleSend(sum);
    }

    return (
        <div className="Parent">
            <h1>InputRoot</h1>
            <input type="text" value={inputNumber}
                onChange={(e) => {
                    setInputNumber(e.target.value);
                }}></input>
            <input type="button" value="Send input value to DisplayRoot"
                onClick={onClickSend}></input>
            <input type="button" value="Add"
                onClick={onClickAdd}></input>
            <input type="button" value="ClearAll"
                onClick={onClickClearAll}></input>
            <Input onClickClear={
                () => {
                    setSum('')
                }
            } onClickResultSend={onClickResultSend} number={inputNumber} sum={sum}></Input>
        </div>
    );
}

export default InputRoot;