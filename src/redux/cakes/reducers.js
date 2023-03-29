import { BUY_CAKE } from "./types";

const initialState= {
    cakes : 10
};

let reducer = (state =  initialState,action) => {
    switch(action.type) {
        case BUY_CAKE :
            return {...state,cake : state.cake - 1}; 
        default : 
            return state;
    }
}

export default reducer;