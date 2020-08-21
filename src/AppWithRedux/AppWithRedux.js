import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import Input from './components/Input';
import Display from './components/Display';
import configureStore from './';

const store = Store = configureStore();

const AppWithRedux = ({ rootName }) => {
    return (
        <div className='App'>
            <h1>{rootName}</h1>
            <Provider store={store}>
                <Input></Input>
                <Display></Display>
            </Provider>
        </div>
    );
}

export default AppWithRedux;