import React from 'react';
import s from './Counter.module.css'
import {MouseEvent} from "react";

type counterType = {
    count:number
    incrementation: (counter:number)=>void
    reset: ()=>void
}


export const Counter = (props:counterType) => {

    const onClickPlusHandler = (e:MouseEvent<HTMLButtonElement>) => {
        props.incrementation(props.count)
    }

    const onClickResetHandler = (e:MouseEvent<HTMLButtonElement>) => {
        props.reset()
    }

    const red_color = props.count === 5? s.redcounter: s.counter

    return (
        <div className={s.header}>
            <div className={red_color}>
                {props.count}
            </div>
            <div className={s.operations}>
                <button
                    className={s.button}
                    onClick={onClickPlusHandler}
                    disabled={props.count===5}
                >inc</button>
                <button
                    className={s.button}
                    onClick={onClickResetHandler}
                    disabled={props.count===0}
                >reset</button>
            </div>

        </div>
    );
};