"use strict";

import React, { useState } from "react";
import AppWithoutRedux from './AppWithoutRedux/AppWithoutRedux';
import AppWithRedux from './AppWithRedux/AppWithRedux';
import AppWithReduxMiddleware from './AppWithReduxMiddleware/AppWithReduxMiddleware';
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

