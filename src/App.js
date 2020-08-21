"use strict";

import React, { useState } from "react";
import AppWithoutRedux from './components/AppWithoutRedux/AppWithoutRedux';
import AppWithRedux from './components/AppWithRedux/AppWithRedux';
import AppWithReduxMiddleware from './components/AppWithReduxMiddleware/AppWithReduxMiddleware';
import './App.css';

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

