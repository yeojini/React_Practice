"use strict";

import React, { useState } from "react";
import InputRoot from "./components/InputRoot";
import DisplayRoot from "./components/DisplayRoot";
import './App.css';

const App = () => {
  const [number, setNumber] = useState('0');
  return (
    <div className='App'>
      <h1>Root</h1>
      <InputRoot handleSend={(transferNumber) => {
        setNumber(transferNumber);
      }}></InputRoot>
      <DisplayRoot number={number}></DisplayRoot>
    </div>
  );
}

export default App;
