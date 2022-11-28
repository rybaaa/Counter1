import React, {ChangeEvent} from 'react';
import s from './CounterSet.module.css'
import {useDispatch, useSelector} from "react-redux";

import {changeMaxValueAC, changeStartValueAC, enabledButtonAC, setCountAC} from "../state/counterreducer";
import {CounterType} from "./Counter";
import {Button} from "../Buttons/Button";
import {AppRootStoreType} from "../state/store";

export const CounterSet = () => {

    // const counter = useSelector<AppRootStoreType, CounterType>(state => state.counter)
    const counter = useSelector<AppRootStoreType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || +e.currentTarget.value >= counter.maxValue) {
            dispatch(changeStartValueAC(+e.currentTarget.value))
            dispatch(setCountAC('Invalid value!'))
        } else {
            dispatch(changeStartValueAC(+e.currentTarget.value))
            dispatch(setCountAC('Press Set'))
            dispatch(enabledButtonAC(false))
        }
    }
    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || +e.currentTarget.value <= counter.startValue || counter.startValue < 0) {
            dispatch(changeMaxValueAC(+e.currentTarget.value))
            dispatch(setCountAC('Invalid value!'))
        } else {
            dispatch(changeMaxValueAC(+e.currentTarget.value))
            dispatch(setCountAC('Press Set'))
            dispatch(enabledButtonAC(false))
        }
    }
    const setCount = () => {
        dispatch(setCountAC(counter.startValue))
    }

    const input = counter.count === 'Invalid value!' ? s.redInput : s.input

    return (
        <div className={s.header}>
            <div className={s.counter}>
                StartValue
                <input
                    className={input}
                    onChange={onChangeHandlerStartValue}
                    defaultValue={counter.startValue}
                    type={"number"}
                    min="0"
                />
            </div>
            <div className={s.counter}>
                MaxValue
                <input
                    className={input}
                    onChange={onChangeHandlerMaxValue}
                    defaultValue={counter.maxValue}
                    type={"number"}
                    min="0"
                />
            </div>
            <div className={s.operations}>
                <Button title={'set'} counter={counter} onClick={setCount} disabled={counter.offSetButton}/>
            </div>
        </div>
    );
};