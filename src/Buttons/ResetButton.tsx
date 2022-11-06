import React from 'react';
import s from "../Counter.module.css";

type ResetButtonType = {
    count:number
    reset: ()=>void
}

export const ResetButton = (props:ResetButtonType) => {
    const onClickResetHandler = () => {
        props.reset()
    }
    return (
        <div>
            <button
                className={s.button}
                onClick={onClickResetHandler}
                disabled={props.count===0}
            >reset</button>
        </div>
    );
};

