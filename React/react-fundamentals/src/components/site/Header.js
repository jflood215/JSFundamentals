import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">React Library</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/jflood215/JSFundamentals/tree/master/React/react-fundamentals">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
