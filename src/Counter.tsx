import React from 'react';
import s from './Counter.module.css'
import {IncButton} from "./Buttons/IncButton";
import {ResetButton} from "./Buttons/ResetButton";

type CounterType = {
    count:number
    incrementation: (counter:number)=>void
    reset: ()=>void
}


export const Counter = (props:CounterType) => {

    const red_color = props.count === 5? s.redcounter: s.counter

    return (
        <div className={s.header}>
            <div className={red_color}>
                {props.count}
            </div>
            <div className={s.operations}>
                <IncButton
                count={props.count}
                incrementation={props.incrementation}
                />
                <ResetButton
                count={props.count}
                reset={props.reset}
                />
            </div>

        </div>
    );
};