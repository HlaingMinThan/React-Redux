import { combineReducers, createStore } from "redux";
import cakeReducer from "./cakes/reducers";
import iceCreamReducer from "./iceCreams/reducers";

let rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

let store = createStore(rootReducer);

export default store;