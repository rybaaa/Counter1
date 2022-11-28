import React from 'react';
import s from "../Counters/Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../state/store";
import {resetAC} from "../state/counterreducer";
import {CounterType} from "../Counters/Counter";



export const ResetButton = () => {

    const counter = useSelector<AppRootStoreType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const onClickResetHandler = () => {
        dispatch(resetAC())
    }
    return (
        <div>
            <button
                className={s.button}
                onClick={onClickResetHandler}
                disabled={counter.count === counter.startValue || typeof counter.count === 'string'}
            >reset
            </button>
        </div>
    );
};

