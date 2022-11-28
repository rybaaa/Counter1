import React from 'react';
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../state/store";
import {Button} from "../Buttons/Button";
import {incAC, resetAC} from "../state/counterreducer";

export type CounterType = {
    startValue: number
    maxValue: number
    count: number | string
    offSetButton: boolean
}

export const Counter = () => {

    const counter = useSelector<AppRootStoreType, CounterType>(state => state.counter)
    const dispatch = useDispatch()
    const incrementation = (value: number) => {
        dispatch(incAC(value))
    }
    const reset = () => {
        dispatch(resetAC())
    }

    const red_color = counter.count === counter.maxValue || counter.count === 'Invalid value!' ? s.redcounter : s.counter

    return (
        <div className={s.header}>
            <div className={red_color}>
                {counter.count}
            </div>
            <div className={s.operations}>
                <Button counter={counter} onClick={incrementation} title={'inc'} disabled={+counter.count+1 > counter.maxValue || typeof counter.count === 'string'}/>
                <Button counter={counter} onClick={reset} title={'reset'} disabled={counter.count === counter.startValue || typeof counter.count === 'string'}/>
            </div>

        </div>
    );
};