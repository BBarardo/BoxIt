import loggedReducer from "./isLogged";
// import jwtReducer from "./jwt";

import { combineReducers } from "redux";

const allReducer = combineReducers({
	isLogged: loggedReducer,
	// jwt: jwtReducer,
});

export default allReducer;
