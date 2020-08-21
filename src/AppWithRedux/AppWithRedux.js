import React, { useState } from 'react';
import Input from './components/Input';
import Display from './components/Display';

const AppWithRedux = ({ rootName }) => {
    return (
        <div className='App'>
            <h1>{rootName}</h1>
            <Input></Input>
            <Display></Display>
        </div>
    );
}

export default AppWithRedux;