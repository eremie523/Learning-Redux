const { BUY_CAKE } = require('./cakeActionTypes');

// Action creator for buying a cake
function buyCake(noOfCakes = 1) {
    return {
        type: BUY_CAKE,
        payload: {
            noOfCakes,
        },
    };
}

export {buyCake};