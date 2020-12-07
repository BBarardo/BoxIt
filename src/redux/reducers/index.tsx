import { combineReducers } from "redux";
import authReducer from "./authReducer";

const store = combineReducers({
	auth: authReducer,
});

export default store;
