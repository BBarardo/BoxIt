import React from "react";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Login from "./pages/login";
import SignUp from "./pages/signUp/signUp";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/signUp" exact component={SignUp} />
				<Route path="/services" exact component={Services} />
				<Route path="/login" exact component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
