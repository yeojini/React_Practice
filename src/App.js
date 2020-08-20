"use strict";

import React, { useState } from "react";
import InputRoot from "./components/InputRoot";
import DisplayRoot from "./components/DisplayRoot";
import './App.css';

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

const AppWithRedux = ({ rootName }) => {
  return (
    <div className='App'>
      <h1>{rootName}</h1>
      <InputRoot></InputRoot>
      <DisplayRoot></DisplayRoot>
    </div>
  );
}

const AppWithReduxMiddleware = ({ rootName }) => {
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
};

const App = () => {
  return (
    <div>
      <AppWithoutRedux rootName="AppWithoutRedux"></AppWithoutRedux>
      <AppWithRedux rootName="AppWithRedux"></AppWithRedux>
      <AppWithReduxMiddleware rootName="AppWithReduxMiddleware"></AppWithReduxMiddleware>
    </div>
  );
}

export default App;

