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
				<Route path="/about" component={About} />
				<Route path="/signUp" component={SignUp} />
				<Route path="/services" component={Services} />
				<Route path="/login" component={Login} />
				<Route path="/projects" component={Projects} />
				projects
			</Switch>
		</Router>
	);
}

export default App;
