import logger from "redux-logger";
import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from "redux";

//Actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

// Initial states
const initialCakeState = {
    noOfCakes: 10,
    recentActionMessage: "",
};

const initialIceCreamState = {
    noOfIceCreams: 10,
    recentActionMessage: "",
};

// Reducer for cakes
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { 
                ...state, 
                noOfCakes: state.noOfCakes - 1, 
                recentActionMessage: 'A cake was bought!' 
            };
        default:
            return state;
    }
};

// Reducer for ice creams
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return { 
                ...state, 
                noOfIceCreams: state.noOfIceCreams - 1, 
                recentActionMessage: 'An ice cream was bought!' 
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
});

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(logger.createLogger()));

// Log the initial state
console.log('Initial State:', store.getState());

// Subscribe to store updates
store.subscribe(() => {
    // console.log('Updated State:', store.getState());
});

// Dispatch actions
store.dispatch({ type: BUY_CAKE });
store.dispatch({ type: BUY_ICECREAM });
store.dispatch({ type: BUY_CAKE });
store.dispatch({ type: BUY_ICECREAM });