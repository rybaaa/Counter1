import React from 'react';
import s from "../Counters/Counter.module.css";

type SetButtonType = {
    startValue:number
    changeSetValue: (value: number) => void
    offButton:boolean
}

export const SetButton = (props:SetButtonType) => {
    const onClickHandler = () => {
        props.changeSetValue(props.startValue)
    }
    return (
        <div>
            <button
                onClick={onClickHandler}
                className={s.button}
                disabled={props.offButton}
            >set
            </button>
        </div>
    );
};
