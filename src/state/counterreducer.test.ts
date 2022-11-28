import {
    changeMaxValueAC,
    changeStartValueAC,
    counterreducer, enabledButtonAC,
    incAC,
    InitStateType,
    resetAC,
    setCountAC
} from "./counterreducer";

let startState: InitStateType

beforeEach(()=>{
    startState = {
        count:3,
        startValue:0,
        maxValue:5,
        offSetButton:false
    }
})

test ('count should be incremented', ()=>{
    let endState = counterreducer(startState, incAC(2))
    expect(endState.count).toBe(3)
    endState = counterreducer(startState, incAC(4))
    expect(endState.count).toBe(5)
    endState = counterreducer(startState, incAC(5))
    expect(endState.count).toBe(5)
})

test ('count should be reset to start value', ()=>{
    let endState = counterreducer(startState, resetAC())
    expect(endState.count).toBe(0)
})

test ('start value should be changed', ()=>{
    let endState = counterreducer(startState, changeStartValueAC(2))
    expect (endState.startValue).toBe(2)
    expect(endState.offSetButton).toBeTruthy()
})

test ('max value should be changed', ()=>{
    let endState = counterreducer(startState, changeMaxValueAC(22))
    expect (endState.maxValue).toBe(22)
    expect(endState.offSetButton).toBeTruthy()
})
test ('count should be changed', ()=>{
    let endState = counterreducer(startState, setCountAC('newValue'))
    expect (endState.count).toBe('newValue')
})
test ('button should be enabled', ()=>{
    let endState = counterreducer(startState, enabledButtonAC(true))
    expect (endState.offSetButton).toBeTruthy()
})

