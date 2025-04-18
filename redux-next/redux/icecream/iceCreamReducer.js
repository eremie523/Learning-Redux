import { BUY_ICECREAM } from "./iceCreamActionTypes";

const initIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default:
            return state
    }
}

export default iceCreamReducer