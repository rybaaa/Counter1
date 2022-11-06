import React from 'react';
import s from "../Counters/Counter.module.css";

type IncButtonType = {
    maxValue: number
    count: number | string
    incrementation: (counter: number | string) => void
}

export const IncButton = (props: IncButtonType) => {
    const onClickPlusHandler = () => {
        props.incrementation(props.count)
    }

    return (
        <div>
            <button
                className={s.button}
                onClick={onClickPlusHandler}
                disabled={props.count === props.maxValue || typeof props.count === 'string'}
            >inc
            </button>
        </div>
    );
};

