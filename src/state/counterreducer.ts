export type CountType = Number | String
type incAT = {
    type: 'INCREMENT'
    value: CountType
}
type resetAT = {
    type: 'RESET'
}
type ChangeStartValueAT = {
    type:'CHANGE_START_VALUE'
    value:CountType
}
type ChangeMaxValueAT = {
    type:'CHANGE_MAX_VALUE'
    value:CountType
}

export type ActionTypes = incAT | resetAT | ChangeStartValueAT | ChangeMaxValueAT

const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    offButton: false
}
export type InitStateType = typeof initialState

export const counterreducer = (state: InitStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'INCREMENT':
            return action.value > state.maxValue - 1 ? {...state, count: action.value} : {
                ...state,
                count: +action.value + 1
            }
        case 'RESET':
            return {...state, count: state.startValue}
        case 'CHANGE_START_VALUE':
            return {...state, startValue: action.value, offButton: true}
        case 'CHANGE_MAX_VALUE':
            return {...state, maxValue: action.value, offButton: true}
        default:
            return state
    }
}

export const incAC = (value: CountType) => {
    return {type: 'INCREMENT', value} as const
}
export const resetAC = () => {
    return {type: 'RESET'} as const
}
export const changeStartValueAC = (value: CountType) => {
    return {type: 'CHANGE_START_VALUE', value} as const
}
export const changeMaxValueAC = (value: CountType) => {
    return {type: 'CHANGE_MAX_VALUE', value} as const
}