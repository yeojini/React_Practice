import React, { useState } from 'react';
import InputRoot from './containers/InputRoot';
import DisplayRoot from './containers/DisplayRoot';

const AppWithRedux = ({ rootName }) => {
    return (
        <div className='App'>
            <h1>{rootName}</h1>
            <InputRoot></InputRoot>
            <DisplayRoot></DisplayRoot>
        </div>
    );
}

export default AppWithRedux;