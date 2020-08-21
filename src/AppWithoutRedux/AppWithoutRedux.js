import React, { useState } from 'react';
import InputRoot from './InputRoot';
import DisplayRoot from './DisplayRoot'

const AppWithoutRedux = ({ rootName }) => {
    const [number, setNumber] = useState('0');
    return (
        <div className='App'>
            <h1>{rootName}</h1>
            <InputRoot handleSend={(transferNumber) => {
                setNumber(transferNumber);
            }}></InputRoot>
            <DisplayRoot number={number}></DisplayRoot>
        </div>
    );
}

export default AppWithoutRedux;