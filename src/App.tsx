import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counters/Counter";
import {CounterSet} from "./Counters/CounterSet";

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [offButton, setOffButton] = useState(true)

    const [count, setCount] = useState<number | string>(startValue)

    const incrementation = (count: number | string) => {
        if (count === maxValue) {
            setCount(count)
        } else {
            setCount(+count + 1)
        }
    }

    const reset = () => {
        setCount(startValue)
    }

    const changeStartValue = (value: number) => {
        setStartValue(value)
        setOffButton(true)
    }
    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setOffButton(true)
    }

    const changeSetValue = (value: number | string) => {
        setCount(value)
        setOffButton(true)
    }

    const changeDisabledButton =()=>{
        setOffButton(false)
    }

    return (
        <div className="App">
            <CounterSet
                startValue={startValue}
                maxValue={maxValue}
                count={count}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
                changeSetValue={changeSetValue}
                offButton={offButton}
                changeDisabledButton={changeDisabledButton}
            />
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                count={count}
                incrementation={incrementation}
                reset={reset}
            />
        </div>
    );
}

export default App;
