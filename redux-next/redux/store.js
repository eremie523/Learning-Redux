import { createLogger } from "redux-logger";
import iceCreamReducer from "./icecream/iceCreamReducer";
import { thunk } from "redux-thunk";
import userReducer from "./user/userReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const cakeReducer = require("./cake/cakeReducer");

const rootStore = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

const store = createStore(rootStore, applyMiddleware(createLogger(), thunk));
console.log("Initial State: ", store.getState());

store.subscribe(() => {
    console.log("Updated State: ", store.getState());
});

export default store;