import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const composeEnhancer = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;