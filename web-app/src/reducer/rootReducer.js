import { CALCULATER_KEY, calculatorReducer } from "./reducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
    [CALCULATER_KEY]: calculatorReducer
})

export {rootReducer}
