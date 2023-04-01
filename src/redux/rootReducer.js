import { combineReducers } from "redux";
import cakeReducer from "./cakes/reducers";
import iceCreamReducer from "./iceCreams/reducers";

let rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

export default rootReducer;