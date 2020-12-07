import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { createStore } from "redux";
import allReducer from "./redux/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(
	allReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
