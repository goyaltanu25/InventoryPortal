import React from "react"
import "./Navigation.css"
import {Navbar,Nav} from "react-bootstrap"
import { NavLink } from "react-router-dom" 

const Navigation = () => {
return (
    <Navbar bg="dark" className="justify-content-between">
        <Navbar.Brand style={{color:"white"}}>
        <img src="../../public/logo192.png"  alt="logo"/>
          React Inventory App
         </Navbar.Brand>
       <Nav>
        <NavLink activeClassName="active" className="link" to="/login">Login</NavLink>
         <NavLink activeClassName="active" className="link" to="/products">Shop</NavLink>
        </Nav>
    </Navbar>
)

}
export default Navigation