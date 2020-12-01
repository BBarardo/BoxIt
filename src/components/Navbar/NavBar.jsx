import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, Logo } from './NavBarElements'
import {BtnLinkPrimary} from '../Buttons'

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <Logo />
                    <h1 style={{ margin: '0.5rem' }}>It</h1>
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
                <NavBtn>
                    <BtnLinkPrimary to="/Login">
                        Login
                    </BtnLinkPrimary>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar
