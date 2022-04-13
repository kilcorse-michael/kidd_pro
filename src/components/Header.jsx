import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default function Header(){

  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return(
    <div>
  <Navbar
    color="faded"
    light
  >
    <NavbarBrand
      className="me-auto"
      href="/"
    >
      KiDD.pro
    </NavbarBrand>
    <NavbarToggler
      className="me-2"
      onClick={toggle}
    />
    <Collapse isOpen={isOpen} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink to="/about" tag={RRNavLink}>About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact"  tag={RRNavLink}>Contact Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services"  tag={RRNavLink}>Services</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
  );
}
