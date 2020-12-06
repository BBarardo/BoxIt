import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, Logo } from "./NavBarElements";
import { BtnLinkPrimary } from "../Buttons";
import { useSelector } from "react-redux";

const NavBar = () => {
	const isLogged = useSelector((state) => state.isLogged);

	return (
		<>
			<Nav>
				<NavLink to="/">
					<Logo />
					<h1 style={{ margin: "0.5rem" }}>It</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/services" activeStyle>
						Services
					</NavLink>
					<NavLink to="/contact-us" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/signUp" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
				{!isLogged ? (
					<NavBtn>
						<BtnLinkPrimary to="/login">Login</BtnLinkPrimary>
					</NavBtn>
				) : (
					<div></div>
				)}
			</Nav>
		</>
	);
};

export default NavBar;
