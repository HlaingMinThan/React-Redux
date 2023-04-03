import { BUY_ICE_CREAM } from "./types";

const initialState= {
    iceCreams : 20
};

let reducer = (state =  initialState,action) => {
    switch(action.type) {
        case BUY_ICE_CREAM :
            return {...state,iceCreams : state.iceCreams - (action.payload ? action.payload : 1)}; 
        default : 
            return state;
    }
}

export default reducer;