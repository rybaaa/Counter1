import React from 'react';
import s from './Counter.module.css'
import {IncButton} from "../Buttons/IncButton";
import {ResetButton} from "../Buttons/ResetButton";

type CounterType = {
    startValue:number
    maxValue: number
    count: number | string
    incrementation: (counter: number | string) => void
    reset: () => void
}


export const Counter = (props: CounterType) => {

    const red_color = props.count === props.maxValue|| props.count === 'Invalid value!' ? s.redcounter : s.counter

    return (
        <div className={s.header}>
            <div className={red_color}>
                {props.count}
            </div>
            <div className={s.operations}>
                <IncButton
                    maxValue={props.maxValue}
                    count={props.count}
                    incrementation={props.incrementation}
                />
                <ResetButton
                    startValue={props.startValue}
                    count={props.count}
                    reset={props.reset}
                />
            </div>

        </div>
    );
};