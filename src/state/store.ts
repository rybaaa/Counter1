import {combineReducers, legacy_createStore} from "redux";
import {counterreducer} from "./counterreducer";


const rootReducer = combineReducers({
    count: counterreducer})

export const store = legacy_createStore(rootReducer)

export type AppRootStoreType = ReturnType<typeof rootReducer>