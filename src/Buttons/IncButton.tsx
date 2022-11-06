import React from 'react';
import s from "../Counter.module.css";

type IncButtonType = {
    count:number
    incrementation: (counter:number)=>void
}

export const IncButton = (props:IncButtonType) => {
    const onClickPlusHandler = () => {
        props.incrementation(props.count)
    }

    return (
        <div>
            <button
                className={s.button}
                onClick={onClickPlusHandler}
                disabled={props.count===5}
            >inc</button>
        </div>
    );
};

