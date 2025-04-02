import { createLogger } from "redux-logger";
import iceCreamReducer from "./icecream/iceCreamReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const cakeReducer = require("./cake/cakeReducer");

const rootStore = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootStore, applyMiddleware(createLogger()));
console.log("Initial State: ", store.getState());

store.subscribe(() => {
    console.log("Updated State: ", store.getState());
});

export default store;