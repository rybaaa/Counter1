import React from 'react';
import './App.css';
import {Counter} from "./Counters/Counter";
import {CounterSet} from "./Counters/CounterSet";


function AppWithRedux() {
    return (
        <div className="App">
            <CounterSet/>
            <Counter/>
        </div>
    );
}

export default AppWithRedux;
