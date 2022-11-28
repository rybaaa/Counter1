import React from 'react';
import s from "../Counters/Counter.module.css";
import {CounterType} from "../Counters/Counter";

type IncResetButtonPropsType = {
    title:string
    counter: CounterType
    onClick: (value: number) => void
    disabled: boolean
}
export const Button = (props: IncResetButtonPropsType) => {
    const onClickHandler = () =>{
        props.onClick(+props.counter.count)
    }
    return (
        <div>
            <button
                className={s.button}
                onClick={onClickHandler}
                disabled={props.disabled}
            >{props.title}
            </button>
        </div>
    );
};

