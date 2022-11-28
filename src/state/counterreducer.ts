export type CountType = Number | String
type IncAT = {
    type: 'INCREMENT'
    value: CountType
}
type ResetAT = {
    type: 'RESET'
}
type ChangeStartValueAT = {
    type: 'CHANGE_START_VALUE'
    value: CountType
}
type ChangeMaxValueAT = {
    type: 'CHANGE_MAX_VALUE'
    value: CountType
}
type SetValueAT = {
    type: 'SET_NEW_COUNT'
    value: CountType
}
type EnabledButtonAC = {
    type: 'ENABLE_BUTTON'
    isActive:boolean
}

export type ActionTypes = IncAT | ResetAT | ChangeStartValueAT | ChangeMaxValueAT | SetValueAT | EnabledButtonAC

const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    offSetButton: true
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
            return {...state, startValue: action.value, offSetButton: true}
        case 'CHANGE_MAX_VALUE':
            return {...state, maxValue: action.value, offSetButton: true}
        case 'SET_NEW_COUNT':
            return {...state, count: action.value, offSetButton: true}
        case "ENABLE_BUTTON":
            return {...state, offSetButton: action.isActive}
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
export const setCountAC = (value: CountType) => {
    return {type: 'SET_NEW_COUNT', value} as const
}
export const enabledButtonAC = (isActive:boolean) => {
    return {type: 'ENABLE_BUTTON', isActive} as const
}