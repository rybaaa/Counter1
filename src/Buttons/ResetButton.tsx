import React from 'react';
import s from "../Counters/Counter.module.css";

type ResetButtonType = {
    startValue: number
    count: number | string
    reset: () => void
}

export const ResetButton = (props: ResetButtonType) => {
    const onClickResetHandler = () => {
        props.reset()
    }
    return (
        <div>
            <button
                className={s.button}
                onClick={onClickResetHandler}
                disabled={props.count === props.startValue || typeof props.count === 'string'}
            >reset
            </button>
        </div>
    );
};

