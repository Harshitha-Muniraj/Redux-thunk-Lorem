import { LoremReducer } from "./reducers/LoremReducer";
import { createStore, applyMiddleware } from "redux"; // redux-tookit

import {thunk} from "redux-thunk";

const store = createStore(LoremReducer, applyMiddleware(thunk));

export default store;