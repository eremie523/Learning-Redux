const { BUY_CAKE } = require('./cakeActionTypes');

// Action creator for buying a cake
function buyCake() {
    return {
        type: BUY_CAKE,
    };
}

export {buyCake};