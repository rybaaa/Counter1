import React from 'react';
import s from "../Counters/Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../state/store";
import {setCountAC} from "../state/counterreducer";
import {CounterType} from "../Counters/Counter";

export const SetButton = () => {
    const counter = useSelector<AppRootStoreType, CounterType>(state => state.counter)
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(setCountAC(counter.startValue))
    }
    return (
        <div>
            <button
                onClick={onClickHandler}
                className={s.button}
                disabled={counter.offSetButton}
            >set
            </button>
        </div>
    );
};
