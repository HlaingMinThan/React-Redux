import {BUY_ICE_CREAM} from './types.js';

const buyIceCream = (number) => {
    return {
        type : BUY_ICE_CREAM,
        payload : number
    }
}

export { buyIceCream }
