import React from 'react';
import s from "../Counters/Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../state/store";
import {incAC} from "../state/counterreducer";
import {CounterType} from "../Counters/Counter";


export const IncButton = () => {
    const counter = useSelector<AppRootStoreType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const onClickPlusHandler = () => {
        dispatch(incAC(counter.count))
    }

    return (
        <div>
            <button
                className={s.button}
                onClick={onClickPlusHandler}
                disabled={+counter.count+1 > counter.maxValue || typeof counter.count === 'string'}
            >inc
            </button>
        </div>
    );
};

