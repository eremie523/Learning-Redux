const {BUY_CAKE} = require("./cakeActionTypes");

/**
 * Initial state for the cake feature in the Redux store.
 * 
 * @property {number} noOfCakes - The number of cakes available.
 */
const initCakeState = {
    noOfCakes: 10,
    recentActionMessage: "",
}

const cakeReducer = function (state = initCakeState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1,
                recentActionMessage: 'A cake was bought!',
            };
        default:
            return state;
    }
}

module.exports = cakeReducer;