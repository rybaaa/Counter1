import React, {ChangeEvent} from 'react';
import s from './CounterSet.module.css'
import {SetButton} from "../Buttons/SetButton";

type CounterType = {
    startValue: number
    maxValue: number
    count: number | string
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    changeSetValue: (value: number | string) => void
    offButton: boolean
    changeDisabledButton: () => void
}

export const CounterSet = (props: CounterType) => {

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.currentTarget.value, 10) < 0 || parseInt(e.currentTarget.value, 10) === -0 || +e.currentTarget.value >= props.maxValue) {
            props.changeStartValue(parseInt(e.currentTarget.value, 10))
            props.changeSetValue('Invalid value!')
        } else {
            props.changeStartValue(+e.currentTarget.value)
            props.changeSetValue('Press Set')
            props.changeDisabledButton()
        }
    }
    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.currentTarget.value, 10) < 0 || +e.currentTarget.value <= props.startValue || props.startValue < 0) {
            props.changeMaxValue(+e.currentTarget.value)
            props.changeSetValue('Invalid value!')
        } else {
            props.changeMaxValue(+e.currentTarget.value)
            props.changeSetValue('Press Set ')
            props.changeDisabledButton()
        }

    }

    const input = props.count === 'Invalid value!' ? s.redInput : s.input

    return (
        <div className={s.header}>
            <div className={s.counter}>
                StartValue
                <input
                    className={input}
                    onChange={onChangeHandlerStartValue}
                    defaultValue={props.startValue}
                    type={"number"}/>
            </div>
            <div className={s.counter}>
                MaxValue
                <input
                    className={input}
                    onChange={onChangeHandlerMaxValue}
                    defaultValue={props.maxValue}
                    type={"number"}/>
            </div>
            <div className={s.operations}>
                <SetButton
                    startValue={props.startValue}
                    changeSetValue={props.changeSetValue}
                    offButton={props.offButton}
                />
            </div>
        </div>
    );
};